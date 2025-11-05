import { Link } from "react-router-dom";
import { img } from "../api/tmdb";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="block group">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
        <img
          src={img(movie.poster_path)}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-3">
          <h3 className="text-white font-bold text-lg truncate">
            {movie.title}
          </h3>
          <p className="text-gray-400 text-sm">
            {movie.vote_average.toFixed(1)} ⭐
          </p>
        </div>
      </div>
    </Link>
  );
}