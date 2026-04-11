import React, { useContext } from 'react';
import { InstalledAppContext } from '../../Components/context/InstallAppsProvider';
import InstalledAppCard from '../../Components/AppCard/InstalledAppCard';
import { FaShoppingCart } from 'react-icons/fa';

const Installation = () => {
    const { installedApps, setInstalledApps } = useContext(InstalledAppContext)
      
    const handleSorting =(sortingType)=>{
      if(sortingType === 'rating'){
            const sortedData = [...installedApps].sort((a,b)=> a.ratingAvg - b.ratingAvg);
            setInstalledApps(sortedData)
        }else if(sortingType === 'size'){
            const sortedData = [...installedApps].sort((a,b)=> a.size - b.size);
            setInstalledApps(sortedData)
        }
    }
    

    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='container mx-auto py-18 space-y-4'>
                <div className='text-center space-y-4'>
                    <h2 className='text-[#001931] font-bold text-3xl'>Your Installed Apps</h2>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between'>
                    <h3 className='text-[#001931] font-bold'>{installedApps.length} Apps Found</h3>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 text-[#627382]">Sort By ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={()=> handleSorting('rating')}><button >Rating</button></li>
                            <li onClick={()=> handleSorting('size')}><button>Size</button></li>
                        </ul>
                    </div>
                </div>
               { installedApps.length === 0 ? <div className='text-center flex flex-col items-center space-y-4 mt-10'>
                <FaShoppingCart className='text-6xl'/>
                 <h2 className='text-[#001931] font-bold text-2xl'>No Apps Installed Yet</h2>
               </div> :
                
                <div className='space-y-4'>
                 {
                    installedApps.map((app, ind) => <InstalledAppCard app={app} key={ind}></InstalledAppCard>)
                }
               </div>}
            </div>
        </div>
    );
};

export default Installation;