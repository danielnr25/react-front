import Header from "@/components/Navbar/Navbar";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/components/Dashboard/Dashboard";
import CategoriesIndex from "@/components/Dashboard/categories/CategoriesIndex";
import CategoriesForm from "@/components/Dashboard/categories/CategoriesForm";
import ProductIndex from "@/components/Dashboard/product/ProductIndex";
import SalesIndex from "@/components/Dashboard/sales/SalesIndex";
import Index from "@/components/Dashboard/admin/Index";
import About from "@/pages/About";
import ProductForm from "@/components/Dashboard/product/ProductForm";
import Cart from "@/pages/Cart";
import Collection from "@/pages/Collection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function parseJwt(token) { // funcion para decodificar el token JWT y obtener la información del usuario, :https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript, nos permite obtener la información del usuario desde el token JWT almacenado en localStorage y verificar si el token es válido. 
   try {
      const base64url = token.split('.')[1];
      const base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
         return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
   } catch (error) {
      console.error("Error al parsear el token:", error); // Si hay un error al parsear el token, se imprime un mensaje en la consola
      return null;
   }
}

// function para verificar si el token es valido
const isTokenValid = () => { 
   const token = localStorage.getItem("token"); // Obtenemos el token almacenado en localStorage y lo almacenamos en la variable token 
   if (token) { // Si el token existe, lo parseamos y verificamos si no ha expirado
      const parsedToken = parseJwt(token); // Parseamos el token 
      return parsedToken && parsedToken.exp > Date.now() / 1000; // Verificamos si el token no ha expirado
   }
   return false; // Si no hay token, retornamos false
}

const PrivateRoute = ({ element }) => { // Componente PrivateRoute que recibe un elemento y lo renderiza si el token es válido
   return isTokenValid() ? element : <Navigate to="/login" />; // Si el token es válido, renderizamos el componente, de lo contrario redirigimos al usuario a la página de login 
};



const App = () => {
   const tokenValid = isTokenValid();
   const location = useLocation();

   const showNavbar = !location.pathname.startsWith('/admin'); // ocultar el navbar cuando las rutas comiencen con "/admin"

  return (
   <>
      <div className={`transition-all duration-300 ${showNavbar ? "px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]" : ""}`}>
         {showNavbar && <Header />}
         <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/collection" element={<Collection />} />
               <Route path="/login" 
                  element={
                     tokenValid ?
                     <Navigate to="/admin" />
                     :<Login />
                  } />
            
               <Route path="/admin/" element = {<PrivateRoute element={<Dashboard />} />}>
                  <Route path="dashboard" element={<Index />} />
                  <Route path="categories" element={<CategoriesIndex />} />
                  <Route path="categories/new" element={<CategoriesForm />} />
                  <Route path="categories/edit/:id" element={<CategoriesForm />} />
                  <Route path="products" element={<ProductIndex />} />
                  <Route path="products/new" element={<ProductForm />} />
                  <Route path="products/edit/:id" element={<ProductForm />} />
                  <Route path="detailshop" element={<SalesIndex />} />
               </Route>
               <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
         </Routes>

         <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
         />

      </div>



   </>
  )
}

export default App