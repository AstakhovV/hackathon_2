import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from "react-router-dom";
import FavoritesState from './context/favorites/favoritesState.jsx';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <FavoritesState>
          <App />
        </FavoritesState>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);