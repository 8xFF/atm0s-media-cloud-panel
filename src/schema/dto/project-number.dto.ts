import { ProjectInfo } from './project.dto'
import { Type } from 'class-transformer'
import { IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'

export class ProjectSipOutgoingDto {
  @IsString()
  dest!: string

  @IsString()
  user!: string

  @IsString()
  pass!: string
}

export class ProjectSipIncomingDto {
  @IsString()
  @IsOptional()
  allowIp?: string
}

export class ProjectSipNumberCreateDto {
  @IsString()
  number!: string

  @ValidateNested()
  @Type(() => ProjectSipOutgoingDto)
  outgoing!: ProjectSipOutgoingDto

  @ValidateNested()
  @Type(() => ProjectSipIncomingDto)
  incoming!: ProjectSipIncomingDto
}

export class ProjectSipNumberUpdateDto {
  @IsString()
  @IsOptional()
  number?: string

  @ValidateNested()
  @Type(() => ProjectSipOutgoingDto)
  @IsOptional()
  outgoing?: ProjectSipOutgoingDto

  @ValidateNested()
  @Type(() => ProjectSipIncomingDto)
  @IsOptional()
  incoming?: ProjectSipIncomingDto
}

export class ProjectSipNumberDto {
  @IsNumber()
  id!: number

  @IsString()
  projectId!: string

  @IsString()
  number!: string

  @ValidateNested()
  @Type(() => ProjectSipOutgoingDto)
  outgoing!: ProjectSipOutgoingDto

  @ValidateNested()
  @Type(() => ProjectSipIncomingDto)
  incoming!: ProjectSipIncomingDto

  @ValidateNested()
  @Type(() => ProjectInfo)
  @IsOptional()
  project?: ProjectInfo
}

export class ProjectSipNumberList {
  @ValidateNested({ each: true })
  @Type(() => ProjectSipNumberDto)
  list!: ProjectSipNumberDto[]
}
