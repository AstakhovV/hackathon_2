import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.css"
import { Router } from "react-router-dom";
import FavoritesState from './context/favorites/favoritesState.jsx';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Router history={history}>
        <FavoritesState>
          <App />
        </FavoritesState>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);