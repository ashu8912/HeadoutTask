import React from 'react';
import Hamburger from "../UI/Hamburger/Hamburger";
import Logo from '../Logo/Logo';
import "./header.css"
export default function Header() {
  return (
    <div className="header">
    <Hamburger/>
    <Logo/>
    {/*
    <SearchBar/>
    <Menu/>*/}
    </div>
  );
}
