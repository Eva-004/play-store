import React from 'react';
import AppCard from '../../Components/AppCard/AppCard';
import useApps from '../../hocks/useApps';
import { HashLoader } from 'react-spinners';

const Apps = () => {
     const {apps,loading} = useApps();
    return (
        <div className=' py-20 bg-base-200'>
            <div className='container mx-auto space-y-8'>
                <div className='text-center space-y-4'>
                    <h2 className='font-bold text-3xl text-[#001931]'>Our All Applications</h2>
                    <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between '>
                    <h3 className='font-bold text-xl text-[#001931]'>({apps.length}) Apps Found</h3>
                    <label className="input bg-base-200">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search App" />
                    </label>
                </div>
                <div>
                  {
                loading ? <div className='flex justify-center items-center'><HashLoader color='#9F62F2' /></div> :
                 <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        apps.map((app,ind)=> <AppCard key={ind} app={app}></AppCard>)
                    }
                </div>
             }
                </div>
            </div>
        </div>
    );
};

export default Apps;