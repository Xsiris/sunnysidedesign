import React from 'react'
import logo from '../img/logo.svg'
import hamburger from '../img/icon-hamburger.svg'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    const onMenuOpenToggle = () => {
        console.log("Toggling menu");
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
    }
  return (
    <div className="bg-sunnySkyBlue flex justify-between items-center p-8">
      <NavLink to="/"> <img src={logo} alt="logo" /> </NavLink>
      {window.innerWidth < 768 ? (<img onClick={onMenuOpenToggle} className="hover:cursor-pointer" src={hamburger} alt="hamburger" />) : (
        <ul className="flex gap-8">
            <li className="font-Barlow text-white font-semibold px-4 py-2 hover:bg-white hover:text-sunnyVeryDarkDesaturatedBlue hover:rounded-full"><NavLink to={'/projects'}>Projects</NavLink></li>
            <li className="font-Barlow text-white font-semibold px-4 py-2 hover:bg-white hover:text-sunnyVeryDarkDesaturatedBlue hover:rounded-full"><NavLink to={'/contact'}>Contact</NavLink></li>
        </ul>
      )}
      <div id="menu" className="hidden z-10 absolute w-3/4 top-16 left-1/2 transform -translate-x-1/2 bg-white flex flex-col items-center justify-center p-6 rounded">
        <div>
            <ul>
                <li className="mb-2 font-Barlow font-semibold text-lg tracking-wider text-sunnyDarkGrayishBlue px-4 py-2 hover:bg-sunnyYellow hover:rounded-full hover:text-black">
                    <NavLink onClick={onMenuOpenToggle} to="/projects">Projects</NavLink>
                </li>
                <li className="font-Barlow font-semibold text-lg tracking-wider text-sunnyDarkGrayishBlue px-4 py-2 hover:bg-sunnyYellow hover:rounded-full hover:text-black">
                    <NavLink onClick={onMenuOpenToggle} to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
