import '../Layout/header.css'
import Logo from '../../assets/logo.png'
import CloseBtn from '../../assets/home/close.png'
import {BiPhone} from 'react-icons/bi'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, getIsNavOpen] = useState(false);

  return (
    <div className='header'>
        <NavLink to='/'>
          <img src={Logo} alt="" />
        </NavLink>
        <span className='header-contact'>
         <BiPhone/>
          <a href="tel:01623 590463">+234 803 856 9395</a>
        </span>
      <div
          className="mobile-menu"
          onClick={() => getIsNavOpen((prev) => !prev)}
        >
          <IoMdMenu className="hamburger" />
        </div>
        <div className={isNavOpen ? "show-menu" : "hide-menu"}>
          <div className="close-btn" onClick={() => getIsNavOpen(false)}>
            <img src={CloseBtn} alt="" className='close' />
          </div>
          <ul className="mobile-nav">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>About Us</li>
            </NavLink>
            <NavLink to="/services">
              <li>Services</li>
            </NavLink>
            <NavLink to="/product">
            <li>Products</li>
          </NavLink>
            <NavLink to="/contact">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
        <ul className="desktop-nav">
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/services">
            <li>Services</li>
          </NavLink>
          <NavLink to="/product">
            <li>Products</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact Us</li>
          </NavLink>
        </ul>
    </div>
  )
}

export default Header