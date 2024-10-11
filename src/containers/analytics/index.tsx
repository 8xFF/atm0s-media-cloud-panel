'use client'

import { Layout } from '@/layouts'
import {
  SectionsAverageRoom,
  SectionsBandwidth,
  SectionsConnection,
  SectionsEgress,
  SectionsRooms,
  SectionsSample,
  SectionsTopCountries,
  SectionsTotalEgress,
  SectionsUser,
} from './sections'

export const Analytics = () => {
  return (
    <Layout>
      <div className="grid gap-4">
        <div className="grid gap-4">
          <div>
            <p className="mb-1 text-xl font-semibold">Get Started</p>
            <p className="text-sm text-muted-foreground">Check out our sample apps to see what you can build with 8xFF</p>
          </div>
          <SectionsSample />
        </div>
        <SectionsConnection />
        <SectionsBandwidth />
        <div className="grid grid-cols-2 gap-4">
          <SectionsUser />
          <SectionsTopCountries />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <SectionsRooms />
          </div>
          <SectionsAverageRoom />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <SectionsTotalEgress />
          <div className="col-span-2">
            <SectionsEgress />
          </div>
        </div>
      </div>
    </Layout>
  )
}
