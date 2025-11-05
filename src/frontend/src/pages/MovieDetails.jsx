import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetcher, img } from "../api/tmdb";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetcher(`/movie/${id}`).then(setMovie);
  }, [id]);

  if (!movie) return <div className="text-white text-center mt-20">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative">
        <img
          src={img(movie.backdrop_path)}
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-32 relative z-10 pb-20">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={img(movie.poster_path)}
            alt={movie.title}
            className="w-64 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
            <p className="text-2xl text-red-500 mb-4">
              {movie.vote_average.toFixed(1)} ⭐
            </p>
            <p className="text-lg leading-relaxed mb-6">{movie.overview}</p>
            <button className="bg-red-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-red-700">
              Reproducir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}