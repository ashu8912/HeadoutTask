import React from 'react';
import Hamburger from "../UI/Hamburger/Hamburger";
import Logo from '../Logo/Logo';
import "./header.css"
import SearchBar from '../UI/SearchBar/SearchBar';
export default function Header() {
  return (
    <div className="header flex-container">
    <div className="flex-container flex-wrap w-30 align-center">
    <Hamburger/>
    <Logo/>
    </div>
    <div>
    <SearchBar/>
    </div>
    {/*
   
    <Menu/>*/}
    </div>
  );
}
