import {
  Body,
  createHandler,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseNumberPipe,
  Post,
  Put,
  ValidationPipe,
} from 'next-api-decorators'
import { ProjectNumberRepository } from '@/repositories/projects/project-number.repository'
import {
  ListNumbericIdDto,
  ProjectSipNumberCreateDto,
  ProjectSipNumberDto,
  ProjectSipNumberList,
  ProjectSipNumberUpdateDto,
  StatusResponseDto,
} from '@/schema'
import { NextAuthGuard, ProjectGuard, ProjectId } from '@/utils/api'

class ProjectNumberRouters {
  @Post()
  @NextAuthGuard()
  @ProjectGuard()
  async createNumber(
    @ProjectId() projectId: string,
    @Body(ValidationPipe) dto: ProjectSipNumberCreateDto
  ): Promise<ProjectSipNumberDto> {
    const res = await ProjectNumberRepository.Instance.create({
      ...dto,
      projectId,
    })

    return res
  }

  @Get()
  async list(@ProjectId() projectId: string): Promise<ProjectSipNumberList> {
    const list = await ProjectNumberRepository.Instance.list({ projectId })

    return {
      list,
    }
  }

  @Put('/:number_id')
  @NextAuthGuard()
  @ProjectGuard()
  async update(
    @ProjectId() projectId: string,
    @Param('number_id', ParseNumberPipe) numberId: number,
    @Body(ValidationPipe) dto: ProjectSipNumberUpdateDto
  ): Promise<ProjectSipNumberDto> {
    const res = await ProjectNumberRepository.Instance.detail({
      projectId,
      id: numberId,
    })
    if (!res) {
      throw new NotFoundException('Number not found')
    }

    const updated = await ProjectNumberRepository.Instance.update(numberId, dto)
    return updated!
  }

  @Delete()
  @NextAuthGuard()
  @ProjectGuard()
  async delete(@ProjectId() projectId: string, @Body(ValidationPipe) dto: ListNumbericIdDto): Promise<StatusResponseDto> {
    const res = await ProjectNumberRepository.Instance.delete({
      projectId,
      ids: dto.ids,
    })

    return {
      status: res,
    }
  }
}

export default createHandler(ProjectNumberRouters)
