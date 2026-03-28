import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Core/Header/Header_New';
import SEO from '../Components/Shared/SEO';

const NotFound = () => {
    return (
        <>
            <SEO
                title="Page Not Found | CEO Sarthak Mittal"
                description="The page you are looking for does not exist. Return to Sarthak Mittal's homepage for insights on personal branding and leadership."
                keywords="404, page not found, sarthak mittal"
            />
            <Header />
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 mt-20">
                <h1 className="text-6xl font-bold text-[#D0A151] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-[#D0A151] text-white rounded-lg font-medium hover:bg-[#c99a4e] transition-colors"
                >
                    Return Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
