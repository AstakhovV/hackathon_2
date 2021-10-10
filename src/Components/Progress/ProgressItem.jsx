import React from "react";
import "./progress.scss";
import PropTypes from "prop-types";

const ProgressItem = ({ progressItem, selectValueActive }) => {
  let colorForInput;
  let num = progressItem[1];
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

  let infoStyle;
  if (selectValueActive === "bar") {
    infoStyle = {
      background: `-webkit-linear-gradient(left, ${colorForInput} 0%, ${colorForInput} ${num}%, white ${num}%, white 100%)`,
    };
  } else if (selectValueActive === "circle") {
    infoStyle = {
      background: `conic-gradient(${colorForInput} ${3.6 * num}deg, white ${
        3.6 * num
      }deg)`,
    };
  }

  return (
    <article className="progress__inputs-range">
      <div className="progress__inputs-item item">
        <p className="item__name">{progressItem[0]}</p>
        {selectValueActive === "bar" && (
          <div className="item__wrap">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue={progressItem[1]}
              className="item__input"
              style={infoStyle}
            />
            <span
              className={
                "item__input-span " +
                (progressItem[1] > 75 ? "item__input-span-more-75" : "")
              }
            >
              {progressItem[1]}%
            </span>
          </div>
        )}
        {selectValueActive === "circle" && (
          <div className="item__circle" style={infoStyle}>
            <span className="item__circle-span">{progressItem[1]} %</span>
          </div>
        )}
      </div>
    </article>
  );
};
ProgressItem.propTypes = {
  progressItem: PropTypes.array.isRequired,
  selectValueActive: PropTypes.string.isRequired,
};

export default ProgressItem;
