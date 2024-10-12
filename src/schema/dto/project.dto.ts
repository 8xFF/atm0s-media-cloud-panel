import { ProjectSipIncomingDto, ProjectSipOutgoingDto } from './project-number.dto'
import { Type } from 'class-transformer'
import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'

export class ProjectCreateDto {
  @IsString()
  @IsNotEmpty()
  name!: string
}

export class ProjectOptions {
  @IsBoolean()
  @Type(() => Boolean)
  createAutomatically?: boolean

  @IsBoolean()
  @Type(() => Boolean)
  adminMute?: boolean

  @IsBoolean()
  @Type(() => Boolean)
  record?: boolean
}

export class Codecs {
  @IsBoolean()
  @Type(() => Boolean)
  h264?: boolean

  @IsBoolean()
  @Type(() => Boolean)
  vp8?: boolean

  @IsBoolean()
  @Type(() => Boolean)
  vp9?: boolean

  @IsBoolean()
  @Type(() => Boolean)
  opus?: boolean
}

export class ProjectUpdateDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string

  @ValidateNested()
  @Type(() => ProjectOptions)
  @IsOptional()
  options?: ProjectOptions

  @ValidateNested()
  @Type(() => Codecs)
  @IsOptional()
  codecs?: Codecs
}

export class ProjectInfo {
  @IsString()
  @IsNotEmpty()
  id!: string

  @IsString()
  @IsNotEmpty()
  name!: string

  @IsString()
  @IsNotEmpty()
  owner!: string

  @IsString()
  secret!: string

  @ValidateNested()
  @Type(() => ProjectOptions)
  options!: ProjectOptions

  @ValidateNested()
  @Type(() => Codecs)
  codecs!: Codecs
}

export class ProjectList {
  @ValidateNested({ each: true })
  @Type(() => ProjectInfo)
  list!: ProjectInfo[]
}

export type ProjectDataSync = {
  apps: {
    [key: string]: { secret: string }
  }
}

export type ProjectNumberSyncData = {
  number: string
  app_id: string
  app_secret: string
  outgoing: ProjectSipOutgoingDto
  incoming: ProjectSipIncomingDto
}

export type ProjectNumberSync = {
  numbers: ProjectNumberSyncData[]
}
