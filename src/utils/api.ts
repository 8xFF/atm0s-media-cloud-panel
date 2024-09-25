import { createMiddlewareDecorator, createParamDecorator, NextFunction, UnauthorizedException } from 'next-api-decorators'
import { getToken } from 'next-auth/jwt'
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
export const SessionUserId = createParamDecorator<string>((req) => (req as any).userId)

export function ApiExceptionHandler(error: unknown, req: NextApiRequest, res: NextApiResponse) {
  const errorStr = error instanceof Error ? error.message : 'An unknown error occurred.'
  res.status(200).json({ status: false, error: errorStr })
}

export const NextAuthGuard = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const token = await getToken({ req, secret: envServer.NEXTAUTH_SECRET })
    if (!token) {
      throw new UnauthorizedException('Unauthorized')
    }

    ;(req as any).userId = (token as any).user.id

    return next()
  }
)
