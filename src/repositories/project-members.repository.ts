import { Prisma } from '@prisma/client'
import { ProjectMemberDto } from '@/schema'
import { getPrisma } from '@/utils/prisma'

export type ProjectMemberFilter = {
  projectId?: string
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

  async list(filter: ProjectMemberFilter): Promise<ProjectMemberDto[]> {
    const res = await this.prismaCli.projectMembers.findMany({
      where: this.toQuery(filter),
      include: {
        user: true,
      },
    })
    return res.map(this.toEntity)
  }

  private toQuery(filter: ProjectMemberFilter): Prisma.ProjectMembersWhereInput {
    const query: Prisma.ProjectMembersWhereInput = {}
    if (filter.projectId) {
      query.projectId = filter.projectId
    }
    return query
  }

  private toEntity(res: any): ProjectMemberDto {
    return {
      projectId: res.projectId,
      userId: res.userId,
      role: res.role,
      user: {
        email: res.user.email,
        name: res.user.name,
      },
    }
  }
}
