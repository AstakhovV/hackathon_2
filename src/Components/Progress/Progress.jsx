import React, { useState } from "react";
import "./progress.scss";
import PropTypes from "prop-types";
import ProgressItem from "./ProgressItem";

const Progress = ({ dataForProgressItems }) => {
  const [selectValueActive, setSelectValueActive] = useState("bar");

  const changeSelect = (event) => {
    if (event.target.value === "bar") {
      setSelectValueActive("bar");
    } else if (event.target.value === "circle") {
      setSelectValueActive("circle");
    }
  };

  return (
    <div className="progress">
      <article className="progress__choise-type">
        <p className="progress__text">Выберите тип отображения информации: </p>
        <select
          name="select-type"
          id="select-type"
          className="progress__select"
          onChange={(event) => changeSelect(event)}
        >
          <option value="bar">Шкала</option>
          <option value="circle">Круговая дигарамма</option>
        </select>
      </article>
      {Object.entries(dataForProgressItems).map((progressItem) => {
        return (
          <ProgressItem
            key={progressItem[0]}
            selectValueActive={selectValueActive}
            progressItem={progressItem}
          />
        );
      })}
    </div>
  );
};
Progress.propTypes = {
  dataForProgressItems: PropTypes.object.isRequired,
};

export default Progress;
