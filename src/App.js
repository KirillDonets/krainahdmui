import React, { useState } from 'react';
import './App.css';
import films from './data/films';
import MovieList from './components/movieList/MovieList';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCardWithParams from './components/movieCard/MovieCardWithParams';


function App() {
  const [selectedFilters, setSelectedFilters] = useState({ genre: null, type: null });

  const handleGenreSelection = ({ genre, type }) => {
    setSelectedFilters({ genre, type });
  };

  return (
    <Router>
      <div>
        <Header onGenreSelect={handleGenreSelection} />
        <Routes>
          <Route path="/" element={<HomePage selectedFilters={selectedFilters} />} />
          <Route path="/movie/:slug" element={<MovieCardWithParams />} />
        </Routes>
      </div>
    </Router>
  );
}

const HomePage = ({ selectedFilters }) => {
  const { genre, type } = selectedFilters;
  const filteredFilms = genre ? films.filter(film => film.genre === genre && (!type || film.type === type)) : films;
  return (
    <>
      <Carousel />
      <MovieList films={filteredFilms} />
    </>
  );
}

export default App;
