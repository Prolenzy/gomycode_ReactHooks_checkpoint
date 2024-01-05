import React from "react";
import "./../App.css";

const Filter = ({ filterTitle, setFilterTitle, filterRate, setFilterRate }) => {
    return (
        <div className="container">
            <input
            type="text"
            className="filter-input"
            placeholder="Filter by title"
            value={filterTitle}
            onChange={(e) => setFilterTitle(e.target.value)}
            />
            <input
            type="number"
            className="filter-input filter-rate-input" 
            placeholder="Filter by rate"
            value={filterRate}
            onChange={(e) => setFilterRate(e.target.value)}
            />
        </div>
    );
};

export default Filter;