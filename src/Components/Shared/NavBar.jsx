import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/images/logo.png'
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './MyNavLink';

const NavBar = () => {
    const links = <>
    <li><MyNavLink to='/'>Home</MyNavLink></li>
    <li><MyNavLink to='/app'>Apps</MyNavLink></li>
    <li><MyNavLink to='/installation'>Installation</MyNavLink></li>
    </>
    return (
        <nav className=' bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className='flex gap-1 items-center'>
                <img src={logo} alt="logo" className='h-10' />
                <h1 className='font-bold bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent'>HERO.IO</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                     {links}
                </ul>
            </div>
            <div className="navbar-end">
               <button className='btn bg-gradient-to-r from-purple-700 to-purple-500 text-white font-bold flex gap-1 items-center'><FaGithub /> Contribute</button>
            </div>
        </div>
        </nav>
    );
};

export default NavBar;