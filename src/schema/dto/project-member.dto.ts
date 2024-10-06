import { Type } from 'class-transformer'
import { IsOptional, IsString, ValidateNested } from 'class-validator'

export class UserMemberInfo {
  @IsString()
  name!: string

  @IsString()
  email!: string
}

export class ProjectMemberDto {
  @IsString()
  projectId!: string

  @IsString()
  userId!: string

  @ValidateNested()
  @Type(() => UserMemberInfo)
  @IsOptional()
  user?: UserMemberInfo

  @IsString()
  role!: string
}

export class ProjectMemberListDto {
  @ValidateNested({ each: true })
  @Type(() => ProjectMemberDto)
  list!: ProjectMemberDto[]
}
