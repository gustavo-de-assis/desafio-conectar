export default function NavBar() {
  return (
    <nav className="w-full h-16 sm:h-20 text-lg sm:text-xl bg-gray-100 px-4 sm:px-6 flex justify-center items-center shadow-md fixed top-0 z-10">
      <div className="flex items-center gap-2 sm:gap-4 text-gray-600">
        <a href="/" className="hover:text-gray-900 py-2">
          Gráfico
        </a>
        <span className="hidden sm:block">|</span>
        <a href="/tabela" className="hover:text-gray-900 py-2">
          Tabela
        </a>
      </div>
    </nav>
  );
}
