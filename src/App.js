// App.js

import React from 'react';
import './App.css';
import MovieList from './components/movieList/MovieList';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import MoviePage from './components/moviePage/MoviePage'; // Подключаем ваш компонент страницы фильма
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import films from './data/films'; // Импортируем источник данных фильмов

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <MovieList />
    </div>
    // <Router>
    //   <div>
    //     <Header />
    //     <Switch>
    //       <Route path="/" exact>
    //         <Carousel />
    //         <MovieList />
    //       </Route>
    //       <Route path="/movie/:id">
    //         <MoviePage films={films} />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
