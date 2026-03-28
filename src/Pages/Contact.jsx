import React from "react";
import Header from "../Components/Core/Header/Header_New";
import SEO from "../Components/Shared/SEO";
import ConnectMe from './ConnectMe'; // Adjust the path if necessary
const Contact = () => {
  return (
    <>
      <SEO
        title="Contact CEO Sarthak (Sarthak Mittal) | Book a Consultation"
        description="Get in touch with Sarthak Mittal for personal branding consulting, speaking engagements, or collaborations."
        keywords="contact sarthak mittal, book consultation, personal branding inquiry, business collaboration"
      />
      <Header />
      <main className="mt-20 mb-10">
        {/* 3. Render the ConnectMe component directly */}
        <ConnectMe />
      </main>
    </>

  );
};

export default Contact;
