import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import Button from "../UI/Button";
import { renderAge } from "../../utils/helpers";
import { favoritesContext } from "../../context/favorites/favoritesContext";

const UserCard = ({ id, firstName, lastName, age, about, photo }) => {
    const history = useHistory();
    const { favoriteUsers, addToFavorites, removeFromFavorites } =
        useContext(favoritesContext);
    const onAddToFavorites = () => {
        const user = { id, firstName, lastName, age, about, photo };
        addToFavorites(user);
    };
    const isFavorite = favoriteUsers.find((user) => user.id === id);
    return (
        <div className="card m-2">
            <img src={photo} className="card-img-top" alt="person" />
            <div className="card-body">
                <h5 className="card-title">
                    {firstName} {lastName}
                </h5>
                <h6 className="card-subtitle text-muted mb-3">
                    {renderAge(age)}
                </h6>
                <p className="card-text">{about}</p>
                <div className="d-flex justify-content-between">
                    {isFavorite ? (
                        <Button
                            size="sm"
                            color="danger"
                            onClick={() => removeFromFavorites(id)}>
                            Удалить из избранного
                        </Button>
                    ) : (
                        <Button
                            outlined
                            color="success"
                            onClick={onAddToFavorites}>
                            В избранное
                        </Button>
                    )}

                    <Button
                        onClick={() => history.push("/users/" + id)}
                        color="primary">
                        Открыть
                    </Button>
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    description: PropTypes.string,
    photo: PropTypes.string,
};

export default UserCard;
