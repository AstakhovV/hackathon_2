import React, {useState} from 'react';
import UsersList from "../Components/UsersList";

const Favorites = () => {
    const [data, setData] = useState(Object.values(Object.keys(localStorage).reduce(function (obj, str) {
        obj[str] = JSON.parse(localStorage.getItem(str));
        return obj
    }, {})))
    const handleRemove = (id) => {
        const obj = data.filter(obj => obj.id !== id)
        setData(obj)
    }
    return (
        <div>
            {
                data.length
                    ?
                    <UsersList onClick={handleRemove} users={data}/>
                    : <h3>Вы еще не добавили в избранное разработчиков</h3>
            }
        </div>
    );
};

export default Favorites;