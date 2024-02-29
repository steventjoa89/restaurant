import { Button } from "flowbite-react";
import React from "react";

function Categories({ categories, activeCategory, onClick }) {
  return (
    <>
      <Button
        as='span'
        color={`${activeCategory === "All" ? "dark" : "gray"}`}
        pill
        className="flex-shrink-0 my-2 mr-2 flex items-center justify-center cursor-pointer"
        size="sm"
        onClick={() => onClick("All")}
      >
        All
      </Button>
      {categories?.map((category, i) => (
        <Button
          key={i}
          as="span"
          // color="gray"
          color={`${activeCategory === category ? "dark" : "gray"}`}
          pill
          className="flex-shrink-0 my-2 mr-2 flex items-center justify-center cursor-pointer"
          size="sm"
          onClick={() => onClick(category)}
        >
          {category}
        </Button>
      ))}
    </>
  );
}

export default Categories;
