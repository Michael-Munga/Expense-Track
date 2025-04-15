import React from "react";
import "./SearchBar.css";

export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Expenses"
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
}
