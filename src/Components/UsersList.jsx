import React from "react";
import PropTypes from 'prop-types'
import UserCard from "./UserCard";

const UsersList = ({ users, ...rest }) => {
    return (
        <div className="row row-col-3">
            {users.map((user) => (
                <div className="col" key={user.id}>
                    <UserCard {...user} {...rest}/>
                </div>
            ))}
        </div>
    );
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersList;
