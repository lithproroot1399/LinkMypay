import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { List } from "@/components/list";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
			<h1 className="text-3xl font-bold text-green-300 mb-6">LISTA DE ITENS</h1>

			<Input />

			<List />

			<Button />

      <div>
        <aside>
          
        </aside>
      </div>
		</div>
	);
}
