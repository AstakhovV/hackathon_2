import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import Button from "./UI/Button";
import { renderAge } from "../utils/helpers";

const UserCard = ({ id, firstName, lastName, age, about, photo }) => {
    const history = useHistory();
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
                    <Button outlined color="success">
                        В избранное
                    </Button>
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
