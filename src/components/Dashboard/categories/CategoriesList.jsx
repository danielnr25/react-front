const CategoriesList = ({categories}) => {
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
                    <tr>
                        <td className="py-3 uppercase">{category.nombre}</td>
                        <td className="py-3">{category.descripcion}</td>
                        <td>
                            <button className="bg-yellow-600 mr-2 text-white px-3 py-1.5 rounded-md">Editar</button>
                            <button className="bg-red-600 text-white px-3 py-1.5 rounded-md">Eliminar</button>
                        </td>
                    </tr>
                )) }


               
            </tbody>
        </table>


    </div>
  )
}

export default CategoriesList