import { Prisma } from '@prisma/client'
import { ProjectSipNumberDto, ProjectSipNumberUpdateDto } from '@/schema'
import { getPrisma } from '@/utils/prisma'

export type ProjectNumberField = {
  project?: boolean
}

export type ProjectNumberFilter = {
  id?: number
  ids?: number[]
  projectId?: string
}

export class ProjectNumberRepository {
  private static instance: ProjectNumberRepository | undefined
  public static get Instance(): ProjectNumberRepository {
    if (!this.instance) {
      this.instance = new ProjectNumberRepository()
    }
    return this.instance
  }
  private prismaCli

  private constructor() {
    this.prismaCli = getPrisma()
  }

  create = async (dto: Omit<ProjectSipNumberDto, 'id' | 'project'>): Promise<ProjectSipNumberDto> => {
    const res = await this.prismaCli.projectSipNumber.create({
      data: {
        number: dto.number,
        outgoing: dto.outgoing as any,
        incoming: dto.incoming as any,
        project: {
          connect: {
            id: dto.projectId,
          },
        },
      },
    })

    return this.toEntity(res)
  }

  async update(id: number, dto: ProjectSipNumberUpdateDto): Promise<ProjectSipNumberDto | undefined> {
    const res = await this.prismaCli.projectSipNumber.update({
      where: { id },
      data: {
        number: dto.number,
        outgoing: dto.outgoing as any,
        incoming: dto.incoming as any,
      },
    })

    return this.toEntity(res)
  }

  async detail(filter: ProjectNumberFilter): Promise<ProjectSipNumberDto | undefined> {
    const res = await this.prismaCli.projectSipNumber.findFirst({ where: this.toQuery(filter) })
    if (!res) {
      return undefined
    }

    return this.toEntity(res)
  }

  async list(filter: ProjectNumberFilter, field?: ProjectNumberField): Promise<ProjectSipNumberDto[]> {
    const res = await this.prismaCli.projectSipNumber.findMany({ where: this.toQuery(filter), include: this.include(field) })

    return res.map((r) => this.toEntity(r, field))
  }

  async delete(filter: ProjectNumberFilter): Promise<boolean> {
    const res = await this.prismaCli.projectSipNumber.deleteMany({ where: this.toQuery(filter) })

    return res.count > 0
  }

  private toQuery(filter: ProjectNumberFilter): Prisma.ProjectSipNumberWhereInput {
    const retval: Prisma.ProjectSipNumberWhereInput = {}
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
    if (filter.projectId) {
      retval['projectId'] = filter.projectId
    }
    console.log(retval)
    return retval
  }

  private include(field?: ProjectNumberField): Prisma.ProjectSipNumberInclude {
    return {
      project: field?.project,
    }
  }

  private toEntity = (res: any, field?: ProjectNumberField): ProjectSipNumberDto => {
    const project = field?.project ? res.project : undefined

    return {
      id: res.id,
      projectId: res.projectId,
      number: res.number,
      outgoing: res.outgoing,
      incoming: res.incoming,
      project,
    }
  }
}
