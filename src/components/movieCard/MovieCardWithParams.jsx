import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import films from '../../data/films';


function generateSlug(name, year) {
  const slugName = name
    .toLowerCase()
    .replace(/\s+/g, '-')

  const slugYear = year.toString();

  return `${slugName}-${slugYear}`;
}

function MovieCardWithParams() {
  const { slug } = useParams();
  console.log("Полученный слаг:", slug);
  films.forEach(movie => {
    const movieSlug = generateSlug(movie.name, movie.year);
    console.log(`Слаг для фильма ${movie.name}:`, movieSlug);
  });
  let movie = films.find(movie => generateSlug(movie.name, movie.year) === slug);

  if (!movie) {
    return <div>Фильм не найден</div>;
  }

  return <MovieCard movie={movie} />;
}

export default MovieCardWithParams;
