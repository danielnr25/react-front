

const SalesIndex = () => {
  return (
    <div>
        <h1 className="text-2xl font-semibold text-gray-900">Listado de Ventas</h1>
        <hr className="my-4" />

        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <button className="bg-blue-800 text-white px-3 py-1.5 rounded-md cursor-pointer">Nuevo</button>
                <input 
                    type="text"
                    placeholder="Buscar venta"
                    className="border border-gray-300 px-2 py-1.5 rounded-md"
                />
            </div>
            <button className="bg-indigo-700 text-white px-3 py-1.5 rounded-md cursor-pointer">
                Buscar
            </button>
        </div>
        <hr className="my-4" />

    </div>
  )
}

export default SalesIndex