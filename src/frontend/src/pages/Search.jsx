import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetcher } from "../api/tmdb";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = () => {
    if (query.trim()) {
      fetcher(`/search/movie?query=${encodeURIComponent(query)}`)
        .then(data => setResults(data.results));
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex gap-4 mb-10">
          <input
            type="text"
            placeholder="Busca películas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search()}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white text-xl focus:outline-none focus:ring-4 focus:ring-red-600"
          />
          <button
            onClick={search}
            className="bg-red-600 px-8 rounded-lg font-bold hover:bg-red-700"
          >
            BUSCAR
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {results.length === 0 && query && (
          <p className="text-center text-xl">No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}