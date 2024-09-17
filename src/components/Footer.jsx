import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-sunnyLightGreen">
      <NavLink to="/"><h2 className="font-Barlow text-4xl font-black tracking-wider text-sunnyDarkDesaturatedCyan">sunnyside</h2></NavLink>
      <div>
        <ul className="flex justify-between gap-6 py-8">
          <li><NavLink className="font-Barlow text-lg font-semibold tracking-wider text-sunnyDarkModerateCyan" to="/projects">Projects</NavLink></li>
          <li><NavLink className="font-Barlow text-lg font-semibold tracking-wider text-sunnyDarkModerateCyan" to="contact">Contact</NavLink></li>
        </ul>
      </div>
      <div className="flex w-full items-center justify-center">
        <ul className="flex justify-between gap- pb-6 pt-10 w-1/4 md:w-2/12">
          <li><NavLink><i className="text-2xl text-sunnyDarkModerateCyan fa-brands fa-square-facebook"></i></NavLink></li>
          <li><NavLink><i className="text-2xl text-sunnyDarkModerateCyan fa-brands fa-instagram"></i></NavLink></li>
          <li><NavLink><i className="text-2xl text-sunnyDarkModerateCyan fa-brands fa-twitter"></i></NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
