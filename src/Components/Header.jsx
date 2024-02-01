import { Link, NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo">
        <Link to="/" className="brand">WFY</Link>
        </div> 

        <div className="nav nav-pills">
          
        <NavLink to="/"
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Home</NavLink>
        <NavLink to="/about" 
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >About</NavLink>
        <NavLink to="/products" 
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Products</NavLink>
        <NavLink to="/posts"
        className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
        >Posts</NavLink>
        </div>

      </div>
    </div>
    </header>
  );
};

export default Header;