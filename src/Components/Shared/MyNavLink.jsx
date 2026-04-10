import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
       <NavLink to={to} className={({isActive})=> `${isActive ? 'bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent font-bold' : ''}`}>{children}</NavLink>
    );
};

export default MyNavLink;