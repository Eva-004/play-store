import React, { useContext } from 'react';
import useApps from '../../hocks/useApps';
import { InstalledAppContext } from '../../Components/context/InstallAppsProvider';
import { HashLoader } from 'react-spinners';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const DashBoard = ({ isAnimationActive = true }) => {
    const { apps, loading } = useApps();
    const { installedApps } = useContext(InstalledAppContext)
    const unInstalledApps = apps.length - installedApps.length;
    const data = [
        { name: 'Installed App', value: installedApps.length, fill: '#0088FE' },
         { name: 'UnInstalled App', value: unInstalledApps, fill: '#FF8042' },
    ]
    return (
        <div className='min-h-[screen] bg-base-200'>
            <div className='container mx-auto py-12 space-y-4'>
                <h2 className='font-bold text-2xl text-center text-[#001931]'>Installed App Char</h2>
                {
                    loading ? <div className='flex justify-center items-center'><HashLoader color='#9F62F2' /></div> :
                        <div className='flex justify-center items-center'>
                            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={isAnimationActive}
                                />
                                <Legend/>
                                <Tooltip/>
                            </PieChart>
                        </div>
                }
            </div>
        </div>
    );
};

export default DashBoard;