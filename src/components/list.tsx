export function List() {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md p-4 mb-4 bg-zinc-900">
      <ul className="text-green-500 space-y-2">
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          CASA
        </li>
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          CARRO
        </li>
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          VIOLÃO
        </li>
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          DRONE
        </li>
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          SKATE
        </li>
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          IPHONE
        </li>
        <li className="p-2 border border-green-500 rounded-md transition-colors duration-200 cursor-pointer hover:bg-zinc-800">
          TABLET
        </li>
      </ul>
    </div>
  );
}