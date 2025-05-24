import Header from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </div>

     
      
    </>
  )
}

export default App