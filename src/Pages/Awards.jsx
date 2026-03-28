import React, { useState, useRef } from "react"; // 1. Import useRef

const Awards = () => {
    // 2. Create a ref to hold a reference to the top of the section
    const awardsSectionRef = useRef(null); 

    const acquiredBusinesses = [
        { id: 1, image: "/Awards/c1.png" },
        { id: 2, image: "/Awards/c2.png" },
        { id: 3, image: "/Awards/c3.png" },
        { id: 4, image: "/Awards/c4.png" },
        { id: 5, image: "/Awards/c5.png" },
        { id: 6, image: "/Awards/c6.png" },
        { id: 7, image: "/Awards/c7.png" },
        { id: 8, image: "/Awards/c8.png" },
        { id: 10, image: "/Awards/c10.png" },
        { id: 11, image: "/Awards/c11.png" },
        { id: 12, image: "/Awards/c12.png" },
        { id: 13, image: "/Awards/c13.png" },
        { id: 14, image: "/Awards/c14.png" },
        { id: 15, image: "/Awards/c15.png" },
        { id: 16, image: "/Awards/c16.png" },
        { id: 17, image: "/Awards/c17.jpg"},
        { id: 18, image: "/Awards/c18.jpg"},
    ];

    const [showAll, setShowAll] = useState(false);
    const initialItemCount = 8;
    const businessesToShow = showAll ? acquiredBusinesses : acquiredBusinesses.slice(0, initialItemCount);

    // 3. Create a handler function for the button click
    const handleToggleClick = () => {
        // If we are currently showing all and are about to hide them, scroll up
        if (showAll) {
            awardsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }
        // Toggle the state
        setShowAll(!showAll);
    };

    return (
        // 4. Attach the ref to the main section wrapper
        <div ref={awardsSectionRef} className="scroll-mt-20"> 
            <div>
                <img
                    src="/Core/Divider.png"
                    alt="Divider"
                />
            </div>

            <div className="flex flex-col items-center px-6 sm:px-20 w-full justify-center bg-cover bg-center relative pb-20">
                <div className="relative z-10 text-center">
                    <h1
                        className="text-transparent bg-clip-text bg-gradient-to-r 
                        from-[#D0A151] via-[#DCB56C] via-[#E6C584] 
                        via-[#DDB56D] to-[#CE9D4B] 
                        text-3xl sm:text-[50px] font-bold mt-10 uppercase mb-7"
                    >
                        Media, Honors AND AWARDS
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-8 gap-x-4 gap-30 mt-12 sm:mt-20 place-items-center">
                        {businessesToShow.map((business) => (
                            <div
                                key={business.id}
                                className="flex items-center justify-center rounded-xl p-4 transition-transform duration-300"
                            >
                                <img
                                    src={business.image}
                                    alt={`Business ${business.id}`}
                                    className="object-contain max-w-full"
                                />
                            </div>
                        ))}
                    </div>

                    {/* 5. Update the button logic */}
                    {acquiredBusinesses.length > initialItemCount && (
                        <div className="mt-12 text-center">
                            <button
                                onClick={handleToggleClick}
                                className="px-8 py-3 bg-gradient-to-r from-[#D0A151] to-[#CE9D4B] cursor-pointer text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-opacity duration-300"
                            >
                                {showAll ? 'View Less' : 'View More'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Awards;