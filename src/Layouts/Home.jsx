import React from "react";
import Button from "../Components/UI/Button";
import {NavLink} from "react-router-dom";
import mainImg from "../assets/image/main.png"
import '../css/index.scss'

const Home = () => {

  return (
        <div className="items__container" >
            <h3 className="mb-2">Как выглядят успешные Frontend Juniors с курса Владилена Минина?</h3>
            <img src={mainImg} alt="Main page"/>
            <NavLink to="/users">
                <Button className="mt-4 btn-lg" color="primary" children="Узнать больше о команде"/>
            </NavLink>
        </div>
  );
}

export default Home;
