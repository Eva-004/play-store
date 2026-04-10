import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <Link to={`/app/${app.id}`} className="card bg-base-100 shadow-sm">
            <figure className='pt-2'>
                <img
                    src={app.image}
                    alt={app.title} className='h-40 rounded-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">{app.title}</h2>
                <div className="card-actions justify-between mt-4">
                    <div className="badge badge-soft badge-success font-bold"><FaDownload/>{app.downloads}</div>
                    <div className="badge badge-soft badge-warning font-bold"><FaStar/>{app.ratingAvg}</div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;