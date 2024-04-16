import React, { useState } from 'react';
import { AppBar, Toolbar, Button, TextField, Paper, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';
import films from '../../data/films';

const categories = [
  { name: 'Фільми', genres: ['Детектив', 'Містика', 'Мелодрама', 'Бойовик', 'Жахи', 'Фантастика', 'Комедія', 'Історичний', 'Документальний', 'Пригодницький', 'Драма', 'Трилер'] },
  { name: 'Серіали', genres: ['Детектив', 'Містика', 'Мелодрама', 'Бойовик', 'Жахи', 'Фантастика', 'Комедія', 'Історичний', 'Документальний', 'Пригодницький', 'Драма', 'Триллер'] },
  { name: 'Мультфільми', genres: ['Детектив', 'Містика', 'Мелодрама', 'Бойовик', 'Жахи', 'Фантастика', 'Комедія', 'Історичний', 'Документальний', 'Пригодницький', 'Драма', 'Триллер'] }
];

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleMenuClick = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    const results = value ? films.filter(film =>
      film.name.toLowerCase().includes(value.toLowerCase())
    ) : [];
    setSearchResults(results);
  };

  const handleSearchSubmit = () => {
    console.log('Выполнить поиск с запросом:', searchQuery);
  };

  const clearSearchResults = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="logo" />
        </Link>
        {categories.map((category, index) => (
          <div key={index}>
            <Button
              aria-controls="category-menu"
              aria-haspopup="true"
              onClick={(event) => handleMenuClick(event, category)}
              color="inherit"
            >
              {category.name}
            </Button>
          </div>
        ))}
        <Menu
          id="category-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {selectedCategory && selectedCategory.genres.map((genre, index) => (
            <MenuItem key={index} onClick={handleClose}>{genre}</MenuItem>
          ))}
        </Menu>
        <TextField
          label="Пошук"
          variant="outlined"
          size="small"
          className="searchField"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Paper className="searchResultsContainer" elevation={3}>
          {searchResults.length > 0 && (
            searchResults.map(film => (
              <div key={film.id} className="searchResult">
                <Link to={`/movie/${film.id}`} className="filmLink" onClick={clearSearchResults}>
                  <p>{film.name} ({film.year})</p>
                </Link>
              </div>
            ))
          )}
        </Paper>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
