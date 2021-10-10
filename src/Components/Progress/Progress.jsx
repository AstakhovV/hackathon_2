import React, { useState } from "react";
import "./progress.scss";
import PropTypes from "prop-types";
import ProgressItem from "./ProgressItem";

const Progress = ({dataForProgressItems}) => {
  const [selectValueActive, setSelectValueActive] = useState("bar");

  const changeSelect = ({target}) => {
      target.value === 'bar'
          ? setSelectValueActive("bar")
          : setSelectValueActive("circle")
  };

  return (
    <div className="progress">
      <article className="progress__choise-type">
        <h5>Навыки:</h5>
        <p className="progress__text">Выберите тип отображения информации: </p>
        <select
          name="select-type"
          id="select-type"
          className="progress__select"
          onChange={(e) => changeSelect(e)}
        >
          <option value="bar">Шкала</option>
          <option value="circle">Круговая дигарамма</option>
        </select>
      </article>
      {dataForProgressItems.map((progressItem) => {
        return (
          <ProgressItem
            key={progressItem.name}
            selectValueActive={selectValueActive}
            progressItem={progressItem}
          />
        );
      })}
    </div>
  );
};
Progress.propTypes = {
  dataForProgressItems: PropTypes.array.isRequired,
};

export default Progress;
