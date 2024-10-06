import { JsonValue } from '@prisma/client/runtime/library'
import { Codecs, ProjectInfo, ProjectOptions } from '@/schema'
import { getPrisma } from '@/utils/prisma'

export type ProjectCreateDto = {
  name: string
  owner: string
  options: ProjectOptions
  codec: Codecs
  projectUrl: string
  sipUri: string
}

export type ProjectFilter = {
  id?: string
  owner?: string
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

  async create(project: ProjectCreateDto) {
    const res = await this.prismaCli.projects.create({
      data: {
        name: project.name,
        owner: project.owner,
        options: project.options as any,
        codecs: project.codec as any,
        projectUrl: project.projectUrl,
        sipUri: project.sipUri,
      },
    })

    return this.toEntity(res)
  }

  async detail(filter: ProjectFilter): Promise<ProjectInfo | undefined> {
    const res = await this.prismaCli.projects.findFirst(this.toQuery(filter))
    if (!res) {
      return undefined
    }

    return this.toEntity(res)
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

  private toQuery(filter: ProjectFilter) {
    return {
      where: filter,
    }
  }

  private toEntity(data: {
    id: string
    owner: string
    name: string
    options: JsonValue
    codecs: JsonValue
    projectUrl: string
    sipUri: string
    createdAt: Date
    updatedAt: Date
  }): ProjectInfo {
    return {
      id: data.id,
      owner: data.owner,
      name: data.name,
      options: data.options as any,
      codecs: data.codecs as any,
      projectUrl: data.projectUrl,
      sipUri: data.sipUri,
    }
  }
}
