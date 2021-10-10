import React, { useContext } from "react";
import UsersList from "../Components/UsersList";
import { favoritesContext } from "../context/favorites/favoritesContext";
import sadImage from "../assets/image/sad_dev.png"

const Favorites = () => {
    const { favoriteUsers } = useContext(favoritesContext);
    return (
        <div className="container pt-3 ">
            {favoriteUsers.length ? (
                <UsersList data={favoriteUsers} />
            ) : (
                <>
                    <h3>Вы еще не добавили в избранное разработчиков</h3>
                    <img src={sadImage}
                         alt="Sad Developer"
                    />
                </>

            )}
        </div>
    );
};

export default Favorites;
