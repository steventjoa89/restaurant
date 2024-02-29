import React from "react";
import HeadingRow from "../HeadingRow";
import MenuCard from "../MenuCard";

function LeftOrderPane() {
  return (
    <div className="col-span-6 md:col-span-4 overflow-y-scroll h-screen hide-scrollbar ml-3">
      <HeadingRow text="Explore Our Best Menu" textSize="xl" />
      <div className="grid grid-cols-4 gap-3">
        {[...Array(20)].map((x, i) => (
          <MenuCard />
        ))}
      </div>
    </div>
  );
}

export default LeftOrderPane;
