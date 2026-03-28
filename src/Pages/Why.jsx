import React from 'react';
import { FaStar, FaChartLine, FaSmile, FaBullhorn, FaKey, FaUsers, FaLandmark } from 'react-icons/fa';

// Card Component for individual benefits
const BenefitCard = ({ icon, title, children }) => (
  // We add width classes here so the flex container knows how large each card should be.
  <div className="w-full md:w-[48%] lg:w-[31%] bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"> {/* <-- CHANGE HERE */}
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-[#D0A151]">
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
    <p className="mt-4 text-base text-gray-600">{children}</p>
  </div>
);

// Main Section Component
const WhyPersonalBrand = () => {
  const benefits = [
    {
      icon: <FaStar size={24} />,
      title: "Be Truly Unique",
      description: "What truly sets your business apart from millions of others? YOU are the ultimate differentiator.",
    },
    {
      icon: <FaChartLine size={24} />,
      title: "Accelerate Sales",
      description: "When clients know, like, and trust you, closing deals becomes a natural and seamless process.",
    },
    {
      icon: <FaSmile size={24} />,
      title: "Elevate Client Experience",
      description: "Drive organic growth as clients rate you not just on your service, but on the memorable experiences you provide.",
    },
    {
      icon: <FaBullhorn size={24} />,
      title: "Maximize Visibility",
      description: "Build a powerful presence on social media and beyond, where attention is the new currency for success.",
    },
    {
      icon: <FaKey size={24} />,
      title: "Unlock Opportunities",
      description: "Become visible enough to attract speaking engagements, podcast features, and even prestigious TEDx invitations.",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Attract Top Talent",
      description: "Inspire the best in the industry to join your vision, drawn by a recognized and respected leader.",
    },
    {
      icon: <FaLandmark size={24} />,
      title: "Build a Lasting Legacy",
      description: "Create a brand and a business that will be remembered and respected long after current trends fade.",
    },
  ];

  return (
    <section id="why-brand" className=" py-16 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 uppercase text-5xl font-[700] text-[#D0A151]">
            Why Build a Personal Brand?
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            In today's crowded market, <strong>personal branding for founders</strong> isn't just a benefit—it's a necessity.
            It's the core of your <strong>CEO persona development</strong> and the key to unlocking sustainable growth with our <strong>founder personal brand strategy</strong>.
          </p>
        </div>

        {/* We change the container from grid to flex and tell it to center the items */}
        <div className="mt-16 flex flex-wrap justify-center gap-8"> {/* <-- CHANGE HERE */}
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} icon={benefit.icon} title={benefit.title}>
              {benefit.description}
            </BenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPersonalBrand;