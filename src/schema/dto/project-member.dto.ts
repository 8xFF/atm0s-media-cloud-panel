import { Exclude, Type } from 'class-transformer'
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { $Enums } from '@prisma/client'

export class UserMemberInfo {
  @IsString()
  @IsOptional()
  name?: string

  @IsString()
  email!: string
}

export class ProjectMemberDto {
  @IsNumber()
  id: number

  @IsString()
  projectId!: string

  @IsString()
  userId!: string

  @ValidateNested()
  @Type(() => UserMemberInfo)
  @IsOptional()
  user?: UserMemberInfo

  @IsBoolean()
  @Type(() => Boolean)
  @IsOptional()
  isPendingInvites?: boolean

  @IsString()
  role!: string
}

export class ProjectMemberCreateInviteDto {
  @IsString()
  email!: string

  @IsEnum($Enums.ProjectMemberRole)
  @IsString()
  role!: $Enums.ProjectMemberRole
}

export class ProjectMemberInviteDto {
  @IsString()
  id!: string

  @IsString()
  projectId!: string

  @IsString()
  email!: string

  @IsString()
  role!: string

  @IsNumber()
  @Exclude()
  expires!: number
}

export class ProjectMemberListDto {
  @ValidateNested({ each: true })
  @Type(() => ProjectMemberDto)
  list!: ProjectMemberDto[]
}
