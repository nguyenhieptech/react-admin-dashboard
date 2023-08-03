import { Button, Checkbox, Input, Label } from '@/components';
import { EyeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: Integrate form components with with react-hook-form and zod
// const formSchema = z.object({
//   email: z.string().min(2).max(50),
//   password: z.string().min(2).max(50),
// });
// type SignInForm = z.infer<typeof formSchema>;

export function SignIn() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigate = useNavigate();

  function handleSignIn() {
    navigate('/');
  }

  function handleShowPassword() {
    setIsPasswordShown((prev) => !prev);
  }

  // TODO: Integrate form components with react-hook-form and zod
  // https://ui.shadcn.com/docs/components/form
  // const form = useForm<SignInForm>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // });
  // function onSubmit(values: SignInForm) {
  //   console.log(values);
  //   navigate('/');
  // }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-neutral-900 dark:text-neutral-50">
          Sign in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="mx-4 rounded-md border border-neutral-100 bg-white px-6 py-12 shadow dark:border-none dark:bg-neutral-800 sm:rounded-lg sm:px-12">
          <form className="space-y-6">
            <fieldset>
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
              >
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </fieldset>

            <fieldset>
              <Label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-neutral-900 dark:text-neutral-100"
              >
                Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  name="password"
                  type={isPasswordShown ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                />
                <EyeIcon
                  className="absolute right-2 top-2 h-5 w-5 cursor-pointer text-neutral-900 dark:text-white"
                  onClick={handleShowPassword}
                />
              </div>
            </fieldset>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox />
                <Label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm leading-6 text-neutral-900 dark:text-neutral-100"
                >
                  Remember me
                </Label>
              </div>

              <div className="text-sm leading-6">
                <a className="font-semibold text-primary-400 transition hover:text-primary-300">
                  Forgot password?
                </a>
              </div>
            </div>

            <Button className="w-full" type="submit" onClick={handleSignIn}>
              Sign in
            </Button>
          </form>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-neutral-200 dark:border-neutral-600" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <a className="flex w-full items-center justify-center gap-3 rounded-md bg-sky-500 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0] dark:bg-sky-600">
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="text-sm font-semibold leading-6">Twitter</span>
              </a>

              <a className="flex w-full items-center justify-center gap-3 rounded-md bg-neutral-700 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-neutral-900">
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-semibold leading-6">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-neutral-400">
          Not a member?{' '}
          <a
            href="#"
            className="font-semibold leading-6 text-primary-400 transition hover:text-primary-300"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
