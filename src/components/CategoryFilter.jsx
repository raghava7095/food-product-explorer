import React from "react";

const categories = [
  { label: "All", value: "" },
  { label: "Pizzas", value: "pizzas" },
  { label: "Snacks", value: "snacks" },
  { label: "Beverages", value: "beverages" },
  { label: "Cereals", value: "breakfast-cereals" },
  { label: "Dairies", value: "dairies" },
  { label: "Biscuits", value: "biscuits" },
];

function CategoryFilter({ onCategorySelect }) {
  const handleChange = (e) => {
    onCategorySelect(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full md:items-center">
      {/* Category Filter Label */}
      <label className="text-lg font-semibold text-gray-800 dark:text-gray-800">
        Filter by Category  : 
      </label>
      
      <select
        onChange={handleChange}
        className="w-full sm:w-52 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm sm:text-base text-gray-800 dark:text-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out hover:shadow-md"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
