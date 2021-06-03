import React from 'react'

const SearchField = ({ handleSearch }) => {
    return (
    <div className="search-container">
        <input onChange={handleSearch} id="search" type="text" placeholder="Search Templates" className="form-control"/>
        <i className="fas fa-search icon"></i>
    </div>
    );
}

export default SearchField;