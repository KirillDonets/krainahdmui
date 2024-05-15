import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


function generateSlug(name, year) {
  const slugName = name.toLowerCase().replace(/\s+/g, '-');
  const slugYear = year.toString();
  return `${slugName}-${slugYear}`;
}

function MovieList({ films }) {
  console.log('Отображаемые фильмы:', films);

  return (
    <Grid container spacing={3}>
      {films.map((movie) => {
        const slug = generateSlug(movie.name, movie.year);
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Link to={`/movie/${slug}`} className="movieLink">
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
                      Рік: {movie.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Режисер: {movie.director}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Тип: {movie.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Жанр: {movie.genre}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MovieList;
