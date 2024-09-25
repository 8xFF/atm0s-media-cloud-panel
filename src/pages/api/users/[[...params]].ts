import { createHandler, Get } from 'next-api-decorators'
import { NextAuthGuard, SessionUserId } from '@/utils/api'
import { getPrisma } from '@/utils/prisma'

class UserRouter {
  @Get('/me')
  @NextAuthGuard()
  async me(@SessionUserId() userId: string) {
    const prisma = getPrisma()
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
    return user
  }
}

export default createHandler(UserRouter)
