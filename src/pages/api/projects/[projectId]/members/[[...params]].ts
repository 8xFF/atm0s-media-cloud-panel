import { BadRequestException, Body, createHandler, Get, NotFoundException, Post, ValidationPipe } from 'next-api-decorators'
import { ProjectMemberInviteRepository, ProjectMemberRepository } from '@/repositories'
import { ProjectMemberCreateInviteDto, ProjectMemberInviteDto, ProjectMemberListDto, StatusResponseDto } from '@/schema'
import { AuthUser, NextAuthGuard, ProjectGuard, ProjectId, SessionUser } from '@/utils/api'
import { DAY } from '@/utils/time'

class ProjectMemberRouters {
  @Get('')
  @NextAuthGuard()
  @ProjectGuard()
  async list(@ProjectId() projectId: string): Promise<ProjectMemberListDto> {
    const res = await ProjectMemberRepository.Instance.list({ projectId })
    return { list: res }
  }

  @Post('/invite')
  @NextAuthGuard()
  @ProjectGuard()
  async invite(
    @ProjectId() projectId: string,
    @Body(ValidationPipe) body: ProjectMemberCreateInviteDto
  ): Promise<ProjectMemberInviteDto> {
    const member = await ProjectMemberRepository.Instance.detail({ projectId, email: body.email })
    if (member) {
      throw new BadRequestException('User already in project')
    }

    const expireAt = Date.now() + 2 * DAY
    const oldInvite = await ProjectMemberInviteRepository.Instance.getInvite({ projectId, email: body.email })
    if (oldInvite) {
      const deleted = await ProjectMemberInviteRepository.Instance.delete({ id: oldInvite.id })
      if (!deleted) {
        throw new BadRequestException('Cannot delete old invite')
      }
    }
    const res = await ProjectMemberInviteRepository.Instance.createInvite({
      projectId,
      email: body.email,
      role: body.role,
      expireAt: expireAt,
    })

    //TODO: build invite url and send email
    return res
  }

  @Post('/invite/:inviteId/accept')
  @NextAuthGuard()
  @ProjectGuard()
  async acceptInvite(@ProjectId() projectId: string, @SessionUser() user: AuthUser): Promise<StatusResponseDto> {
    const invite = await ProjectMemberInviteRepository.Instance.getInvite({ projectId, email: user.email })
    if (!invite) {
      throw new NotFoundException('Project not found')
    }

    if (invite.expires < Date.now()) {
      throw new BadRequestException('Invite expired')
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _member = await ProjectMemberRepository.Instance.create({
      projectId,
      userId: user.id,
      role: invite.role,
    })

    const deleted = await ProjectMemberInviteRepository.Instance.delete({ id: invite.id })
    return {
      status: deleted,
    }
  }

  @Post('/invite/:inviteId/reject')
  @NextAuthGuard()
  @ProjectGuard()
  async rejectInvite(@ProjectId() projectId: string, @SessionUser() user: AuthUser): Promise<StatusResponseDto> {
    const invite = await ProjectMemberInviteRepository.Instance.getInvite({ projectId, email: user.email })
    if (!invite) {
      throw new NotFoundException('Project not found')
    }

    const deleted = await ProjectMemberInviteRepository.Instance.delete({ id: invite.id })
    return {
      status: deleted,
    }
  }
}

export default createHandler(ProjectMemberRouters)
