export default function Quadrados() {
  return (
    // Fundo preto na div principal
    <div className="flex flex-col items-center p-8 bg-black min-h-screen">
      {/* Container que não tem mais borda */}
      <div className="w-full max-w-4xl">
        {/*
          Div dos 3 quadrados pequenos
        */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Adicionei as classes de borda aqui */}
          <div className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center border-2 border-green-500">
            <h3 className="font-bold text-lg mb-2">COMPUTADOR</h3>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center border-2 border-green-500">
            <h3 className="font-bold text-lg mb-2">Título 2</h3>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center border-2 border-green-500">
            <h3 className="font-bold text-lg mb-2">Título 3</h3>
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Div dos 9 quadrados */}
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            // Adicionei as classes de borda aqui também
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center border-2 border-green-500"
            >
              <h3 className="font-bold text-sm mb-2">Título {index + 4}</h3>
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}