import { Type } from "class-transformer"
import { IsBoolean, IsNotEmpty, IsString, ValidateNested } from "class-validator"

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

export class ProjectInfo {
    @IsString()
    @IsNotEmpty()
    id!: string

    @IsString()
    @IsNotEmpty()
    name!: string

    @IsString()
    @IsNotEmpty()
    ownerId!: string

    @IsString()
    @IsNotEmpty()
    url!: string

    @ValidateNested()
    @Type(() => ProjectOptions)
    options!: ProjectOptions

    @ValidateNested()
    @Type(() => Codecs)
    codecs!: Codecs
}