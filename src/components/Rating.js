import React from "react";

function Rating({ value, text, color }) {
  const stars = [];
  let i = 1;
  while (i < 6) {
    stars.push(
      <i
        key={i}
        style={{ color }}
        className={
          value >= i
            ? "fas fa-star"
            : value >= i - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    );
    i++;
  }
  return (
    <div className="rating">
      <span>
        {stars}
        <span>{text && text}</span>
      </span>
    </div>
  );
}

export default Rating;
