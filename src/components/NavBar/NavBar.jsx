
import React from 'react';
import { Link } from 'react-router-dom';
import style from "./navBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={`${style.hamada} navbar navbar-expand-lg py-4 `}>
        <div className="container">
          <Link  className= {`navbar-brand ${style.navLinkColor} ${style.navBrand} `}  to="">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link className={`nav-link px-3  ${style.navLinkColor}` } to={"about"}> ABOUT </Link>
              <Link className={`nav-link px-3  ${style.navLinkColor}`} to={"portfolio"}> PORTFOLIO </Link>
              <Link className={`nav-link px-3  ${style.navLinkColor}`} to={"contact"}> CONTACT </Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
