import React from 'react';

const Stats = () => {
    return (
        <div className=' bg-gradient-to-r from-purple-700 to-purple-500 py-20 text-white text-center'>
         <div className='w-11/12 mx-auto space-y-8'>
            <h2 className='font-bold text-4xl'>Trusted by Millions, Built for You</h2>
            <div className='flex justify-center gap-8'>
                <div className='space-y-4 px-10'>
                    <p>Total Downloads</p>
                    <h2 className='font-bold text-3xl'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div className='space-y-4 px-10'>
                    <p>Total Reviews</p>
                    <h2 className='font-bold text-3xl'>906K</h2>
                    <p>46% more than last month</p>
                </div>
                <div className='space-y-4 px-10'>
                    <p>Active Apps</p>
                    <h2 className='font-bold text-3xl'>132+</h2>
                    <p>31 more will Launch</p>
                </div>
                
            </div>
         </div>
        </div>
    );
};

export default Stats;