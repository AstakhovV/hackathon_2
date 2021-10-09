import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import API from '../api'
import Loader from "./UI/Loader";
const UsersList = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        API.users.fetchAll().then(users => setUsers(users))
    }, [])

    if(!users) {
        return <Loader/>
    }
    return (
        <div className="row row-cols-3">
            {users.map((user) => (
                <div className="col" key={user.id}>
                    <UserCard {...user} {...rest}/>
                </div>
            ))}
        </div>
    );
};


export default UsersList;
