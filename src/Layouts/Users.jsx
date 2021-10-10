import React from 'react';
import { useParams } from 'react-router';
import UserPage from '../Components/Users/UserPage';
import UsersList from "../Components/Users/UsersList";

const Users = () => {
    const {userId} = useParams()
    return (
        <div className="container-xl py-2">
            {userId ? <UserPage userId={userId}/> : <UsersList/>}
        </div>
    );
};

export default Users;