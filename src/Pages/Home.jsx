import React from 'react';
import Header from '../Components/Core/Header/Header';
import Landing from '../Components/Landing';

import SEO from '../Components/Shared/SEO';

const Home = () => {
    // Schema for the featured video "From Student to CEO"
    const featuredVideoSchema = {
        "@type": "VideoObject",
        "name": "From Student to CEO & Youth Leader",
        "description": "Sarthak Mittal™, an innovative entrepreneur from Indore, has risen from the challenges of his family's financial collapse to build a legacy of his own as a CEO and youth leader.",
        "thumbnailUrl": "https://ceosarthak.com/Podcasts/podcast17.png",
        "uploadDate": "2023-08-21T08:00:00+08:00", // Approximate date based on context or leave generic
        "contentUrl": "https://www.youtube.com/embed/zVlodSN6_9Y",
        "embedUrl": "https://www.youtube.com/embed/zVlodSN6_9Y",
        "publisher": {
            "@type": "Organization",
            "name": "Mittal Alliance Industries",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ceosarthak.com/favicon.png"
            }
        }
    };

    return (
        <div>
            <SEO
                title="CEO Sarthak | Sarthak Mittal - Founder Personal Brand Strategy"
                description="CEO Sarthak (Sarthak Mittal) is the Founder of Mittal Alliance Industries. Expert in Founder Personal Brand Strategy, Thought Leadership, and CEO Persona Development."
                keywords="CEO Personal Branding, Sarthak Mittal, Personal Incubator, Founder Strategy"
                schemas={[featuredVideoSchema]}
            />
            <div className="relative bg-[url('/images/landing.png')] bg-cover bg-center min-h-screen">

                <div className="absolute inset-0 bg-black/81"></div>


                <header className="relative z-20">
                    <Header />
                </header>
                <section className='relative z-10'>
                    <Landing />
                </section>




            </div>
        </div>
    );
};

export default Home;
