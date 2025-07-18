// src/app/page.tsx
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { List } from "@/components/list";
import Modal from "@/components/modal";

export default function Home() {
  return (
    // Div principal com flex-row e justify-between para alinhar os itens
    <div className="flex flex-row justify-between items-start min-h-screen bg-black p-8">
      {/* O componente ListItens ficará à esquerda */}
<div className="flex flex-col items-center w-full max-w-md">
	      <Input />
	  <List />
<Button />
	</div>      
      {/* O componente Modal ficará à direita */}
      
	  <Modal />
	  
    </div>
  );
}