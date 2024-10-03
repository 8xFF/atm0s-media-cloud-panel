import { ProjectCreateDto, ProjectInfo } from "@/schema";
import { Body, createHandler, Get, Param, Post,ValidationPipe } from "next-api-decorators";

export class ProjectRouters {
    @Post('')
    async createProject(@Body(ValidationPipe) body: ProjectCreateDto): Promise<ProjectInfo> {
        return {
            id: 'id',
            name: body.name,
            ownerId: 'ownerId',
            url: 'url',
            options: {
                createAutomatically: true,
                adminMute: false,
                record: true
            },
            codecs: {
                h264: true,
                vp8: true,
                vp9: true
            }
        }
    }

    @Get('/:projectId')
    async projectDetail(@Param('projectId') projectId: string): Promise<ProjectInfo> {
        return {
            id: projectId,
            name: 'name',
            ownerId: 'ownerId',
            url: 'url',
            options: {
                createAutomatically: true,
                adminMute: false,
                record: true
            },
            codecs: {
                h264: true,
                vp8: true,
                vp9: true
            }
        }
    }
}

export default createHandler(ProjectRouters)