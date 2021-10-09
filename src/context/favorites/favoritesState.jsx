import React, { useState } from 'react';
import { favoritesContext } from './favoritesContext';

const FavoritesState = ({children}) => {
    const initialState = JSON.parse(localStorage.getItem('favorites')) || []
    const [favoriteUsers, setFavoriteUsers] = useState(initialState)
    const addToFavorites = user => {
        const newUsers = [...favoriteUsers, user]
        localStorage.setItem('favorites', JSON.stringify(newUsers))
        setFavoriteUsers(newUsers)
    }
    const removeFromFavorites = id => {
        const newUsers = favoriteUsers.filter(user => user.id !== id)
        localStorage.setItem('favorites', JSON.stringify(newUsers))
        setFavoriteUsers(newUsers)
    }
    return ( 
        <favoritesContext.Provider value={{favoriteUsers, addToFavorites, removeFromFavorites}} >
            {children}
        </favoritesContext.Provider>
     );
}
 
export default FavoritesState;