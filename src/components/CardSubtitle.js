import React from "react";

function CardSubtitle({ text = "", textSize = "[0.5rem]" }) {
  return (
    <div
      className={`text-${textSize} font-bold tracking-tight text-gray-400 dark:text-white`}
    >
      {text}
    </div>
  );
}

export default CardSubtitle;
