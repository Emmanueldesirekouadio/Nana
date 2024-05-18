import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='/logo.png' alt='Nana_Makeup' />
      </div>
      <div className='header__center'>
        <ul className='header__nav'>
          <li className='header__nav-item'>
            <a className='header__nav-link' href='/'>
              Choose Your Appointment
            </a>
          </li>
          <li className='header__nav-item'>
            <a className='header__nav-link' href='/'>
              Your Info
            </a>
          </li>
          <li className='header__nav-item'>
            <a className='header__nav-link' href='/'>
              Confirmation
            </a>
          </li>
        </ul>
      </div>
      <div className='header__right'>
        <a className='header__nav-link header__login' href='/'>
          Login
        </a>
      </div>
    </div>
  );
}

export default Header;
