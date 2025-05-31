import CategoriesList from "./CategoriesList"
import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_URL;


const CategoriesIndex = () => {
    const [searchTerm,setSearchTerm] = useState("");
    const [categories,setCategories] = useState([]); // me sirve para mostrar el resultado de la busqueda
    const [allCategories,setAllCategories] = useState([]); // me sirve para mostrar todas las categorias
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        const fetchCategories = async() =>{
            try {
                const response = await axios.get(`${BASE_URL}/categories`);
                setAllCategories(response.data);
                setCategories(response.data);
            } catch (error) {
                console.log('Error al obtener las categorias: ',error)
            }
        }

        fetchCategories();
    },[]);

    const handlenewCategory = () =>{
        navigate("/admin/categories/new");
    }

  return (
    <div>
        <h1 className="text-2xl font-semibold text-gray-900">Listado de Categorias</h1>
        <hr className="my-4" />

        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <button
                    onClick={handlenewCategory}
                    className="bg-blue-800 text-white px-3 py-1.5 rounded-md cursor-pointer"
                >Nuevo</button>
                <input 
                    type="text"
                    placeholder="Buscar categorias"
                    className="border border-gray-300 px-2 py-1.5 rounded-md"
                />
            </div>
            <button className="bg-indigo-700 text-white px-3 py-1.5 rounded-md cursor-pointer">
                Buscar
            </button>
        </div>
        <hr className="my-4" />

        <CategoriesList categories={categories} />
    </div>
  )
}

export default CategoriesIndex