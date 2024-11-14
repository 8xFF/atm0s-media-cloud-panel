import { Layout } from '@/layouts'
import { SectionsData } from './sections'

export const ProjectsRooms = () => {
  return (
    <Layout>
      <div className="grid gap-4">
        <div className="grid gap-4">
          <div>
            <p className="mb-1 text-xl font-semibold">Rooms</p>
          </div>
          <SectionsData />
        </div>
      </div>
    </Layout>
  )
}
