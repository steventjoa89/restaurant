import React from "react";

function CardSubtitle({ text = "" }) {
  return (
    <div className="text-xs font-bold tracking-tight text-gray-300 dark:text-white">
      {text}
    </div>
  );
}

export default CardSubtitle;
