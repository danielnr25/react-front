import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_API_URL;

const CategoriesList = ({categories}) => {
   const navigate = useNavigate();
    const [isModalOpen,setIsModalOpen] = useState(false);
    const [selectedCategory,setSelectedCategory] = useState();

    const openModal = (category) =>{
        setSelectedCategory(category);
        setIsModalOpen(true);
    }

    const closeModal = () =>{
        setSelectedCategory(null);
        setIsModalOpen(false)
    }

    const deleteCategory = async() =>{
        if(!selectedCategory) return
        try {
            const response = await axios.delete(`${BASE_URL}/categories/${selectedCategory.id}`)
            console.log(response.data.message)
            closeModal();
        } catch (err) {
            alert("Error al eliminar categoria" + err)
        }
       
    }

    const handleEditCategory = (id) =>{
        navigate(`/admin/categories/edit/${id}`);
    }


  return (
    <div>
        <table className="w-full border border-gray-300 roundend-sm">
           <thead className="bg-sky-200 space-y-5">
                <tr className="text-center uppercase text-base">
                    <th className="px-4 py-2">Nombre</th>
                    <th className="px-4 py-2">Descripción</th>
                    <th className="px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody className="text-base font-medium text-center">
                {categories.map((category)=>(
                    <tr
                        key={category.id}
                        className="odd:bg-white even:bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <td className="py-3 uppercase">{category.nombre}</td>
                        <td className="py-3">{category.descripcion}</td>
                        <td>
                            <button 
                                onClick={()=>handleEditCategory(category.id)}
                                className="bg-yellow-600 mr-2 text-white px-3 py-1.5 rounded-md cursor-pointer">Editar</button>
                            <button 
                                onClick={()=>openModal(category)}
                                className="bg-red-600 text-white px-3 py-1.5 rounded-md cursor-pointer">Eliminar</button>
                        </td>
                    </tr>
                )) }
            </tbody>
        </table>

        {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Confirmar eliminación</h2>
            <p>
              ¿Estás seguro de que deseas eliminar la categoría{" "}
              <strong>{selectedCategory?.nombre}</strong>?
            </p>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={deleteCategory} 
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}



    </div>
  )
}

export default CategoriesList