import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../hocks/useApps';
import { HashLoader } from 'react-spinners';
import { FaDownload, FaStar, FaThumbsUp } from 'react-icons/fa';

const AppDetails = () => {
    const {apps , loading} = useApps();
    const {id} = useParams();
    const expectedApp = apps.find(item => item.id === Number(id))
    console.log(expectedApp)
    return (
        <div className='bg-base-200 py-20'>
            <div className='container mx-auto'>
             {
                loading ? <div className='flex justify-center items-center'><HashLoader color='#9F62F2' /></div> : 
                <div>
                 <div className='flex gap-10'>
                    <img src={expectedApp.image} alt={expectedApp.title} className='h-70 p-8 bg-base-100' />
                   <div>
                  <div>
                   <h2 className='text-[#001931] text-3xl'>{expectedApp.title}</h2>
                   <p>Developed By <span>{expectedApp.companyName}</span></p>
                  </div>
                  <div className="divider w-175"></div>
                   <div className='flex gap-6 items-center'>
                    <div className='space-y-2'>
                        <FaDownload color='#54CF68'/>
                        <p className='text-[#001931]'>DownLoads</p>
                        <h3 className='text-[#001931] text-xl font-bold'>{expectedApp.downloads}</h3>
                    </div>
                    <div className='space-y-2'>
                        <FaStar color='#FF8811'/>
                        <p className='text-[#001931]'>Average Rating</p>
                        <h3 className='text-[#001931] text-xl font-bold'>{expectedApp.ratingAvg}</h3>
                    </div>
                    <div className='space-y-2'>
                        <FaThumbsUp color='#9F62F2'/>
                        <p className='text-[#001931]'>Total Reviews</p>
                        <h3 className='text-[#001931] text-xl font-bold'>{expectedApp.reviews}</h3>
                    </div>
                   </div>
                   <button className='btn bg-[#00D390] text-white mt-7'>Install Now ({expectedApp.size} MB)</button>
                  </div>
                  
                 </div>
                 <div className="divider mt-10"></div>
                 
                </div>
             }
            
            </div>
        </div>
    );
};

export default AppDetails;