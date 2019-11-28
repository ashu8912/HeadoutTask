import React from 'react';
import "./SearchBar.css"
export default function SearchBar() {
  return (
    <div className="SearchBarContainer">
   
    <input type="text" placeholder="Search" className="search_bar"/>
    <button className="search_button"><i className="fa fa-search"></i></button>

    </div>
  );
}
