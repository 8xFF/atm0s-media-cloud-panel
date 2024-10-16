import { Prisma } from '@prisma/client'
import { Codecs, ProjectInfo, ProjectOptions } from '@/schema'
import { getPrisma } from '@/utils/prisma'

export type ProjectCreateDto = {
  name: string
  owner: string
  options: ProjectOptions
  codec: Codecs
  secret: string
}

export type ProjectFilter = {
  id?: string
  userId?: string
}

export type ProjectField = {
  secret: boolean
}

export class ProjectRepository {
  private static instance: ProjectRepository | undefined
  public static get Instance(): ProjectRepository {
    if (!this.instance) {
      this.instance = new ProjectRepository()
    }
    return this.instance
  }
  private prismaCli

  private constructor() {
    this.prismaCli = getPrisma()
  }

  async create(project: ProjectCreateDto, field?: ProjectField) {
    const res = await this.prismaCli.projects.create({
      data: {
        name: project.name,
        owner: project.owner,
        options: project.options as any,
        codecs: project.codec as any,
        secret: project.secret,
        ProjectMembers: {
          create: {
            userId: project.owner,
            role: 'owner',
          },
        },
      },
    })

    return this.toEntity(res, field)
  }

  async detail(filter: ProjectFilter, field?: ProjectField): Promise<ProjectInfo | undefined> {
    const res = await this.prismaCli.projects.findFirst({ where: this.toQuery(filter) })
    if (!res) {
      return undefined
    }

    return this.toEntity(res, field)
  }

  async list(filter: ProjectFilter, field?: ProjectField): Promise<ProjectInfo[]> {
    const res = await this.prismaCli.projects.findMany({
      where: this.toQuery(filter),
    })
    return res.map((e) => this.toEntity(e, field))
  }

  async updateById(id: string, modify: Partial<ProjectCreateDto>): Promise<ProjectInfo | undefined> {
    const oldProject = await this.detail({ id })
    if (!oldProject) {
      return undefined
    }

    const res = await this.prismaCli.projects.update({
      where: { id },
      data: {
        name: modify.name,
        options: modify.options as any,
        codecs: modify.codec as any,
      },
    })

    return this.toEntity(res)
  }

  async deleteById(id: string) {
    const res = await this.prismaCli.projects.delete({
      where: { id },
    })
    return !!res
  }

  private toQuery(filter: ProjectFilter): Prisma.ProjectsWhereInput {
    return {
      id: filter.id,
      ProjectMembers: {
        some: {
          userId: filter.userId,
        },
      },
    }
  }

  private toEntity(
    data: {
      id: string
      owner: string
      name: string
      secret: string
      options: Prisma.JsonValue
      codecs: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    },
    field?: ProjectField
  ): ProjectInfo {
    const res = {
      id: data.id,
      owner: data.owner,
      name: data.name,
      options: data.options as any,
      codecs: data.codecs as any,
      secret: '',
    }

    if (field && field.secret) {
      res.secret = data.secret
    }

    return res
  }
}
