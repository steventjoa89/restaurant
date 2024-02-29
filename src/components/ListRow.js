import React from "react";

function ListRow({ text = "", textWeight='normal', value = "" }) {
  return (
    <div className="flex flex-row justify-between px-1 py-0.5">
      <span className={`text-xs font-${textWeight}`}>{text}</span>
      <span className={`text-xs font-${textWeight}`}>{value}</span>
    </div>
  );
}

export default ListRow;
