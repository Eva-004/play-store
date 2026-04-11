import React, { createContext, useState } from 'react';

export const InstalledAppContext = createContext();

const InstallAppsProvider = ({children}) => {
     const [installedApps, setInstalledApps] = useState([])
         
     const data ={
        setInstalledApps,
        installedApps
     }
    return (
        <InstalledAppContext.Provider value={data}>{children}</InstalledAppContext.Provider>
    );
};

export default InstallAppsProvider;