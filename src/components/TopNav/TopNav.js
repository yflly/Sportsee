import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./TopNav.css";

function TopNav() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <nav className="navBar">
        <Link to="/" title="Homepage" className="linkNavBar">
          Accueil
        </Link>

        <Link to="/" title="Profil" className="linkNavBar">
          Profil
        </Link>

        <Link to="/" title="Settings" className="linkNavBar">
          Réglages
        </Link>

        <Link to="/" title="Community" className="linkNavBar">
          Communauté
        </Link>
      </nav>
    </header>
  );
}

export default TopNav;
