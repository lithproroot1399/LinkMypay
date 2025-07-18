import { MdAdd } from "react-icons/md";
export function Input() {
    return (
        <div className="flex items-center justify-between gap-2">
            <input
            className="px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Buscar item..." />
       <MdAdd className="text-green-400" size={40} />
        </div>
        
        

    );
}
