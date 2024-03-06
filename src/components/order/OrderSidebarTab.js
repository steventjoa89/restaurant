import React from "react";
import { formatTabName } from "../../utils/stringUtils";

function OrderSidebarTab({ tabNames = [], activeTab = 0, handleTabClick }) {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-3">
      {tabNames.map((tabName, index) => (
        <li
          key={index}
          className={`me-2 ${index !== activeTab && "cursor-pointer"}`}
          onClick={() => handleTabClick(index)}
        >
          <div
            className={`inline-block p-4 rounded-t-lg ${
              index === activeTab
                ? "text-yellow-400 bg-gray-100"
                : "hover:text-gray-600 hover:bg-gray-50"
            } ${index === activeTab && "active"}`}
          >
            {formatTabName(tabName)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OrderSidebarTab;
