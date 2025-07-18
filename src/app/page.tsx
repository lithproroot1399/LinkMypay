import { ListItens } from "@/components/listIten";
import { Sonhos } from "@/components/sonhos";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-between min-h-screen bg-black p-4 gap-3">

			<ListItens />
    <Sonhos />
      
		</div>
	);
}
