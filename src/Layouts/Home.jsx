import React from "react";
import Button from "../Components/UI/Button";
import {NavLink} from "react-router-dom";

const Home = () => {

  return (
      <div className="container">

        <img src="" alt="Картинка команды"/>

        <NavLink to="/users">
          <Button color="primary" children="Узнать больше о команде"/>
        </NavLink>
      </div>
  );
}

export default Home;
