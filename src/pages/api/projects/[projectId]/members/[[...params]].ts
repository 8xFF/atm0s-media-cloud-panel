import { createHandler, Get } from 'next-api-decorators'
import { ProjectMemberRepository } from '@/repositories'
import { ProjectMemberListDto } from '@/schema'
import { NextAuthGuard, ProjectId } from '@/utils/api'

class ProjectMemberRouters {
  @Get('')
  @NextAuthGuard()
  async list(@ProjectId() projectId: string): Promise<ProjectMemberListDto> {
    const res = await ProjectMemberRepository.Instance.list({ projectId })
    return { list: res }
  }
}

export default createHandler(ProjectMemberRouters)
