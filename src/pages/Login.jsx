
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
      <div className="flex flex-1 mt-16 lg:mt-20 flex-col justify-center px-6 pt-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md shadow-md px-10 bg-gray-50 pb-10 pt-10 rounded-md">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-blue-800 mb-10 ">
                Ingrese a su cuenta
            </h2>
       
       
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
               Usuario
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
               className="flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
               Inciar sessión
              </button>
            </div>

            <div className="text-center mt-4">
                <p className="text-base text-gray-800">¿No tienes cuenta? <NavLink to="/register" className="text-blue-700 font-semibold">Regístrate</NavLink></p>
            </div>

          </form>

      
      </div>
    </div>

  )
}

export default Login