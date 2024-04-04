import React from 'react';
import { createRoot } from 'react-dom/client'; // Используйте createRoot из "react-dom/client" 
import { Provider } from 'react-redux';
import store from './state/store';
import App from './App';

const root = createRoot(document.getElementById('root')); // Создание корневого элемента с помощью createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
