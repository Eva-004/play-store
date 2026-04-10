import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/Shared/NavBar';
import Footer from '../Components/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
           <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;