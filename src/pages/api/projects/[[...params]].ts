import { Body, createHandler, Delete, Get, NotFoundException, Param, Post, Put, ValidationPipe } from 'next-api-decorators'
import { ProjectRepository } from '@/repositories'
import { ProjectCreateDto, ProjectInfo, ProjectUpdateDto, StatusResponseDto } from '@/schema'
import { NextAuthGuard, SessionUserId } from '@/utils/api'

// @UseMiddleware(NextAuthGuard)
export class ProjectRouters {
  @Post('')
  @NextAuthGuard()
  async createProject(@Body(ValidationPipe) body: ProjectCreateDto, @SessionUserId() userId: string): Promise<ProjectInfo> {
    console.log('body', body)
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
    const projectUrl = 'local.media.8xff.com'
    const sipUri = 'sip:local.sip.8xff.com'

    const project = ProjectRepository.Instance.create({
      name: body.name,
      owner: userId,
      options: defaultOptions,
      codec: defaultCodecs,
      projectUrl,
      sipUri,
    })
    return project
  }

  @Get('/:projectId')
  @NextAuthGuard()
  async projectDetail(@Param('projectId') projectId: string, @SessionUserId() userId: string): Promise<ProjectInfo> {
    //TODO: use for member to get project detail
    const project = await ProjectRepository.Instance.detail({
      id: projectId,
      owner: userId,
    })
    if (!project) {
      throw new NotFoundException('Project not found')
    }
    return project
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
