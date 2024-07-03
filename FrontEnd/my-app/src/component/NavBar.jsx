import React from 'react'
import Logo from '../image/th-logo.png'
import { FiSearch } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
   <nav className='flex items-center flex-row p-2'>
   <div className="logo">
    <NavLink to='/'>

    <img src={Logo} className='w-40 ml-20'/>
    </NavLink>
   </div>
   <div className="nav-menu flex p-2 ml-10">
    <ul className=' flex items-center justify-between gap-5 text-[#181818]'>
      <NavLink to='/programming'>
        <li className='cursor-pointer hover:text-[#108a00] font-semibold' >Programming & Tech</li>
      </NavLink >
      <NavLink to='/graphics'>
        <li className='cursor-pointer hover:text-[#108a00] font-semibold'>Graphics & Design</li>
      </NavLink>
      <NavLink to='/digital-marketting'>
        <li className='cursor-pointer hover:text-[#108a00] font-semibold'>Digital Marketing</li>
        </NavLink> 
    </ul>
   </div>
   <div className="search-bar flex items-center ml-24 bg-[#fff] p-1.5 rounded-xl border ">
  <FiSearch size={18} className='cursor-pointer text-[#181818]'/>
<input type='search' placeholder='Search' className='search-inp ml-2 outline-none '></input>
   </div>
   <div className="login ml-20">
    <NavLink to='/login'>
    <button className='btn h-9 w-16 rounded-xl text-[#181818] hover:text-[#108a00] font-semibold '>Login</button>
    </NavLink>
   </div>
   <div className="sign-up ml-5">
    <NavLink to ='/sign-up-role'>
    <button className='btn bg-[#108a00] text-[#fff] h-10 w-20 rounded-xl font-semibold'>Sign Up</button>

    </NavLink>
   </div>
   </nav>
  )
}

export default NavBar