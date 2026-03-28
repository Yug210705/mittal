import React from "react";
import Header from "../Components/Core/Header/Header_New";
import SEO from "../Components/Shared/SEO";
import Breadcrumbs from "../Components/Shared/Breadcrumbs";

const WhoIsCeoSarthak = () => {
    const brandGold = "rgba(208, 161, 81, 1)";

    const qaData = [
        {
            question: "Who is CEO Sarthak?",
            answer: "CEO Sarthak refers to **Sarthak Mittal**, the Founder & CEO of **Mittal Alliance Industries** and **Mittal Brandtech Inc.** He is a renowned personal branding expert, entrepreneur, and thought leader who helps founders and executives build powerful personal brands."
        },
        {
            question: "Which company does CEO Sarthak lead?",
            answer: "**Sarthak Mittal** leads **Mittal Alliance Industries Private Limited** (India) and **Mittal Brandtech Inc.** (USA), overseeing a diverse portfolio that includes biofuel, technology, and branding consulting."
        },
        {
            question: "What is Sarthak Mittal known for?",
            answer: "Sarthak Mittal is best known for his work in **Founder Personal Branding**, **CEO Persona Development**, and **Thought Leadership Strategy**. He is also the author of 'Contact Centre Success' and a global speaker."
        },
        {
            question: "Is Sarthak Mittal different from other Sarthaks?",
            answer: "Yes. While there are other notable figures named Sarthak (such as Dr. Jitender Aggarwal of Sarthak Educational Trust), the entity **'CEO Sarthak'** specifically anchors to **Sarthak Mittal**, the visionary behind Mittal Alliance Industries."
        }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO
                title="Who is CEO Sarthak? | Sarthak Mittal - CEO of Mittal Alliance"
                description="CEO Sarthak refers to Sarthak Mittal, Founder & CEO of Mittal Alliance Industries. Learn about his journey, companies, and personal branding expertise."
                keywords="who is ceo sarthak, sarthak mittal ceo, mittal alliance industries founder, ceo sarthak mittal profile"
            />
            <Header />
            <Breadcrumbs />

            <main className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandGold }}>
                        Who is CEO Sarthak?
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Resolving the ambiguity: The story and identity of Sarthak Mittal, Founder of Mittal Alliance Industries.
                    </p>
                </div>

                <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/3">
                        <img
                            src="/About/sarthak.png"
                            alt="Sarthak Mittal CEO of Mittal Alliance Industries"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">The Entity: Sarthak Mittal</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            When you search for <strong>"CEO Sarthak"</strong>, you are looking for <strong>Sarthak Mittal</strong>. Starting his journey from a family business legacy, Sarthak revived the Mittal name by founding <strong>Mittal Alliance Industries</strong>.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            He is not just a CEO but a <strong>Personal Branding Architect</strong> for leaders worldwide. His work distinguishes him as a specific, authoritative entity in the business world, separate from other individuals sharing the first name.
                        </p>
                    </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: brandGold }}>
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {qaData.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.question}</h3>
                                <div
                                    className="text-gray-700 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: item.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                                />
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-6">Connect with Sarthak Mittal</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://www.linkedin.com/in/sarthak-cxo/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#0A66C2] text-white rounded-full font-bold hover:opacity-90 transition">
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/ceosaarthakmittal/?igsh=ZGV4MzR6aXFmanAy#" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#E1306C] text-white rounded-full font-bold hover:opacity-90 transition">
                            Instagram
                        </a>
                        <a href="https://mittalalliance.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white rounded-full font-bold hover:opacity-90 transition">
                            Company Website
                        </a>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default WhoIsCeoSarthak;
