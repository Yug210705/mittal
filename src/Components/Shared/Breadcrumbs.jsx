import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Skip breadcrumbs on homepage
    if (pathnames.length === 0) return null;

    // Generate Schema.org BreadcrumbList
    const breadcrumbSchema = {
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ceosarthak.com"
            },
            ...pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                // Capitalize and format name
                const formattedName = name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                return {
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": formattedName,
                    "item": `https://ceosarthak.com${routeTo}`
                };
            })
        ]
    };

    return (
        <div className="bg-gray-50 py-3 px-4 sm:px-8 lg:px-16 border-b border-gray-200">
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    ...breadcrumbSchema
                })}</script>
            </Helmet>

            <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                    <li className="flex items-center">
                        <Link to="/" className="hover:text-[#D0A151] transition-colors flex items-center">
                            <Home size={16} />
                        </Link>
                    </li>
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const formattedName = name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                        return (
                            <li key={name} className="flex items-center">
                                <ChevronRight size={14} className="mx-2 text-gray-400" />
                                {isLast ? (
                                    <span className="font-semibold text-[#D0A151]" aria-current="page">
                                        {formattedName}
                                    </span>
                                ) : (
                                    <Link to={routeTo} className="hover:text-[#D0A151] transition-colors">
                                        {formattedName}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
