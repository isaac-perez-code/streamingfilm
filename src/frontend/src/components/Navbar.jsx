import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname === "/register") return null;

  return (
    <nav className="bg-red-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white text-2xl font-bold">
          STREAMINGFILM
        </Link>
        <div className="flex gap-6">
          <Link to="/home" className="text-white hover:underline">Inicio</Link>
          <Link to="/search" className="text-white hover:underline">Buscar</Link>
        </div>
      </div>
    </nav>
  );
}