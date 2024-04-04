import React from 'react';
import './App.css';
import MovieList from './components/movieList/MovieList';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCardWithParams from './components/movieCard/MovieCardWithParams';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Carousel />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:slug" element={<MovieCardWithParams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
