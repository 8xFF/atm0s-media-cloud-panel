import { Prisma } from '@prisma/client'
import { ProjectMemberDto } from '@/schema'
import { getPrisma } from '@/utils/prisma'

export type ProjectMemberFilter = {
  projectId?: string
  email?: string
}

export class ProjectMemberRepository {
  private static instance: ProjectMemberRepository | undefined
  public static get Instance(): ProjectMemberRepository {
    if (!this.instance) {
      this.instance = new ProjectMemberRepository()
    }
    return this.instance
  }
  private prismaCli

  private constructor() {
    this.prismaCli = getPrisma()
  }

  async create(projectMember: Omit<ProjectMemberDto, 'id'>): Promise<ProjectMemberDto> {
    const res = await this.prismaCli.projectMembers.create({
      data: {
        projectId: projectMember.projectId,
        userId: projectMember.userId,
        role: projectMember.role,
      },
    })

    return this.toEntity(res)
  }

  async list(filter: ProjectMemberFilter): Promise<ProjectMemberDto[]> {
    const res = await this.prismaCli.projectMembers.findMany({
      where: this.toQuery(filter),
      include: {
        user: true,
      },
    })
    return res.map(this.toEntity)
  }

  async detail(filter: ProjectMemberFilter): Promise<ProjectMemberDto | undefined> {
    const res = await this.prismaCli.projectMembers.findFirst({
      where: this.toQuery(filter),
      include: {
        user: true,
      },
    })
    if (!res) {
      return undefined
    }

    return this.toEntity(res)
  }

  private toQuery(filter: ProjectMemberFilter): Prisma.ProjectMembersWhereInput {
    const query: Prisma.ProjectMembersWhereInput = {}
    if (filter.projectId) {
      query.projectId = filter.projectId
    }
    if (filter.email) {
      query.user = {
        email: filter.email,
      }
    }
    return query
  }

  private toEntity(model: any): ProjectMemberDto {
    const res: any = {
      id: model.id,
      projectId: model.projectId,
      userId: model.userId,
      role: model.role,
    }

    if (model.user) {
      res.user = {
        email: model.user.email,
        name: model.user.name,
      }
    }

    return res
  }
}
