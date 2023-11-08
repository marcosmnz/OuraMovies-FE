import { Link } from 'react-router-dom'



export interface LoginFormViewProps {
  email: string | undefined;
  password: string | undefined;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const LoginView: React.FC<LoginFormViewProps> = ({
  email,
  password,
  onEmailChange,
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
              Sign In
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={onFormSubmit}>
              <div>
                <div className="mt-2">
                  <input
                    onChange={(e) => onEmailChange(e.target.value)}
                    value={email || ''}
                    placeholder="Email"
                    id="emailLogin"
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
                <div className="mt-2">
                  <input
                    onChange={(e) => onPasswordChange(e.target.value)}
                    value={password || ''}
                    placeholder="Password"
                    id="passwordLogin"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="h-16 block w-full rounded-md border-0 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className='mt-6'>
                <span id='errorLogin' className='text-warnings hidden'>Some credentials are incorrect</span>
              </div>

              <div>
                <button
                  type="submit"
                  className="h-16 flex w-full justify-center rounded-md bg-text py-5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="container columns-2 mt-2">
              <div>
                <Link to="/signup" className="mt-10 text-center text-xs text-gray-500">
                  Don't have an account?
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
};

export default LoginView;