import { Type } from 'class-transformer'
import { IsBoolean } from 'class-validator'

export class StatusResponseDto {
  @IsBoolean()
  @Type(() => Boolean)
  status!: boolean
}
