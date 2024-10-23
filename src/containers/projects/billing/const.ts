export interface TypePlan {
  title: string
  description: string
  price: number | 'custom' | 'free'
  listExtension: string[]
}
export const listPlan: TypePlan[] = [
  {
    title: 'Build',
    description: 'Everything you need to start a realtime project',
    price: 'free',
    listExtension: [
      '100 concurrent participants',
      '5K connection minutes',
      '50GB bandwidth',
      'Aggregate analytics and insights',
      'Community support',
    ],
  },
  {
    title: 'Ship',
    description: 'For production applications and getting real users',
    price: 50,
    listExtension: [
      '1K concurrent participants',
      '150K connection minutes (then $0.50 per 1K minutes)',
      '250GB bandwidth (then $0.12 per GB)',
      'Email support',
    ],
  },
  {
    title: 'Scale',
    description: 'For applications with user traction and gearing up for growth',
    price: 500,
    listExtension: [
      'Unlimited concurrent participants',
      '1.5M connection minutes (then $0.30 per 1K minutes)',
      '3TB bandwidth (then $0.10 per GB)',
      'Region pinning',
      'HIPAA',
      'Email support',
    ],
  },
  {
    title: 'Enterprise',
    description: 'For applications running large scale traffic',
    price: 'custom',
    listExtension: ['Volume pricing for all resources', 'Dedicated Slack channel', 'Support SLA', 'On-premise support'],
  },
]
