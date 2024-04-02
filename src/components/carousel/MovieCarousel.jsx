import React, { useState, useEffect, useRef } from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import './MovieCarousel.css';
import films from '../../data/films';

function MovieCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollStep = 250;
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    if (carouselContainerRef.current) {
      const totalWidth = Array.from(carouselContainerRef.current.children).reduce(
        (acc, child) => acc + child.clientWidth,
        0
      );
      carouselContainerRef.current.style.width = `${totalWidth}px`;
    }
  }, []);

  const handleScroll = (scrollOffset) => {
    const newPosition = Math.max(0, Math.min(scrollPosition + scrollOffset, getMaxScrollPosition()));
    setScrollPosition(newPosition);
  };

  const getMaxScrollPosition = () => {
    const container = carouselContainerRef.current;
    if (container) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      return maxScroll;
    }
    return 0;
  };

  return (
    <div className="carouselRoot">
      <div className="carouselControls">
        <Button
          className="carouselButton carouselButtonPrev"
          onClick={() => handleScroll(-scrollStep)}
          disabled={scrollPosition === 0}
        >
          Prev
        </Button>
        <Button
          className="carouselButton carouselButtonNext"
          onClick={() => handleScroll(scrollStep)}
          disabled={scrollPosition === getMaxScrollPosition()}
        >
          Next
        </Button>
      </div>
      <div
        ref={carouselContainerRef}
        className="carouselContainer"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        <Grid container spacing={2} className="carouselGrid">
          {films.map((film) => (
            <Grid item key={film.id} className="carouselItem">
              <Card className="carouselSlide">
                <CardContent>
                  <img src={film.image} className="carouselImage" alt={film.name} />
                  <Typography variant="h5">{film.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default MovieCarousel;
