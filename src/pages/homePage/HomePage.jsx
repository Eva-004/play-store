import React from 'react';
import Banner from '../../Components/homePages/Banner';
import Stats from '../../Components/homePages/Stats';
import TrendingApps from '../../Components/homePages/TrendingApps';

const HomePage = () => {
    return (
        <div className='bg-base-200'>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default HomePage;