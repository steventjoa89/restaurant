import React, { useState } from "react";
import HeadingRow from "../HeadingRow";
import MenuCard from "../MenuCard";
import { useGetDishes } from "../../store/server/features/order/queries";
import Categories from "../Categories";

function LeftOrderPane() {
  const { isLoading, error, data } = useGetDishes();

  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(null);

  const handleCategoryClick = (category) => {
    // Show all data
    if (category === "All") {
      setActiveCategory("All");
      setFilteredData(null);
    }

    // Other than All
    if (category !== "All") {
      setActiveCategory(category);
      const filterData = data?.menu?.filter((dt) => dt.category === category);
      setFilteredData(filterData);
    }
  };

  return (
    <div className="col-span-6 md:col-span-4 overflow-y-scroll h-screen hide-scrollbar ml-3">
      {/* Discount Menu */}
      {data?.discountedMenu && (
        <>
          <div className="mt-3"></div>
          <HeadingRow text="Special Discount Today" textSize="lg" />
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {data?.discountedMenu?.map((mn, i) => (
              <MenuCard key={i} {...mn} isDiscountMenu={true} />
            ))}
          </div>
        </>
      )}

      <div className="mt-3"></div>
      <HeadingRow text="Explore Our Best Menu" textSize="lg" />

      {/* Categories */}
      <div className="flex flex-nowrap overflow-x-auto ml-1 mb-3 hide-scrollbar">
        <Categories
          categories={data?.categories}
          activeCategory={activeCategory}
          onClick={handleCategoryClick}
        />
      </div>

      {/* Menu */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredData &&
          filteredData.map((mn, i) => <MenuCard key={i} {...mn} />)}
        {!filteredData &&
          data?.menu?.map((mn, i) => <MenuCard key={i} {...mn} />)}
      </div>
    </div>
  );
}

export default LeftOrderPane;
