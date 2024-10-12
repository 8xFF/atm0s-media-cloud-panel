import generateApiKey from 'generate-api-key'
import { Body, createHandler, Delete, Get, NotFoundException, Param, Post, Put, ValidationPipe } from 'next-api-decorators'
import { ProjectRepository } from '@/repositories'
import { ProjectCreateDto, ProjectDataSync, ProjectInfo, ProjectList, ProjectUpdateDto, StatusResponseDto } from '@/schema'
import { ApiKeyGuard, NextAuthGuard, SessionUserId } from '@/utils/api'

class ProjectRouters {
  @Post('')
  @NextAuthGuard()
  async createProject(@Body(ValidationPipe) body: ProjectCreateDto, @SessionUserId() userId: string): Promise<ProjectInfo> {
    console.log(userId)
    const defaultOptions = {
      createAutomatically: true,
      adminMute: false,
      record: true,
    }
    const defaultCodecs = {
      h264: true,
      vp8: true,
      vp9: true,
      opus: true,
    }

    //TODO: integrate with media server to get token or url
    const secret = generateApiKey() as string

    const project = await ProjectRepository.Instance.create({
      name: body.name,
      owner: userId,
      options: defaultOptions,
      codec: defaultCodecs,
      secret,
    })

    return project
  }

  @Get('/sync')
  @ApiKeyGuard()
  async syncProject(): Promise<ProjectDataSync> {
    const projects = await ProjectRepository.Instance.list({}, { secret: true })

    const retval: {
      [key: string]: { secret: string }
    } = {}

    projects.forEach((p) => {
      retval[p.id] = {
        secret: p.secret,
      }
    })

    return {
      apps: retval,
    }
  }

  @Get('/:projectId')
  @NextAuthGuard()
  async projectDetail(@Param('projectId') projectId: string, @SessionUserId() userId: string): Promise<ProjectInfo> {
    //TODO: use for member to get project detail
    const project = await ProjectRepository.Instance.detail({
      id: projectId,
      userId,
    })
    if (!project) {
      throw new NotFoundException('Project not found')
    }

    return project
  }

  @Get('')
  @NextAuthGuard()
  async listProject(@SessionUserId() userId: string): Promise<ProjectList> {
    const projects = await ProjectRepository.Instance.list({ userId })
    return {
      list: projects,
    }
  }

  @Put('/:projectId')
  @NextAuthGuard()
  async updateProject(
    @Param('projectId') projectId: string,
    @Body(ValidationPipe) body: ProjectUpdateDto
  ): Promise<ProjectInfo> {
    const res = await ProjectRepository.Instance.updateById(projectId, body)
    if (!res) {
      throw new NotFoundException('Project not found')
    }
    return res
  }

  @Delete('/:projectId')
  @NextAuthGuard()
  async deleteProject(@Param('projectId') projectId: string): Promise<StatusResponseDto> {
    const res = await ProjectRepository.Instance.deleteById(projectId)

    return {
      status: res,
    }
  }
}

export default createHandler(ProjectRouters)
