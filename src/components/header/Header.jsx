import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png'; // Импортируем изображение вашего логотипа
import './Header.css'; // Импортируем CSS файл

const categories = [
  { name: 'Фільми', genres: ['Детектив', 'Містика', 'Мелодрама', 'Бойовик', 'Жахи', 'Фантастика', 'Комедія', 'Історичний', 'Документальний', 'Пригодницький', 'Драма', 'Трилер'] },
  { name: 'Серіали', genres: ['Детектив', 'Містика', 'Мелодрама', 'Бойовик', 'Жахи', 'Фантастика', 'Комедія', 'Історичний', 'Документальний', 'Пригодницький', 'Драма', 'Триллер'] },
  { name: 'Мультфільми', genres: ['Детектив', 'Містика', 'Мелодрама', 'Бойовик', 'Жахи', 'Фантастика', 'Комедія', 'Історичний', 'Документальний', 'Пригодницький', 'Драма', 'Триллер'] }
];

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const handleMenuClick = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className="header">
        <img src={logo} alt="Логотип" className="logo" /> {/* Ваш логотип */}
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
            <Menu
              id="category-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedCategory === category}
              onClose={handleClose}
            >
              {category.genres.map((genre, index) => (
                <MenuItem key={index} onClick={handleClose}>{genre}</MenuItem>
              ))}
            </Menu>
          </div>
        ))}
        <TextField label="Пошук" variant="outlined" size="small" className="searchField" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
