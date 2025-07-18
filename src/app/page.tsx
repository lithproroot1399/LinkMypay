import Image from "next/image";

export default function Home() {
  return (

    <><div className="flex items-center justify-between m-4">
      <main>
        <input
          className="border border-gray-300 rounded-md p-2"
          width={300}
          height={50}
          type="text"
          placeholder="Search..." />

        <div className="text-green-400 flex flex-col gap-2 mt-4">
          <li>
            CASA
          </li>
          <li>
            CARRO
          </li>
          <li>
            VIOLÃO
          </li>
          <li>
            DRONE
          </li>

          <li>
            SKATE
          </li>
          <li>
            IPHONE
          </li>
          <li>
            TABLET
          </li>
        </div>
      </main>
    </div>

      <div>
        <aside>
          <p>Sidebar content</p>
        </aside>
      </div>
      <h1>Hello world</h1></>




  );
}
