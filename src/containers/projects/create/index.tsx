'use client'

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  SidebarProvider,
} from '@/components'
import { useCreateProjectsMutation, useGetProjectsQuery } from '@/hooks'
import { NavUser } from '@/layouts'
import { zodResolver } from '@hookform/resolvers/zod'
import { isEmpty } from 'lodash'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'This field is required',
  }),
})

export const Create = () => {
  const router = useRouter()
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
          router.push(`/projects/${rs.id}`)
        },
      }
    )
  }
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full items-center justify-center p-4 md:p-0">
        <div className="grid w-full gap-8 md:max-w-xs">
          <NavUser />
          <div className="h-[1px] w-full bg-divide" />
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

            {!isEmpty(projects?.list) && (
              <>
                <div className="flex items-center justify-center gap-4">
                  <Separator className="flex-1" />
                  <p className="text-xs text-muted-foreground">Or</p>
                  <Separator className="flex-1" />
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    router.push('/projects/list')
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
