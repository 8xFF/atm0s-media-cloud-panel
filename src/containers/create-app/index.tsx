'use client'

import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components'
import { useCreateProjectsMutation } from '@/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'This field is required',
  }),
})

export const CreateApp = () => {
  const { mutate } = useCreateProjectsMutation()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    mutate({
      name: values.name,
    })
  }
  return (
    <div className="flex h-screen items-center justify-center p-4 md:p-0">
      <div className="grid max-w-sm gap-8">
        <div className="flex justify-center">
          <img src="/logo.svg" alt="" className="w-24 rounded border" />
        </div>
        <div className="h-[1px] w-full bg-divide" />
        <div className="grid gap-4">
          <p className="text-balance text-center text-2xl capitalize">Create your first app</p>
          <p className="text-center text-sm text-muted-foreground">
            You will be brought to your project dashboard after creating your application.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>App name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your app name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
