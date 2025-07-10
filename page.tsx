"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchMovies } from "@/redux/thunks/movieSlice";
import MovieCard from "@/components/MovieCard";

const RecommendationsPage = () => {
  const dispatch = useAppDispatch();
  const { data: movies, loading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Recommendations</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
};

export default RecommendationsPage;
