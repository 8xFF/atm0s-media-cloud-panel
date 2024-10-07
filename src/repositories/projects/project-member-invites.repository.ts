import { $Enums, Prisma } from '@prisma/client'
import { ProjectMemberInviteDto } from '@/schema'
import { getPrisma } from '@/utils/prisma'

type ProjectMemberInviteCreate = {
  projectId: string
  email: string
  role: $Enums.ProjectMemberRole
  expireAt: number
}

type ProjectMemberInviteFilter = {
  id?: string
  email?: string
  projectId?: string
  expires_lt?: number
}

export class ProjectMemberInviteRepository {
  private static instance: ProjectMemberInviteRepository | undefined
  public static get Instance(): ProjectMemberInviteRepository {
    if (!this.instance) {
      this.instance = new ProjectMemberInviteRepository()
    }
    return this.instance
  }
  private prismaCli

  private constructor() {
    this.prismaCli = getPrisma()
  }

  async createInvite(dto: ProjectMemberInviteCreate): Promise<ProjectMemberInviteDto> {
    const res = await this.prismaCli.projectMemberInvites.create({
      data: {
        ...dto,
      },
    })

    return this.toEntity(res)
  }

  async listInvite(filter: ProjectMemberInviteFilter): Promise<ProjectMemberInviteDto[]> {
    const res = await this.prismaCli.projectMemberInvites.findMany({
      where: this.toQuery(filter),
    })
    return res.map(this.toEntity)
  }

  async getInvite(filter: ProjectMemberInviteFilter): Promise<ProjectMemberInviteDto | undefined> {
    const res = await this.prismaCli.projectMemberInvites.findFirst({
      where: this.toQuery(filter),
    })

    if (!res) {
      return undefined
    }

    return this.toEntity(res)
  }

  async delete(filter: ProjectMemberInviteFilter): Promise<boolean> {
    const res = await this.prismaCli.projectMemberInvites.deleteMany({
      where: this.toQuery(filter),
    })

    return res.count > 1
  }

  private toQuery(filter: ProjectMemberInviteFilter): Prisma.ProjectMemberInvitesWhereInput {
    const query: Prisma.ProjectMemberInvitesWhereInput = {}
    if (filter.projectId) {
      query.projectId = filter.projectId
    }
    if (filter.id) {
      query.id = filter.id
    }
    if (filter.email) {
      query.email = filter.email
    }
    return query
  }

  private toEntity(res: {
    id: string
    projectId: string
    email: string
    role: string
    expireAt: bigint
  }): ProjectMemberInviteDto {
    return {
      id: res.id,
      projectId: res.projectId,
      email: res.email,
      role: res.role,
      expires: Number(res.expireAt),
    }
  }
}
