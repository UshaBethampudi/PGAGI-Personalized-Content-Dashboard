import React from "react";

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  };
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
