import React from 'react';
import googleplay from '../../assets/images/googleplay.jpg'
import appIcon from '../../assets/images/appIcon.png'
import hero from '../../assets/images/hero.png'

const Banner = () => {
    return (
       <div className='min-h-screen bg-base-200'>
         <div className='container mx-auto'>
            <div className='pt-20 pb-10'>
                <div className='text-center space-y-4'>
                    <h2 className='font-bold text-5xl text-[#001931]'>We Build<br/> <span className='bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent'>Productive</span> Apps</h2>
                    <p className='text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='flex items-center gap-4 justify-center mt-4'>
                    <div className="btn text-[rgb(0,25,49)] font-semibold"><img src={googleplay} alt="" className='h-8' />Google Play</div>
                    <div className="btn text-[#001931] font-semibold"><img src={appIcon} alt="" className='h-6' />App Store</div>
                </div>
            </div>
            <div className='flex justify-center'>
                    <img src={hero} alt="" className='h-100' />
            </div>
        </div>
       </div>
    );
};

export default Banner;