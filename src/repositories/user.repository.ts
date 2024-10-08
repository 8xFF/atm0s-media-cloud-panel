import { AuthUser } from '@/schema'
import { getPrisma } from '@/utils/prisma'

type UserFilter = {
  id?: string
}

export class UserRepository {
  private static instance: UserRepository | undefined
  public static get Instance(): UserRepository {
    if (!this.instance) {
      this.instance = new UserRepository()
    }
    return this.instance
  }
  private prismaCli

  private constructor() {
    this.prismaCli = getPrisma()
  }

  async get(filter: UserFilter): Promise<AuthUser | undefined> {
    const res = await this.prismaCli.user.findFirst({
      where: this.toFilter(filter),
    })
    if (!res) {
      return undefined
    }

    return this.toEntity(res)
  }

  private toFilter(filter: UserFilter) {
    return {
      id: filter.id,
    }
  }

  private toEntity(res: {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
  }): AuthUser {
    return {
      id: res.id,
      email: res.email,
      name: res.name || '',
      image: res.image,
    }
  }
}
