import { IsNumber, IsOptional, IsString } from 'class-validator'

export class ProjectAccessKeyCreateDto {
  @IsString()
  description!: string
}

export class ProjectAccessKeyDto {
  @IsNumber()
  id: number

  @IsString()
  projectId!: string

  @IsString()
  description!: string

  @IsString()
  userId!: string

  @IsString()
  apiKey!: string

  @IsString()
  @IsOptional()
  secretKey?: string
}
