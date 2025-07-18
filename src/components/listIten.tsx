import { MdAdd } from "react-icons/md";
import { Button } from "./button";
import { List } from "./list";

export function ListItens() {
    return (
        <>
         <div className="flex flex-row items-center  justify-between gap-2">
                    <input
                    className="px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Buscar item..." />
               <MdAdd className="text-green-400" size={40} />
                </div>

        <List />
        <div className="w-full max-w-sm">
				<button 
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
					CADASTRAR NOVO ITEM
				</button>
			</div>
        </>
    )
}