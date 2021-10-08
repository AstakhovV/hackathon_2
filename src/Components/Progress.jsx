import React, { useState } from "react";
import "./progress.scss";
import PropTypes from "prop-types";

const Progress = ({ num }) => {
  let colorForInput;
  if (num >= 0 && num < 25) {
    colorForInput = "red";
  } else if (num >= 25 && num < 50) {
    colorForInput = "yellow";
  } else if (num >= 50 && num < 75) {
    colorForInput = "lightgreen";
  } else if (num >= 75 && num < 100) {
    colorForInput = "green";
  } else {
    colorForInput = "blue";
  }

  const [infoStyle, setInfoStyle] = useState({
    background: `-webkit-linear-gradient(left, ${colorForInput} 0%, ${colorForInput} ${num}%, white ${num}%, white 100%)`,
  });
  const [selectValueActive, setSelectValueActive] = useState("bar");

  const changeSelect = (event) => {
    if (event.target.value === "bar") {
      setInfoStyle({
        background: `-webkit-linear-gradient(left, ${colorForInput} 0%, ${colorForInput} ${num}%, white ${num}%, white 100%)`,
      });
      setSelectValueActive("bar");
    } else if (event.target.value === "circle") {
      setInfoStyle({
        background: `conic-gradient(${colorForInput} ${3.6 * num}deg, white ${
          3.6 * num
        }deg)`,
      });
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
      <article className="progress__inputs-range">
        <div className="progress__inputs-item item">
          <p className="item__name">Заполнено информации:</p>
          {selectValueActive === "bar" && (
            <div className="item__wrap">
              <input
                type="range"
                min="0"
                max="100"
                defaultValue={num}
                className="item__input"
                style={infoStyle}
              />
              <span
                className={
                  "item__input-span " +
                  (num > 75 ? "item__input-span-more-75" : "")
                }
              >
                {num} %
              </span>
            </div>
          )}
          {selectValueActive === "circle" && (
            <div className="item__circle" style={infoStyle}>
              <span className="item__circle-span">{num} %</span>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};
Progress.propTypes = {
  num: PropTypes.number.isRequired,
};

export default Progress;
