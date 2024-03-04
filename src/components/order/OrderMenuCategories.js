import React from "react";
import ButtonCategory from "../ButtonCategoryOutline";

function OrderMenuCategories({ categories, activeCategory, onClick }) {
  return (
    <div className="col-span-full">
      <div className="flex flex-nowrap overflow-x-auto ml-1 mb-3">
        <ButtonCategory
          text="All"
          active={activeCategory === "All" ? true : false}
          onClick={() => onClick("All")}
        />
        {categories?.map((category, i) => (
          <ButtonCategory
            key={i}
            text={category}
            active={activeCategory === category ? true : false}
            onClick={() => onClick(category)}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderMenuCategories;
