import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetcher } from "../api/tmdb";

export default function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetcher("/trending/movie/week").then(data => {
      setTrending(data.results.slice(0, 12));
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="text-white text-center mt-20">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">
      <header className="relative">
        <img
          src="https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMUBj4.jpg"
          alt="Hero"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10">
          <h1 className="text-5xl font-bold">DUNE 2</h1>
          <p className="text-xl mt-2">La saga continúa</p>
          <button className="mt-4 bg-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-700">
            Reproducir
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold mb-6">Tendencias de la semana</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {trending.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}