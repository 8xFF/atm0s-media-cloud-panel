export enum SessionStatus {
  ACTIVE = 'active',
  CLOSE = 'close',
}

export type ProjectSessionDto = {
  id: string
  name: string
  startedAt: number
  status: SessionStatus
}

export type ProjectEgressDto = {
  id: string
  startedAt: number
  duration: number
  status: string
  type: string
  source: string
  destination: string
}

export type ProjectIngressDto = {
  id: string
  startedAt: number
  lastAchivedAt: number
  duration: number
  status: string
  session: string
}

export type ProjectBandwidthMetrics = {
  data: { [key: string]: number }
  unit: 'bps' | 'Kbps' | 'Mbps' | 'Gbps'
}

export type ProjectUserMetrics = {
  data: { [key: string]: number }
  unit: 'user'
}

export type ProjectRoomMetrics = {
  data: { [key: string]: number }
  unit: 'room'
}

export type ProjectEgressMetrics = {
  data: { [key: string]: number }
  unit: 'egress'
}

export type ProjectDashboardDto = {
  bandwidth: {
    upstream: number
    downstream: number
    unit: 'b' | 'Kb' | 'Mb' | 'Gb'
    metrics: ProjectBandwidthMetrics
  }
  users: {
    metrics: ProjectUserMetrics
    topCountries: { country: string; percent: number }[]
  }
  rooms: {
    metrics: ProjectRoomMetrics
    averageDuration: number
    averageSize: number
  }
  egress: {
    metrics: ProjectEgressMetrics
    totalEgress: number
    totalEgressDuration: number
  }
}
