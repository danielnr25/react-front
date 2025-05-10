import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const handleLogin = (e) =>{
        e.preventDefault(); // previene el comportamiento por defecto del formulario
        const data = { // crear objeto con los datos del usuario
            username,
            password
        }
        
        fetch("http://localhost:3000/auth/login",{
            method: "POST", 
            headers: { 
              "Content-Type": "application/json" // Tipo de contenido JSON
            },
            body: JSON.stringify(data) // Enviar los datos del usuario en formato JSON
        }).then((response)=>{
           if(!response.ok){
                console.error("Error de la autenticación") // lanzar un error
           }
           return response.json();
        }).then((result)=>{
            console.log("Resultado de la autenticación", result);
            if(result.data){
                console.log('Todo exitoso....')
                setError(null);
                //configurar al token
                // me envia al dashboard
            }else{
                setError(result.message);
            }
        }).catch((error)=>{
            console.error("Error: ",error);
             setError(error.message);
        }).finally(()=>{
            console.log('finaliza la ejecucion')
        })

    }

  return (
      <div className="flex flex-1 mt-16 lg:mt-20 flex-col justify-center px-6 pt-20 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md shadow-md px-10 bg-gray-50 pb-10 pt-10 rounded-md">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-blue-800 mb-10 ">
                Ingrese a su cuenta
            </h2>
       
       
          <form onSubmit={handleLogin} method="POST" className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
               Usuario
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  
                  onChange={(ev)=>setUsername(ev.target.value)}
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
                  onChange={(ev)=>setPassword(ev.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
               className="cursor-pointer flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-700 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
               Inciar sessión
              </button>
            </div>

            <div className="text-center mt-4">
                <p className="text-base text-gray-800">¿No tienes cuenta? <NavLink to="/register" className="text-blue-700 font-semibold">Regístrate</NavLink></p>
            </div>

               {error && <p className="text-red-500 font-medium text-base">{error}</p>}

          </form>

      
      </div>
    </div>

  )
}

export default Login