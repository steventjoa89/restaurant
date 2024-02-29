import React from "react";
import HeadingRow from "../HeadingRow";
import MenuCard from "../MenuCard";
import { Button } from "flowbite-react";

function LeftOrderPane() {
  return (
    <div className="col-span-6 md:col-span-4 overflow-y-scroll h-screen hide-scrollbar ml-3">
      <div className="mt-3"></div>
      <HeadingRow text="Special Discount Today" textSize="lg" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {[...Array(4)].map((x, i) => (
          <MenuCard />
        ))}
      </div>

      <div className="mt-3"></div>
      <HeadingRow text="Explore Our Best Menu" textSize="lg" />

      <div className="flex flex-nowrap overflow-x-auto ml-1 mb-3 hide-scrollbar">
        <Button
          color="dark"
          pill
          className="flex-shrink-0 my-2 mr-2 flex items-center justify-center"
          size="sm"
        >
          All
        </Button>
        <Button
          as="span"
          color="gray"
          pill
          className="flex-shrink-0 my-2 mr-2 flex items-center justify-center cursor-pointer"
          size="sm"
        >
          Main Course
        </Button>
        <Button
          as="span"
          color="gray"
          pill
          className="flex-shrink-0 my-2 mr-2 flex items-center justify-center cursor-pointer"
          size="sm"
        >
          Appetizer
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {[...Array(20)].map((x, i) => (
          <MenuCard />
        ))}
      </div>
    </div>
  );
}

export default LeftOrderPane;
