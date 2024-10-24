import { ListData } from '@/schema'
import {
  ProjectDashboardDto,
  ProjectEgressDto,
  ProjectIngressDto,
  ProjectSessionDto,
  SessionStatus,
} from '@/schema/dto/project-statistics.dto'
import { NextAuthGuard, ProjectGuard } from '@/utils/api'
import { createHandler, Get, ParseNumberPipe, Query, ValidateEnumPipe } from 'next-api-decorators'

class ProjectStatisticRouters {
  @Get('/egress')
  @NextAuthGuard()
  @ProjectGuard()
  async engress(
    @Query('limit', ParseNumberPipe) limit: number,
    @Query('page', ParseNumberPipe) page: number
  ): Promise<ListData<ProjectEgressDto>> {
    const totalPage = 1000 / limit
    const currentPage = page > totalPage ? totalPage : page
    const list: ProjectEgressDto[] = Array.from({ length: limit }, (_, index) => ({
      id: `${(page - 1) * limit + index + 1}`,
      startedAt: Date.now(),
      duration: 1000,
      status: 'active',
      source: 'source',
      destination: 'destination',
      type: 'sip',
    }))
    return {
      list: list,
      page: totalPage,
      currentPage,
    }
  }

  @Get('/ingress')
  @NextAuthGuard()
  @ProjectGuard()
  async ingress(
    @Query('limit', ParseNumberPipe) limit: number,
    @Query('page', ParseNumberPipe) page: number
  ): Promise<ListData<ProjectIngressDto>> {
    const totalPage = 1000 / limit
    const currentPage = page > totalPage ? totalPage : page
    const list: ProjectIngressDto[] = Array.from({ length: limit }, (_, index) => ({
      id: `${(page - 1) * limit + index + 1}`,
      startedAt: Date.now(),
      lastAchivedAt: Date.now(),
      duration: 1000,
      status: 'active',
      session: 'session',
    }))
    return {
      list,
      page: totalPage,
      currentPage,
    }
  }

  @Get('/session')
  @NextAuthGuard()
  @ProjectGuard()
  async session(
    @Query('limit', ParseNumberPipe) limit: number,
    @Query('page', ParseNumberPipe) page: number,
    @Query(
      'status',
      ValidateEnumPipe({
        nullable: true,
        type: SessionStatus,
      })
    )
    status?: SessionStatus
  ): Promise<ListData<ProjectSessionDto>> {
    const totalPage = 1000 / limit
    const currentPage = page > totalPage ? totalPage : page
    const list: ProjectSessionDto[] = Array.from({ length: limit }, (_, index) => ({
      id: `${(page - 1) * limit + index + 1}`,
      name: `user ${(page - 1) * limit + index + 1}`,
      startedAt: Date.now(),
      status: status || SessionStatus.ACTIVE,
    }))
    return {
      list: list,
      page: totalPage,
      currentPage,
    }
  }

  @Get('/dashboard')
  @NextAuthGuard()
  @ProjectGuard()
  async dashboard(): Promise<ProjectDashboardDto> {
    return {
      bandwidth: {
        downstream: 1000,
        upstream: 1000,
        unit: 'Mb',
        metrics: {
          data: {
            '2021-01-01': 1000,
            '2021-01-02': 1000,
            '2021-01-03': 1000,
            '2021-01-04': 1000,
            '2021-01-05': 1000,
          },
          unit: 'Mbps',
        },
      },
      users: {
        metrics: {
          data: {
            '2021-01-01': 1000,
            '2021-01-02': 1000,
            '2021-01-03': 1000,
            '2021-01-04': 1000,
            '2021-01-05': 1000,
          },
          unit: 'user',
        },
        topCountries: [
          {
            country: 'Vietnam',
            percent: 50,
          },
          {
            country: 'USA',
            percent: 30,
          },
          {
            country: 'China',
            percent: 20,
          },
        ],
      },
      rooms: {
        metrics: {
          data: {
            '2021-01-01': 1000,
            '2021-01-02': 1000,
            '2021-01-03': 1000,
            '2021-01-04': 1000,
            '2021-01-05': 1000,
          },
          unit: 'room',
        },
        averageDuration: 1000,
        averageSize: 1000,
      },
      egress: {
        metrics: {
          data: {
            '2021-01-01': 1000,
            '2021-01-02': 1000,
            '2021-01-03': 1000,
            '2021-01-04': 1000,
            '2021-01-05': 1000,
          },
          unit: 'egress',
        },
        totalEgress: 1000,
        totalEgressDuration: 1000,
      },
    }
  }
}

export default createHandler(ProjectStatisticRouters)
