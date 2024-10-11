import { Type } from 'class-transformer'
import { IsBoolean, IsNumber } from 'class-validator'

export class StatusResponseDto {
  @IsBoolean()
  @Type(() => Boolean)
  status!: boolean
}

export class ListNumbericIdDto {
  @IsNumber({}, { each: true })
  @Type(() => Number)
  ids!: number[]
}

export class AuthUser {
  id!: string
  name!: string
  email!: string
  image!: string | null
}
