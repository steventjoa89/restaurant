import React from "react";

function HeadingRow({ text = "", textSize = "md",  }) {
  return (
    <div className="flex flex-row justify-between py-3 px-1">
      <span className={`text-${textSize} font-bold`}>{text}</span>
    </div>
  );
}

export default HeadingRow;
