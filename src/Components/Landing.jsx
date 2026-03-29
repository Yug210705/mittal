import React, { useState, useEffect } from 'react';

// --- POPUP COMPONENT (Unchanged) ---
// This component is correct as is.
const Popup = ({ onClose }) => {
    // A simple checkmark SVG component
    const CheckIcon = () => (
        <svg
            className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );

    // This function calls onClose before redirecting.
    const handleRedirect = () => {
        onClose(); // Sets the session flag before navigating
        window.location.href = '/contact';
    };

    return (
        // Overlay
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/20 flex justify-center items-center z-50 p-4"
            onClick={onClose} // Close popup when clicking the overlay
        >
            {/* Modal Box */}
            <div
                className="bg-white rounded-xl p-8 sm:p-10 text-center relative max-w-lg w-full transform transition-all"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                    aria-label="Close popup"
                >
                    ✕
                </button>

                {/* Main Heading */}
                <h2 className="text-black font-extrabold text-3xl sm:text-3xl uppercase tracking-wide">
                    BOOK A FREE NETWORKING CALL !
                </h2>

                {/* Subheading */}
                <p className="text-slate-800 font-semibold text-lg sm:text-xl uppercase mt-1 tracking-wider">
                    {/* With Our Branding Expert */}
                </p>

                {/* Description */}
                <p className="text-gray-600 mt-4 text-sm sm:text-base">
                    It’s not about business, it’s about creating a meaningful connection. Let’s connect and build a strong relationship.
                </p>

                {/* Features List */}
                <div className="mt-6 space-y-2 sm:space-y-0 sm:flex sm:justify-around sm:items-center text-gray-800 font-medium">
                    <div className="flex items-center justify-center">
                        <CheckIcon />
                        <span>30-minute business audit</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <CheckIcon />
                        <span>Brand audit</span>
                    </div>
                    {/* <div className="flex items-center justify-center">
                        <CheckIcon />
                        <span>Strategy roadmap</span>
                    </div> */}
                </div>

                {/* Call to Action Button */}
                <button
                    onClick={() => window.open("https://calendar.app.google/7NKe1NBEGwAHouVcA", "_blank")}
                    className="mt-8 bg-[#D6A95D] text-white font-bold cursor-pointer py-3 px-10 rounded-lg uppercase tracking-wider hover:bg-[#c99a4e] transition-colors text-sm sm:text-base"
                >
                    Book a Free Call
                </button>

            </div>
        </div>
    );
};

// --- LANDING COMPONENT (MODIFIED) ---
const Landing = () => {


    const logos = [
        { img: '/Landing/Logo/l1.png' }, { img: '/Landing/Logo/l2.png' },
        { img: '/Landing/Logo/l3.png' }, { img: '/Landing/Logo/l4.png' },
        { img: '/Landing/Logo/l5.png' }, { img: '/Landing/Logo/l6.png' },
        { img: '/Landing/Logo/l7.png' }, { img: '/Landing/Logo/l8.png' },
        { img: '/Landing/Logo/l9.png' }, { img: '/Landing/Logo/l10.png' },
        { img: '/Landing/Logo/l11.png' }, { img: '/Landing/Logo/l12.png' },
        { img: '/Landing/Logo/l13.png' }, { img: '/Landing/Logo/l14.png' },
        { img: '/Landing/Logo/l15.png' },
    ];

    // ... (rest of your component code is unchanged)

    return (
        <div className='w-full h-full space-y-10 py-28'>

            {/* --- Conditionally render the popup --- */}
            {/* Popup removed as per request */}

            {/* --- HEADER AND TEXT SECTIONS (All Center Aligned) --- */}
            <div className='flex flex-col h-full w-full justify-center items-center'>
                <h1 className='uppercase flex sm:flex-row flex-col sm:space-x-5 justify-center items-center text-center text-[55px] sm:text-[50px] text-[#CE9D4B]'>
                    <span className='font-bold'>CEO SARTHAK MITTAL<sup>™</sup></span>
                </h1>
                <span className="uppercase text-[20px] text-center sm:text-[40px] font-bold bg-gradient-to-r from-[#D0A151] via-[#E6C584] via-[#CE9D4B] to-[#E2BE7A] bg-clip-text text-transparent mt-5 sm:mt-0">
                    WORLD-CLASS PERSONAL BRANDS WITH PURPOSE.
                </span>
            </div>
            <div className='flex gap-3 flex-col text-[17px] text-center sm:text-[30px] w-full justify-center items-center text-white'>
                <span>One of World's Best Personal Branding Consultant<br /> Trusted by clients featured on world-leading platforms.</span>
            </div>

            {/* --- "MY WORK" LOGO SECTION (Unchanged) --- */}
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>

                </div>
                <div className="overflow-x-hidden">
                    <div className="py-2 animate-marquee whitespace-nowrap">
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`orig-1-${index}`} src={logo.img} alt={`Sarthak Mittal Client - Trusted by CEO Sarthak - ${index}`} className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-${index}`} src={logo.img} alt={`Sarthak Mittal Personal Branding Client - ${index}`} className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-2-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-3-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                        {logos.slice(0, 11).map((logo, index) => (
                            <img key={`dup-1-4-${index}`} src={logo.img} alt="" className="inline-block w-12 sm:w-20 h-auto object-contain mx-4" />
                        ))}
                    </div>
                </div>
                {/* <div className="overflow-x-hidden">
                    <div className="py-2 animate-marquee whitespace-nowrap">
                        {logos.slice(11).map((logo, index) => (
                            <img key={`orig-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-2-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-3-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-4-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                        {logos.slice(11).map((logo, index) => (
                            <img key={`dup-2-4-${index}`} src={logo.img} alt=""
                                className={`inline-block h-auto object-contain mx-4 ${index % 4 === 0 ? 'w-10 sm:w-24' : 'w-20'}`}
                            />
                        ))}
                    </div>
                </div> */}
            </div>

            {/* --- "TRUSTED BY" SECTION (Unchanged) --- */}
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-lg sm:text-xl'>TRUSTED FOR</span>
                </div>
                <div className="text-center text-sm sm:text-0.5xl text-white px-4">
                    <span>Personal Branding | Corporate Identity | Memorable Customer Experiences</span>
                </div>
            </div>
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-lg sm:text-xl'>Clients</span>
                </div>
                <div className="text-center text-sm sm:text-0.5xl text-white px-4">
                    <span>Visionary Businesses, Founders, Celebrities, Influencers, Authors & Consultants</span>
                </div>
            </div>
            <div className='w-full space-y-4'>
                <div className='w-full flex justify-center uppercase'>
                    <span className='text-[#CE9D4B] text-lg sm:text-xl'>Global Presence</span>
                </div>
                <div className="text-center text-sm sm:text-0.5xl text-white px-4">
                    <span>Registered in USA • UK • India</span>
                </div>
            </div>
        </div>
    );
};

export default Landing;