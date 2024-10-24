import { envServer } from '@/config/env-server'
import { getPrisma } from '@/utils/prisma'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(getPrisma()),
  secret: envServer.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: envServer.NEXTAUTH_SECRET,
  },
  providers: [
    GoogleProvider({
      clientId: envServer.GOOGLE_ID,
      clientSecret: envServer.GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: envServer.GITHUB_ID,
      clientSecret: envServer.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    jwt: async (params) => {
      const { token, account, user } = params
      if (account && user) {
        return {
          user,
        }
      }

      return token
    },
    session: async (params: any) => {
      const { user, session, token } = params
      if (token) {
        session.user = token.user
      }
      if (user) {
        session.user.role = user.role
        session.user.status = user.status
        session.user.id = user.id
      }
      return session
    },
  },
}

export default NextAuth(authOptions)
