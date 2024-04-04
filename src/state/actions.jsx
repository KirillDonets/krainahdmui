export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    payload: movie
  });
  
  // Действие для удаления фильма
  export const removeMovie = (movieId) => ({
    type: 'REMOVE_MOVIE',
    payload: movieId
  });