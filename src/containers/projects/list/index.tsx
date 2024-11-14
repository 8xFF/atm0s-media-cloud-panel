import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetProjectsQuery } from '@/hooks'
import { NavUser } from '@/layouts'
import { isEmpty, map, sortBy } from 'lodash'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProjectsList = () => {
  const navigate = useNavigate()
  const { data: projects, isFetching: isFetchingProjects } = useGetProjectsQuery()
  const [selectedProject, setSelectedProject] = useState<string>()

  useEffect(() => {
    if (isEmpty(projects?.items)) {
      navigate('/projects/create')
      return
    }
    setSelectedProject(projects?.items?.[0]?.id)
  }, [navigate, projects?.items])

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full items-center justify-center p-4 md:p-0">
        <div className="grid w-full gap-8 md:max-w-xs">
          <NavUser />
          <div className="bg-divide h-[1px] w-full" />
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <p className="text-center text-xl font-medium capitalize">Select a project</p>
              <p className="text-center text-xs text-muted-foreground">Choose a project to view its details</p>
            </div>
            {!isFetchingProjects ? (
              <div className="grid gap-2">
                <RadioGroup value={selectedProject} onValueChange={(value) => setSelectedProject(value)}>
                  {map(sortBy(projects?.items, 'name'), (p) => (
                    <div
                      key={p.id}
                      className="flex h-10 items-center space-x-2 rounded-lg border border-muted-foreground px-4"
                    >
                      <RadioGroupItem value={p.id} id={p.id} />
                      <Label className="flex h-full flex-1 cursor-pointer items-center" htmlFor={p.id}>
                        {p.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ) : (
              <div className="grid gap-2">
                <Skeleton className="h-10 w-full rounded-lg" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
            )}

            <Button
              className="w-full"
              onClick={() => {
                navigate(`/projects/${selectedProject}`)
              }}
            >
              Continue
            </Button>
            <div className="flex items-center justify-center gap-4">
              <Separator className="flex-1" />
              <p className="text-xs text-muted-foreground">Or</p>
              <Separator className="flex-1" />
            </div>
            <Button
              className="w-full"
              onClick={() => {
                navigate('/projects/create')
              }}
              variant="outline"
            >
              Create a new project
            </Button>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
