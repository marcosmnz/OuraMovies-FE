import { Link } from "react-router-dom";


export interface SignUpFormViewProps {
  email: string | undefined;
  password: string | undefined;
  name: string | undefined;
  onEmailChange: (email: string) => void;
  onNameChange: (name: string) => void;
  onPasswordChange: (password: string) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

 const SignupView: React.FC<SignUpFormViewProps> = ({
  email,
  name,
  password,
  onEmailChange,
  onNameChange,
  onPasswordChange,
  onFormSubmit,
}) => {
 
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-full min-h-full flex justify-center">
        <div className="container bg-white rounded-3xl shadow-2xl flex min-h-full max-w-sm flex-1 flex-col justify-center mt-12 px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto max-h-28 w-auto rounded-full"
              src="https://placehold.co/200"
              alt="PRODIIT"
            />
            <h2 className="mt-10 text-center text-text text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create Account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onFormSubmit}>
              <div>
                <div className="mt-2">
                  <input
                    onChange={(e) => onNameChange(e.target.value)}
                    value={name}
                    placeholder="Name"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="Name"
                    required
                    className="block w-full h-16 rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <input
                    onChange={(e) => onEmailChange(e.target.value)}
                    value={email}
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full h-16 rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div>
                  <input
                    value={password}
                    onChange={(e) => onPasswordChange(e.target.value)}
                    placeholder="Password"
                    id="password1"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-16 block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between"></div>
                <div>
                  <input
                    placeholder="Password confirmation"
                    id="password2"
                    name="passwordConfirmation"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-16 block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className='mt-6'>
                <span id='errorPasswords' className='text-warnings hidden'>Passwords are not the same</span>
              </div>
              </div>
              <div className="flex columns-2 justify-center">
                <div>
                  <input
                    type="checkbox" id='checkbox'
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-text focus:ring-text"
                  />
                </div>
                <div>
                  <span>
                    I agree to{' '}
                    <Link
                      to="#"
                      className="text-text underline underline-offset-2 hover:text-primary"
                    >
                      terms and conditions
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <span id='errorTerms' className='text-warnings hidden'>Please agree to the terms and conditions</span>
              </div>
              <div>
                <button
                  type="submit"
                  className="h-16 flex w-full justify-center rounded-md bg-text py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Account
                </button>
              </div>
            </form>
            <div className="container columns-2 mt-2">
              <div>
                <Link to="/login" className="mt-10 text-center text-xs text-gray-500">
                  Already have an account?
                </Link>
              </div>
              <div>
                <a
                  href="#"
                  className="font-semibold leading-6 text-xs text-text hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupView