import React, { useContext } from "react";
import UsersList from "../Components/Users/UsersList";
import { favoritesContext } from "../context/favorites/favoritesContext";
import sadImage from "../assets/image/sad_dev.png"

const Favorites = () => {
    const { favoriteUsers } = useContext(favoritesContext);
    return (
        <div className="container pt-2">
            {favoriteUsers.length ? (
                <UsersList data={favoriteUsers} />
            ) : (
                <div className='items__container'>
                    <h3>Вы еще не добавили в избранное крутых разработчиков...</h3>
                    <img src={sadImage}
                         className='items__container-img'
                         alt="Sad Developer"
                    />
                </div>

            )}
        </div>
    );
};

export default Favorites;
