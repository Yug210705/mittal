import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, type = 'website', image = '/favicon.png', schemas = [] }) => {
    const siteTitle = "CEO Sarthak | Sarthak Mittal - Founder Personal Brand Strategy";
    const finalTitle = title ? `${title} | CEO Sarthak (Sarthak Mittal)` : siteTitle;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={window.location.href} />
            <meta property="og:site_name" content="CEO Sarthak Mittal" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "WebSite",
                            "name": "CEO Sarthak Mittal",
                            "url": "https://ceosarthak.com",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://ceosarthak.com/?s={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        },
                        {
                            "@type": "Person",
                            "name": "Sarthak Mittal",
                            "url": "https://ceosarthak.com",
                            "sameAs": [
                                "https://www.linkedin.com/in/sarthak-cxo/",
                                "https://www.instagram.com/ceosaarthakmittal/?igsh=ZGV4MzR6aXFmanAy#",
                                "https://x.com/JokemonY",
                                "https://www.youtube.com/@mittalspeaks",
                                "https://www.xing.com/profile/Sarthak_MittalCEO",
                                "https://open.spotify.com/show/2xylhP1PG90whlBakdpJzv"
                            ],
                            "jobTitle": "CEO & Founder",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Mittal Alliance Industries",
                                "url": "https://mittallianceindustries.com",
                                "founder": {
                                    "@type": "Person",
                                    "name": "Sarthak Mittal"
                                },
                                "logo": "https://ceosarthak.com/favicon.png",
                                "sameAs": [
                                    "https://mittallianceindustries.com"
                                ]
                            },
                            "description": "CEO Sarthak (Sarthak Mittal) is the Founder of Mittal Alliance Industries and an expert in Personal Brand Strategy."
                        },
                        ...schemas
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
