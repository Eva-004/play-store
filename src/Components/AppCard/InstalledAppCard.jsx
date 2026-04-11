import React, { useContext } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { InstalledAppContext } from '../context/InstallAppsProvider';
import { toast } from 'react-toastify';

const InstalledAppCard = ({app}) => {
    console.log(app)
    const { installedApps,setInstalledApps } = useContext(InstalledAppContext)
    const filteredApps = installedApps.filter(item => item.id !== app.id);
    const handleUnInstall =()=>{
        setInstalledApps(filteredApps);
        toast.warning(`${app.title} uninstall successfully!`)
    }
    return (
        <div className='card shadow-sm p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-10 '>
             <img src={app.image} alt="" className='h-20 rounded-2xl' />
             <div className='space-y-4'>
                <h3 className='#text-[#001931] font-bold text-xl'>{app.title}</h3>
                <div className='flex gap-4 items-center '>
                    <p className='text-[#00D390] flex gap-1 items-center'><FaDownload/> {app.downloads}</p>
                    <p className='text-[#FF8811] flex gap-1 items-center'><FaStar/> {app.ratingAvg}</p>
                    <p className='text-[#627382]'>{app.size} MB</p>
                </div>
             </div>
            </div>
            <div>
                <div onClick={handleUnInstall} className="btn btn-success text-white font-bold">UnInstall</div>
            </div>
            </div>
        </div>
    );
};

export default InstalledAppCard;