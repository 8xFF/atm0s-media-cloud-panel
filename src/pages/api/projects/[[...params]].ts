import { Body, createHandler, Delete, Get, NotFoundException, Param, Post, Put, ValidationPipe } from 'next-api-decorators'
import { JsonValue } from '@prisma/client/runtime/library'
import { ProjectCreateDto, ProjectInfo, ProjectUpdateDto } from '@/schema'
import { NextAuthGuard, SessionUserId } from '@/utils/api'
import { getPrisma } from '@/utils/prisma'

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

    const prisma = getPrisma()
    const project = (await prisma.projects.create({
      data: {
        name: body.name,
        owner: userId,
        projectUrl,
        sipUri,
        options: defaultOptions,
        codecs: defaultCodecs,
      },
    })) as any
    return project
  }

  @Get('/:projectId')
  @NextAuthGuard()
  async projectDetail(@Param('projectId') projectId: string, @SessionUserId() userId: string): Promise<ProjectInfo> {
    const prisma = getPrisma()
    const project = (await prisma.projects.findFirst({
      where: {
        id: projectId,
        owner: userId,
      },
    })) as any
    if (!project) {
      throw new NotFoundException('Project not found')
    }
    return project
  }

  @Put('/:projectId')
  @NextAuthGuard()
  async updateProject(
    @Param('projectId') projectId: string,
    @SessionUserId() userId: string,
    @Body(ValidationPipe) body: ProjectUpdateDto
  ): Promise<ProjectInfo> {
    const prisma = getPrisma()
    const project = (await prisma.projects.findFirst({
      where: {
        id: projectId,
        owner: userId,
      },
    })) as any
    if (!project) {
      throw new NotFoundException('Project not found')
    }

    const updateData = {
      name: body.name,
      options: body.options,
      codecs: body.codecs,
    }

    const updatedProject = (await prisma.projects.update({
      where: {
        id: projectId,
      },
      data: {
        name: updateData.name,
        options: (updateData.options as JsonValue) || undefined,
        codecs: (updateData.codecs as JsonValue) || undefined,
      },
    })) as any
    return updatedProject
  }

  @Delete('/:projectId')
  @NextAuthGuard()
  async deleteProject(@Param('projectId') projectId: string) {
    const prisma = getPrisma()
    const res = await prisma.projects.delete({
      where: {
        id: projectId,
      },
    })

    return {
      status: res ? true : false,
    }
  }
}

export default createHandler(ProjectRouters)
