import React from 'react';
import logo from '../../assets/images/logo.png'
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer sm:footer-horizontal bg-neutral text-neutral-content  py-4 '>
            <footer className="  w-11/12 mx-auto  items-center">
                <div className='flex justify-between items-center gap-200'>
                    <div className='flex items-center gap-1'>
                        <img src={logo} alt="footer logo" className='h-10' />
                        <h2 className='text-white font-bold'>HERO.IO</h2>
                    </div>
                    <div className='space-y-4'>
                        <h2 className='text-xl font-medium text-white'>Social Links</h2>
                        <div className='flex justify-between items-center gap-4'>
                        <a className='bg-white p-2 text-neutral rounded-full'><FaXTwitter  /></a>
                        <a className='bg-white p-2 text-neutral rounded-full'><FaLinkedinIn /></a>
                        <a className='bg-white p-2 text-neutral rounded-full'><FaFacebookF /></a>
                        </div>
                    </div>
                    
                </div>
               <div className="divider w-full text-white mx-auto"></div>
               <div className='mx-auto'>Copyright &copy; 2025 - All right reserved</div>
            </footer>
        </div>
    );
};

export default Footer;