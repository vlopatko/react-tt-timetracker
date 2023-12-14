import { useAppDispatch } from '../lib/hooks'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Input } from '../components/ui/input'
import { logIn } from '../redux/slices/auth'
import { useAppSelector } from '../redux/store'

const formSchema = z.object({
  username: z
    .string()
    .min(5, {
      message: 'Username must be at least 5 characters.',
    })
    .max(20, {
      message: 'Username must be at most 20 characters.',
    })
    .trim(),
  password: z
    .string()
    .min(8, {
      message: 'Password must be at least 8 characters and contain numbers.',
    })
    .max(20, {
      message: 'Password must be at most 20 characters.',
    })
    .regex(/\d/, {
      message: 'Password must contain at least one number.',
    }),
})

export function LoginForm() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { password, username } = values
    const isCorrectUser =
      password === 'testpassword123' && username === 'testuser'

    if (isCorrectUser) {
      dispatch(logIn({ username: username }))

      form.resetField('password')
      form.resetField('username')

      navigate('/')
    } else {
      form.setError('username', {
        type: 'manual',
        message: `Username is incorrect.(Try 'testuser')`,
      })
      form.setError('password', {
        type: 'manual',
        message: `Password is incorrect.(Try 'testpassword123')`,
      })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-32 flex w-96 max-w-lg flex-col space-y-8 sm:max-w-sm md:max-w-md"
      >
        <p className="mx-auto text-lg font-bold">Log in</p>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl aria-label="username">
                  <Input
                    type="text"
                    placeholder="Enter your username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl aria-label="password">
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="mx-auto">
          Log in
        </Button>
      </form>
    </Form>
  )
}
