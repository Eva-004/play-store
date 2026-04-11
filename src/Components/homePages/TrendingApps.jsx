import React from 'react';
import { HashLoader } from 'react-spinners';
import AppCard from '../AppCard/AppCard';
import useApps from '../../hocks/useApps';
import { Link } from 'react-router';

const TrendingApps = () => {
    const {apps,loading} = useApps();
   
    return (
        <div className='w-11/12mx-auto py-20'>
            <div className='text-center space-y-2 pb-10'>
                <h2 className='font-bold text-3xl text-[#001931]'>Trending Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div>
             {
                loading ? <div className='flex justify-center items-center'><HashLoader color='#9F62F2' /></div> :
                 <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                    {
                        apps.slice(0,8).map((app,ind)=> <AppCard key={ind} app={app}></AppCard>)
                    }
                </div>
             }
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Link to='/app'>
                  <div className="btn text-white bg-gradient-to-r from-purple-700 to-purple-500">View All</div>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;