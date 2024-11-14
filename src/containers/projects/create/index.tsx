import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useCreateProjectsMutation, useGetProjectsQuery } from '@/hooks'
import { NavUser } from '@/layouts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-separator'
import { isEmpty } from 'lodash'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'This field is required',
  }),
})

export const ProjectsCreate = () => {
  const navigate = useNavigate()
  const { data: projects } = useGetProjectsQuery()
  const { mutate: onCreateProjects, isPending: isPendingCreateProjects } = useCreateProjectsMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onCreateProjects(
      {
        data: {
          name: values.name,
        },
      },
      {
        onSuccess: (rs) => {
          navigate(`/projects/${rs.id}`)
        },
      }
    )
  }
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full items-center justify-center p-4 md:p-0">
        <div className="grid w-full gap-8 md:max-w-xs">
          <NavUser />
          <div className="bg-divide h-[1px] w-full" />
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <p className="text-center text-xl font-medium capitalize">Create new project</p>
              <p className="text-center text-xs text-muted-foreground">
                You will be brought to your project dashboard after creating your application.
              </p>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your project name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button loading={isPendingCreateProjects} type="submit" className="w-full">
                  Continue
                </Button>
              </form>
            </Form>

            {!isEmpty(projects?.items) && (
              <>
                <div className="flex items-center justify-center gap-4">
                  <Separator className="flex-1" />
                  <p className="text-xs text-muted-foreground">Or</p>
                  <Separator className="flex-1" />
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    navigate('/projects')
                  }}
                  variant="outline"
                >
                  You are already have a project?
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}
