import React from 'react';

const TedxSection = () => {
    return (
        <div className='w-full'>
            {/* Desktop Image */}
            <div className='hidden sm:block w-full'>
                <img
                    src='/Blogs/founder-2.png'
                    alt='CEO Sarthak (Sarthak Mittal) TEDx Speaker - Thought Leadership Personal Branding'
                    className='w-full h-auto object-contain'
                />
            </div>

            {/* Mobile Image */}
            <div className='block sm:hidden w-full'>
                <img
                    src='/Blogs/founder-3.png'
                    alt='CEO Sarthak (Sarthak Mittal) TEDx Speaker - Executive Personal Brand Building'
                    className='w-full h-auto object-contain'
                />
            </div>
        </div>
    );
};

export default TedxSection;
