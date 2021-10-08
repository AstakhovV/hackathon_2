import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import Button from "./UI/Button";
import { renderAge } from "../utils/helpers";

const UserCard = ({ id, firstname, lastname, age, description, img }) => {
    const history = useHistory();
    return (
        <div className="card">
            <img src={img} className="card-img-top" alt="person" />
            <div className="card-body">
                <h5 className="card-title">
                    {firstname} {lastname}
                </h5>
                <h6 className="card-subtitle text-muted mb-3">
                    {renderAge(age)}
                </h6>
                <p className="card-text">{description}</p>
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
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    description: PropTypes.string,
    img: PropTypes.string,
};

export default UserCard;
