import React from 'react';
import { useParams } from 'react-router-dom';
import films from '../../data/films';
import MovieCard from './MovieCard';

function MovieCardWithParams() {
  const { id } = useParams();
  const movie = films.find(movie => movie.id === parseInt(id));
  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  return <MovieCard movie={movie} />;
}

export default MovieCardWithParams;
