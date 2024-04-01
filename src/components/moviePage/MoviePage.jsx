
import React from 'react';
import { useParams } from 'react-router-dom'; // Предполагается, что вы используете React Router для навигации
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';

function MoviePage({ films }) {
  const { id } = useParams(); // Получаем id фильма из URL
  const movie = films.find((film) => film.id === id); // Находим фильм по id

  if (!movie) {
    return <Typography variant="h2">Фильм не найден</Typography>;
  }

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        {movie.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Описание
              </Typography>
              <Typography variant="body1">{movie.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Изображение
              </Typography>
              <img src={movie.image} alt={movie.name} style={{ maxWidth: '100%' }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoviePage;
