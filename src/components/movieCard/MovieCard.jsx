import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './MovieCard.css';

const MovieCard = ({ movie, onImageClick }) => {
    return (
        <Card className='movieCard'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <CardMedia
                        component="img"
                        image={movie.image}
                        alt={movie.name}
                        className="movieImage"
                        onClick={() => onImageClick(movie)}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <CardContent className="movieContent">
                        <Typography gutterBottom variant="h5" component="div">
                            {movie.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="infoLabel">Рік:</span> {movie.year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="infoLabel">Режисер:</span> {movie.director}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="infoLabel">Тип:</span> {movie.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="infoLabel">Жанр:</span> {movie.genre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className="infoLabel">Сюжет:</span> {movie.description}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
            {movie.videoLink && (
                <div className="videoContainer">
                    <iframe
                        width="100%"
                        height="315"
                        src={movie.videoLink}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </Card>
    );
}

export default MovieCard;
