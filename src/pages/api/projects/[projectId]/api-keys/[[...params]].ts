import { generateApiKey } from 'generate-api-key'
import { Body, createHandler, Delete, Get, NotFoundException, Post, ValidationPipe } from 'next-api-decorators'
import { ProjectAccessKeyRepository } from '@/repositories'
import { ListNumbericIdDto, ProjectAccessKeyCreateDto, ProjectAccessKeyDto, StatusResponseDto } from '@/schema'
import { NextAuthGuard, ProjectGuard, ProjectId, SessionUserId } from '@/utils/api'
import { generateSecretHash, generateSecretKey, validateSecretHash } from '@/utils/hash'

class ProjectAccessKeyRouters {
  @Post()
  @NextAuthGuard()
  @ProjectGuard()
  async createAccessKey(
    @ProjectId() projectId: string,
    @SessionUserId() userId: string,
    @Body(ValidationPipe) body: ProjectAccessKeyCreateDto
  ): Promise<ProjectAccessKeyDto> {
    const apiKey = generateApiKey() as string
    const secretKey = generateSecretKey()
    const secretKeyHash = generateSecretHash(secretKey)

    const accessKey = await ProjectAccessKeyRepository.Instance.create({
      projectId,
      userId,
      apiKey,
      secretKey: secretKeyHash,
      description: body.description,
    })

    accessKey.secretKey = secretKey

    return accessKey
  }

  @Get()
  @NextAuthGuard()
  @ProjectGuard()
  async listAccessKeys(@ProjectId() projectId: string): Promise<ProjectAccessKeyDto[]> {
    const accessKeys = await ProjectAccessKeyRepository.Instance.list({
      projectId,
    })

    return accessKeys.map((a) => ({
      ...a,
      secretKey: undefined,
    }))
  }

  @Delete('')
  @NextAuthGuard()
  @ProjectGuard()
  async deleteAccessKey(
    @ProjectId() projectId: string,
    @Body(ValidationPipe) dto: ListNumbericIdDto,
    @SessionUserId() userId: string
  ): Promise<StatusResponseDto> {
    const entity = await ProjectAccessKeyRepository.Instance.detail({
      projectId,
      userId,
      ids: dto.ids,
    })

    if (!entity) {
      throw new NotFoundException('Access key not found')
    }

    const deleted = await ProjectAccessKeyRepository.Instance.delete({
      ids: dto.ids,
    })

    return {
      status: deleted,
    }
  }

  //TODO: validate access key test api, remove in production
  @Post('/validate')
  async validateAccessKey(@Body() body: { accessKey: string; secretKey: string }): Promise<StatusResponseDto> {
    const entities = await ProjectAccessKeyRepository.Instance.detail({
      apiKey: body.accessKey,
    })

    if (!entities) {
      return { status: false }
    }

    const isMatch = validateSecretHash(entities.secretKey!, body.secretKey)

    return { status: isMatch }
  }
}

export default createHandler(ProjectAccessKeyRouters)
