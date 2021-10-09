import React from 'react';
import { useParams } from 'react-router';
import UserPage from '../Components/UserPage';
import UsersList from "../Components/UsersList";

const Users = () => {
    const {userId} = useParams()
    return (
        <div className="container pt-3">
            {userId ? <UserPage userId={userId}/> : <UsersList/>}
        </div>
    );
};

export default Users;