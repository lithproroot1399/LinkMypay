import { Input } from "@/components/input";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
			<h1 className="text-3xl font-bold text-green-300 mb-6">Lista de Itens</h1>

			<Input />

			{/* Div para a Lista de Itens */}
			<div className="w-full max-w-sm bg-black rounded-lg shadow-md p-4 mb-4">
				<ul className="text-gray-700 space-y-2">
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						CASA
					</li>
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						CARRO
					</li>
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						VIOLÃO
					</li>
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						DRONE
					</li>
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						SKATE
					</li>
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						IPHONE
					</li>
					<li className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer">
						TABLET
					</li>
				</ul>
			</div>

			{/* Div para o Botão */}
			<div className="w-full max-w-sm">
				<button 
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
					CADASTRAR NOVO ITEM
				</button>
			</div>
		</div>
	);
}
