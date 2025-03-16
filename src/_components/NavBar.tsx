export default function NavBar() {
  return (
    <nav className="w-full h-20 text-xl bg-gray-100 p-4 flex justify-center items-center shadow-md">
      <div className="space-x-4 text-gray-600 flex">
        <a href="/" className=" hover:text-gray-900">
          Gráfico
        </a>
        <p>|</p>
        <a href="/tabela" className=" hover:text-gray-900">
          Tabela
        </a>
      </div>
    </nav>
  );
}
