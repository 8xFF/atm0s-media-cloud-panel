import { map } from 'lodash'
import { ArrowUpRightIcon } from 'lucide-react'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components'

type Props = {}

const SAMPLE = [
  {
    title: 'AI Voice Assistant',
    description: 'Customizable voice assistant using STT, LLM, and TTS',
  },
  {
    title: 'Spatial Audio',
    description:
      'A tiny 2D world you can join, explore and hear other users&apos; audio in stereo, based on their relative position and distance.',
  },
  {
    title: 'Video Conferencing',
    description: 'LiveKit Meet is a Zoom-style video conferencing app built with LiveKit Components.',
  },
  {
    title: 'Gaming With Unity WebGL',
    description: 'Play battle tanks with your friends and talk smack using voice and video.',
  },
  {
    title: 'Livestream',
    description:
      'A Twitch-inspired livestreaming site where broadcasters can stream via RTMP, WHIP, or their camera. Other users can view their stream and chat.',
  },
]

export const SectionsSample: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {map(SAMPLE, (item) => (
        <Card key={item.title} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription className="max-w-lg text-balance leading-relaxed">{item.description}</CardDescription>
          </CardHeader>
          <CardFooter className="gap-4">
            <Button size="sm" className="gap-2">
              <ArrowUpRightIcon size={16} />
              Try demo
            </Button>
            <Button size="sm" variant="secondary" className="gap-2">
              <GitHubLogoIcon className="h-4 w-4" />
              View source
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
