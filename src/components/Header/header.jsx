import React from 'react';
import Hamburger from "../UI/Hamburger/Hamburger";
import Logo from '../Logo/Logo';
import "./header.css"
import SearchBar from '../UI/SearchBar/SearchBar';
import Menu from '../Menu/Menu';
export default function Header() {
  return (
    <div className="header flex-container align-center">
    <div className="flex-container flex-wrap w-30 align-center">
    <Hamburger/>
    <Logo/>
    </div>
  
    <SearchBar/>
    <div className="w-20"></div>
    <Menu/>
    {/*
   
   */}
    </div>
  );
}
