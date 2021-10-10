import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import UserCard from "./UserCard";
import API from "../../api";
import Loader from "../UI/Loader";
const UsersList = ({ data }) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((users) => setUsers(users));
    }, []);

    if (data) {
        return (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {data.map((user) => (
                    <div className="col" key={user.id}>
                        <UserCard {...user} />
                    </div>
                ))}
            </div>
        );
    }
    if (!users) {
        return <Loader />;
    }
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {users.map((user) => (
                <div className="col" key={user.id}>
                    <UserCard {...user} />
                </div>
            ))}
        </div>
    );
};

UsersList.propTypes = {
    data: PropTypes.array,
};

export default UsersList;
