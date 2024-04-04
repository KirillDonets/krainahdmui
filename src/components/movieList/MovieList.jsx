import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import films from '../../data/films';
import './MovieList.css';
import { Link } from 'react-router-dom';
function generateSlug(name, year) {
  const slugName = name
    .toLowerCase()
    .replace(/\s+/g, '-')

  const slugYear = year.toString();

  return `${slugName}-${slugYear}`;
}

function MovieList() {
  return (
    <Grid container spacing={3}>
      {films.map((movie) => {
        const slug = generateSlug(movie.name, movie.year);
        console.log('Slug для фильма', movie.name, ':', slug);
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
                      Год: {movie.year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Режиссер: {movie.director}
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
