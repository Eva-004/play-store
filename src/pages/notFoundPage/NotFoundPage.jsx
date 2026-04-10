import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
            
            <h1 className="text-7xl font-extrabold text-gray-800">404</h1>

            <p className="mt-4 text-lg text-gray-600 text-center">
                Oops! The page you're looking for doesn't exist.
            </p>

            <div className="divider w-full my-6"></div>

            <Link 
                to="/" 
                className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
                Go Back Home
            </Link>

        </div>
    );
};

export default NotFoundPage;