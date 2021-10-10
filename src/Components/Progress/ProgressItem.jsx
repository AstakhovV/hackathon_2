import React from "react";
import "./progress.scss";
import PropTypes from "prop-types";

const ProgressItem = ({ progressItem, selectValueActive }) => {
  let colorForInput;
  let num = progressItem.progress;
  if (num >= 0 && num < 25) {
    colorForInput = "#A91D11";
  } else if (num >= 25 && num < 50) {
    colorForInput = "#FFDC33";
  } else if (num >= 50 && num < 75) {
    colorForInput = "#A8E4A0";
  } else if (num >= 75 && num < 100) {
    colorForInput = "#44944A";
  } else {
    colorForInput = "#4285B4";
  }

  let infoStyle = selectValueActive === "bar"
      ? {
        background: `-webkit-linear-gradient(left, ${colorForInput} 0%, ${colorForInput} ${num}%, white ${num}%, white 100%)`
      }
      : {
        background: `conic-gradient(${colorForInput} ${3.6 * num}deg, white ${3.6 * num}deg)`
      }

  return (
    <article className="progress__inputs-range">
      <div className="progress__inputs-item item">
        <p className="item__name">{progressItem.name}</p>
        {selectValueActive === "bar" && (
          <div className="item__wrap">
            <input
              type="range"
              min="0"
              max="100"
              defaultValue={progressItem.progress}
              className="item__input"
              style={infoStyle}
            />
            <span
              className={
                "item__input-span " +
                (progressItem.progress > 75 ? "item__input-span-more-75" : "")
              }
            >
              {progressItem.progress}%
            </span>
          </div>
        )}
        {selectValueActive === "circle" && (
          <div className="item__circle" style={infoStyle}>
            <span className="item__circle-span">{progressItem.progress} %</span>
          </div>
        )}
      </div>
    </article>
  );
};
ProgressItem.propTypes = {
  progressItem: PropTypes.object.isRequired,
  selectValueActive: PropTypes.string.isRequired,
};

export default ProgressItem;
