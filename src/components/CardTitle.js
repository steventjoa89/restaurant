import React from "react";

function CardTitle({ text = "", textSize="xs" }) {
  return (
    <div className={`text-${textSize} font-bold tracking-tight text-gray-900 dark:text-white`}>
      {text}
    </div>
  );
}

export default CardTitle;
