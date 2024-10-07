import { Prisma } from '@prisma/client'
import { ProjectAccessKeyDto } from '@/schema'
import { getPrisma } from '@/utils/prisma'

type ProjectKeyFilter = {
  id?: number
  ids?: number[]
  apiKey?: string
  projectId?: string
  userId?: string
}

export class ProjectAccessKeyRepository {
  private static instance: ProjectAccessKeyRepository | undefined
  public static get Instance(): ProjectAccessKeyRepository {
    if (!this.instance) {
      this.instance = new ProjectAccessKeyRepository()
    }
    return this.instance
  }
  private prismaCli

  private constructor() {
    this.prismaCli = getPrisma()
  }

  async create(dto: Omit<ProjectAccessKeyDto & { secretKey: string }, 'id'>): Promise<ProjectAccessKeyDto> {
    const res = await this.prismaCli.projectAccessKey.create({
      data: {
        projectId: dto.projectId,
        userId: dto.userId,
        apiKey: dto.apiKey,
        secretKey: dto.secretKey,
        description: dto.description,
      },
    })

    return this.toEntity(res)
  }

  async list(filter: ProjectKeyFilter): Promise<ProjectAccessKeyDto[]> {
    const res = await this.prismaCli.projectAccessKey.findMany({
      where: this.toFilter(filter),
    })
    return res.map(this.toEntity)
  }

  async detail(filter: ProjectKeyFilter): Promise<ProjectAccessKeyDto | undefined> {
    const res = await this.prismaCli.projectAccessKey.findFirst({
      where: this.toFilter(filter),
    })
    if (!res) {
      return undefined
    }

    return this.toEntity(res)
  }

  async delete(filter: ProjectKeyFilter): Promise<boolean> {
    const res = await this.prismaCli.projectAccessKey.deleteMany({
      where: this.toFilter(filter),
    })
    return res.count > 0
  }

  private toFilter(filter: ProjectKeyFilter): Prisma.ProjectAccessKeyWhereInput {
    const retval: Prisma.ProjectAccessKeyWhereInput = {
      projectId: filter.projectId,
      userId: filter.userId,
      apiKey: filter.apiKey,
    }
    if (filter.id || (filter.ids && filter.ids.length > 0)) {
      const ids = []
      if (filter.id) {
        ids.push(filter.id)
      }
      if (filter.ids) {
        ids.push(...filter.ids)
      }

      retval['id'] = ids.length === 1 ? ids[0] : { in: ids }
    }

    return retval
  }

  private toEntity(res: {
    id: number
    projectId: string
    description: string
    userId: string
    apiKey: string
    secretKey: string
    createdAt: Date
  }): ProjectAccessKeyDto {
    return {
      id: res.id,
      projectId: res.projectId,
      description: res.description,
      userId: res.userId,
      apiKey: res.apiKey,
      secretKey: res.secretKey,
    }
  }
}
