import React from 'react';
import {useSelector} from "react-redux";
import UsersList from "../Components/UsersList";

const Users = () => {
    const data = useSelector(state => state.users)
    return (
        <div>
            {
                data && <UsersList users={data}/>
            }
        </div>
    );
};

export default Users;