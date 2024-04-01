import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'; // Импорт компонентов Material-UI
import films from '../../data/films';
import './MovieList.css';

function MovieList() {
    return (
      <Grid container spacing={3}>
        {films.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={movie.image}
                  alt={movie.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {movie.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Год: {movie.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Режиссер: {movie.director}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }

export default MovieList;
