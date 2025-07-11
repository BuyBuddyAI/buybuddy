import { useState } from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full sm:w-64 p-4 bg-gray-50 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>

      {/* Category */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="headphones">Headphones</option>
          <option value="watch">Watch</option>
          <option value="speaker">Speaker</option>
          <option value="stand">Stand</option>
        </select>
      </div>

      {/* Sort */}
      <div className="mb-2">
        <label className="block font-medium mb-1">Sort by Price</label>
        <select
          value={filters.sort}
          onChange={(e) => handleChange("sort", e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">None</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
