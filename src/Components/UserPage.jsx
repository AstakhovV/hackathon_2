import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import API from "../api";
import Loader from "./UI/Loader";
import Button from "./UI/Button";
import Badge from "./UI/Badge";
import { renderAge } from "../utils/helpers";
import Socials from "./Socials";
import { favoritesContext } from "../context/favorites/favoritesContext";
const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const { favoriteUsers, addToFavorites, removeFromFavorites } =
        useContext(favoritesContext);
    const isFavorite = favoriteUsers.find((user) => user.id === userId);
    useEffect(() => {
        API.users.getUserById(userId).then((user) => setUser(user));
    }, [userId]);

    if (!user) return <Loader />;

    const {
        id,
        firstName,
        lastName,
        age,
        about,
        impact,
        socials,
        photo,
        isTeamlead,
    } = user;
    return (
        <>
            <div className="row">
                <div className="col-9">
                    <h2 className="m-0">
                        {firstName} {lastName}
                    </h2>
                    {isTeamlead && <Badge color="danger" content="teamlead" />}
                    <h4 className="text-muted fs-5">{renderAge(age)}</h4>
                </div>
                <div className="col-3">
                    {isFavorite ? (
                        <Button
                            onClick={() => removeFromFavorites(id)}
                            color="success"
                            size="sm"
                            className="text-white">
                            В избранном
                            <i className="bi bi-bookmark-check" />
                        </Button>
                    ) : (
                        <Button
                            onClick={() => addToFavorites(user)}
                            color="warning"
                            size="sm"
                            className="text-white">
                            В избранное <i className="bi bi-bookmark-plus" />
                        </Button>
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="rounded-1 shadow mb-4 overflow-hidden">
                        <img src={photo} alt="user" className="mw-100" />
                    </div>
                    {/* Отдельный компонент навыков */}
                    <h5>Навыки:</h5>
                </div>
                <div className="col-6">
                    <h5>О себе:</h5>
                    <p>{about}</p>
                    <h5>На проекте работал над:</h5>
                    <p>{impact}</p>
                    <Socials socials={socials} />
                </div>
            </div>
        </>
    );
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage;
