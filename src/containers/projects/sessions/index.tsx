import { Layout } from '@/layouts'
import { SectionsActive, SectionsData } from './sections'

export const ProjectsSessions = () => {
  return (
    <Layout>
      <div className="grid gap-4">
        <div className="grid gap-4">
          <div>
            <p className="mb-1 text-xl font-semibold">Sessions</p>
            <p className="text-sm text-muted-foreground">Real-time data about active sessions</p>
          </div>
          <SectionsActive />
          <SectionsData />
        </div>
      </div>
    </Layout>
  )
}
