import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './MovieCard.css';

const MovieCard = ({ movie, onImageClick }) => {
    return (
        <Card className='movieCard'>
            <CardMedia
                component="img"
                height="500"
                image={movie.image}
                alt={movie.name}
                className="movieImage"
                onClick={() => onImageClick(movie)}
            />
            <CardContent className="movieContent">
                <Typography gutterBottom variant="h5" component="div">
                    {movie.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Год: {movie.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Режиссер: {movie.director}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Описание: {movie.description}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    Видео: <a href={movie.videoLink}>{movie.videoLink}</a>
                </Typography> */}
            </CardContent>
        </Card>
    );
}

export default MovieCard;
