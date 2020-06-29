import React from "react";

import "./Bage.css";

const Bage = ({ item, click, selectedColor }) => {
  //цвета окна создание списка
  let colorPopup = item.hex;

  //цвета спика
  let colorList;

  if (item.color) {
    colorList = item.color.hex || item.color;
  }

  return (
    <i onClick={click} className="bage">
      {item.icon ? (
        item.icon
      ) : (
        <svg
          className={selectedColor === item.id ? "active" : "noActive"}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5" cy="5" r="5" fill={colorList || colorPopup} />
        </svg>
      )}
    </i>
  );
};

export default Bage;
