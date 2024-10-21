'use client'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components'
import { useUpdateProjectsMutation } from '@/hooks'
import { Layout } from '@/layouts'
import { selectedProjectState } from '@/recoils'
import { zodResolver } from '@hookform/resolvers/zod'
import { CopyIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'This field is required',
  }),
  projectUrl: z.string(),
  sipUri: z.string(),
  options: z.array(z.string()),
})

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const

export const Settings = () => {
  const selectedProject = useRecoilValue(selectedProjectState)
  const { mutate: onUpdateProjects } = useUpdateProjectsMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedProject?.name,
      options: [],
    },
  })

  useEffect(() => {
    form.setValue('name', selectedProject?.name)
  }, [form, selectedProject?.name])

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onUpdateProjects({
      id: selectedProject?.id,
      data: {
        name: values.name,
      },
    })
  }
  return (
    <Layout>
      <div className="grid gap-4">
        <div>
          <p className="mb-1 text-xl font-semibold">General</p>
          <p className="text-sm text-muted-foreground">Update your app name and other settings here.</p>
        </div>
        <div className="grid grid-cols-2">
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
              <FormField
                control={form.control}
                name="projectUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project URL</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input disabled {...field} />
                        <Button type="button" variant="outline" size="icon">
                          <CopyIcon />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sipUri"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sip URI</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input disabled {...field} />
                        <Button type="button" variant="outline" size="icon">
                          <CopyIcon />
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="options"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Options</FormLabel>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="options"
                        render={({ field }) => {
                          return (
                            <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(field.value?.filter((value) => value !== item.id))
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{item.label}</FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <Button type="submit">Save</Button>
            </form>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
