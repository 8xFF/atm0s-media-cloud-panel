import { getPrisma } from './prisma'
import { base64url, EncryptJWT, jwtDecrypt } from 'jose'
import { createMiddlewareDecorator, createParamDecorator, NextFunction, UnauthorizedException } from 'next-api-decorators'
import { PipeMetadata } from 'next-api-decorators/dist/pipes/ParameterPipe'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { envServer } from '@/config/env-server'

export interface GroupToken {
  server_endpoint: string
  token: string
}

export class AuthUser {
  id!: string
  name!: string
  email!: string
  image!: string | null
}

declare module 'next' {
  interface NextApiRequest {
    user: AuthUser
  }
}

export interface ApiResponse<T> {
  status: boolean
  data?: T
  error?: string
  message?: string
}

export function success<T>(data: T): ApiResponse<T> {
  return { status: true, data }
}

export function error(error: string, message?: string): ApiResponse<any> {
  return { status: false, error, message }
}

export const SessionUser = createParamDecorator<AuthUser>((req) => req.user)

export function ApiExceptionHandler(error: unknown, req: NextApiRequest, res: NextApiResponse) {
  console.error(error)
  const errorStr = error instanceof Error ? error.message : 'An unknown error occurred.'
  res.status(200).json({ status: false, error: errorStr })
}

export const NextAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const tokenCookie = req.cookies['next-auth.session-token'] || req.cookies['__Secure-next-auth.session-token']
    if (!tokenCookie) {
      console.error('Missing token cookie', req.cookies)
      throw new UnauthorizedException()
    }
    const user = await getPrisma().user.findFirst({
      where: {
        Session: {
          some: {
            sessionToken: tokenCookie,
          },
        },
      },
    })
    if (!user) {
      throw new UnauthorizedException()
    }
    // if (user.status != UserStatus.Actived) {
    //   throw new UnauthorizedException()
    // }

    req.user = {
      id: user.id,
      name: user.name as string,
      email: user.email as string,
      image: user.image,
    }
    return next()
  }
)

const JwtSecret = base64url.decode(envServer.NEXTAUTH_SECRET || '')

/** Validates and transforms `JwtToken` string */
export function JwtTokenPipe() {
  return async (value: any, metadata?: PipeMetadata) => {
    if (typeof value !== 'string') {
      throw new Error('JwtTokenPipe requires a string value')
    }
    // decode jwt with Jose
    const { payload } = await jwtDecrypt(value, JwtSecret, {
      issuer: metadata?.name || '',
    })

    return payload
  }
}

export async function JwtTokenEncrypt(data: any, expires: number = 24 * 60 * 60): Promise<string> {
  const jwt = await new EncryptJWT(data)
    .setExpirationTime(expires)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .encrypt(JwtSecret)
  return jwt
}

export async function JwtTokenDecrypt(token: string): Promise<any> {
  const { payload } = await jwtDecrypt(token, JwtSecret)
  return payload
}
