'use client'

import { Button } from '@/components'
import { Layout } from '@/layouts'

export const Analytics = () => {
  return (
    <Layout
      breadcrumbs={[
        {
          title: 'Analytics',
          href: '/',
        },
        {
          title: 'List',
        },
      ]}
      title="Analytics"
    >
      <Button>Click me</Button>
    </Layout>
  )
}
