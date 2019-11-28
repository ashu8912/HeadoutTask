import React from 'react';

export default function SearchBar() {
  return (
    <div>
    <div className="inline-block">
    <input type="text" placeholder="Search"/>
    <button><i className="fa fa-search"></i></button>
    </div>
    </div>
  );
}
