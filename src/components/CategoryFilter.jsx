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
    <select
      onChange={handleChange}
      className="p-2 border rounded-md bg-white shadow-sm"
    >
      {categories.map((category) => (
        <option key={category.value} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
