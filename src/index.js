import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from "react-router-dom";
import FavoritesState from './context/favorites/favoritesState.jsx';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter basename="/hackathon_2" history={history}>
        <FavoritesState>
          <App />
        </FavoritesState>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);