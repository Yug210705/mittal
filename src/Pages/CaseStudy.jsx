import React, { useState } from 'react';
import { X, ArrowRight, Target, Lightbulb, TrendingUp, Globe, Users, DollarSign } from 'lucide-react';
import Header_New from '../Components/Core/Header/Header_New';
import Breadcrumbs from "../Components/Shared/Breadcrumbs";
import SEO from "../Components/Shared/SEO";

const CaseStudyPage = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      "id": 1,
      "title": "Cloudatahub",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Manual, fragmented Chartered Accountant (CA) operations",
        "Inefficient communication between clients and CA firm",
        "Lack of a unified digital platform"
      ],
      "solutions": [
        "Designed and deployed a custom web and mobile portal",
        "Built a full-stack solution for end-to-end CA task management",
        "Enabled document sharing, ticket tracking, and notifications",
        "Developed a native Android app for real-time client access",
        "Formed IT and Brand Operations teams",
        "Provided 360-degree business consulting"
      ],
      "outcomes": [
        "60% faster query resolution time",
        "24/7 client access to documentation and task tracking",
        "Improved operational efficiency and transparency",
        "Elevated client satisfaction",
        "Firm positioned as a tech-enabled industry leader"
      ]
    },
    {
      "id": 2,
      "title": "Bizee.in",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No founder branding",
        "Limited digital visibility for potential clients and candidates"
      ],
      "solutions": [
        "Strategized positioning and brand narrative for stronger market appeal",
        "Deployed a team for brand optimization and built a networking funnel"
      ],
      "outcomes": [
        "Improved client credibility in the HR market",
        "Positioned Bizee.in as a modern, tech-driven HR consultancy"
      ]
    },
    {
      "id": 3,
      "title": "BrunoSpeaks.com",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No digital infrastructure to launch online courses",
        "Difficulty reaching non-Spanish speaking learners",
        "Lack of brand visibility and structured growth roadmap",
        "Planning expansion in Indian and Latin American markets"
      ],
      "solutions": [
        "End-to-end consulting, deployed an IT Team and a Branding Team",
        "Developed a multilingual website with course hosting features",
        "Designed personal branding and content strategy to position as a Spanish language mentor",
        "Created a digital marketing roadmap to scale outreach and student acquisition",
        "Optimized LinkedIn presence and deployed a lead generation funnel"
      ],
      "outcomes": [
        "Successfully launched a fully digital Spanish academy with multilingual accessibility",
        "Expanded reach to international learners",
        "Increased revenue by 25%",
        "Established a strong brand presence in online education in Spain",
        "Cut down operations cost by 50%",
        "Ongoing support for marketing and scaling strategies"
      ]
    },
    {
      "id": 4,
      "title": "Author Pawan Verma",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No centralized platform to showcase or sell books",
        "No strategy to build personal brand",
        "Lack of SEO and discoverability on digital channels",
        "Missing engagement tools like podcasts or media presence"
      ],
      "solutions": [
        "Built an author-centric website featuring books, blogs, reviews, and media mentions",
        "Initiated IT Operations and Social Media Operations",
        "Planned content calendar and deployed podcast operations",
        "Initiated SEO optimization and brand visibility strategy",
        "Started working on digital PR initiatives and podcast/media outreach"
      ],
      "outcomes": [
        "Established a strong digital foundation for book sales and reader engagement",
        "Improved discoverability through SEO and digital visibility",
        "Positioned the author as an authoritative online presence",
        "Ongoing scaling with podcasting and PR strategies",
        "Made processes efficient by 30%",
        "Extended brand towards multinational reach"
      ]
    },
    {
      "id": 5,
      "title": "Vinay Kumar Nangia",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured digital presence despite high recognition",
        "Extensive offline records (32-page CV) difficult to showcase online",
        "Needed a credible, clean, and academic digital identity"
      ],
      "solutions": [
        "Developed a minimal, high-impact personal website to represent academic legacy",
        "Converted offline CV into structured digital sections",
        "Created intuitive navigation to present his body of work clearly",
        "Added modules for lectures, events, media, and achievements",
        "Deployed a small IT team for long-term support and operations"
      ],
      "outcomes": [
        "Built a prestigious digital identity that reflects his academic legacy",
        "Made his work accessible to global audiences",
        "Showcased decades of expertise in a modern, elegant format",
        "Successfully bridged academic tradition with digital presence",
        "Streamlined Digital Event Operations",
        "Deployed a team to provide support whenever needed"
      ]
    },
    {
      "id": 6,
      "title": "EDITQUASER",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No business direction or structured roadmap",
        "Lack of confidence, clarity, and operational setup",
        "No online presence or digital assets to attract clients"
      ],
      "solutions": [
        "Provided 360° mentorship for business model creation",
        "Designed and developed Edit Quasar’s digital platform with service showcasing and lead conversion features",
        "Structured outsourcing strategy for international scale",
        "Built branding, positioning, and onboarding systems for scaling across countries"
      ],
      "outcomes": [
        "Transformed from an unclear idea into a thriving international media editing business",
        "Gained clients in two countries with a strong digital platform",
        "Established scalable systems for long-term growth",
        "Improved confidence and structured operations, leading to revenue growth"
      ]
    },
    {
      "id": 7,
      "title": "BADVERSE",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No unified platform to manage global youth programs",
        "Requirement for an ecosystem supporting internships, workshops, podcasts, and events",
        "Need for brand positioning that resonates across India, USA, and Spain"
      ],
      "solutions": [
        "Designed and developed BADVerse.in as a centralized hub for youth-led activities",
        "Integrated systems for internships, courses, event registrations (BADTalks), and community building",
        "Enabled podcast publishing and resource access modules",
        "Built a scalable backend to support international contributors and expansion"
      ],
      "outcomes": [
        "Created a fully operational global youth ecosystem with active users from three continents",
        "Platform hosts thought leadership events, BADTalks, and impactful learning programs",
        "Serves as a springboard for young innovators and professionals",
        "Strengthened brand presence as a global youth empowerment movement",
        "Organized 10+ Offline events",
        "Reached 1 Million audiences through internships",
        "Established connections with 500+ Mentors, established a Multinational Brand"
      ]
    },
    {
      "id": 8,
      "title": "ILCS",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No digital representation for the cooperative’s mission and services",
        "Difficulty in building trust and authority online",
        "Lack of a structured strategy to communicate with members, beneficiaries, and collaborators"
      ],
      "solutions": [
        "Designed a clear, credible, and informative website for ILCS.co.in",
        "Developed a visual brand identity and structured content strategy",
        "Made a reputation Management Strategy",
        "Created dedicated sections for mission, services, membership details, and news updates",
        "Implemented SEO and mobile-first design to increase visibility and reach"
      ],
      "outcomes": [
        "ILCS.co.in now serves as the official digital presence of the cooperative",
        "Enhanced credibility with both local and national stakeholders",
        "Improved engagement and education of members through structured content",
        "Established a scalable platform for ongoing communication and collaboration",
        "Promoted founder’s personal brand"
      ]
    },
    {
      "id": 9,
      "title": "Admivo",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Low brand recognition among students and academic institutions",
        "No structured system for generating qualified leads through offline engagement",
        "Weak event planning and fragmented marketing processes"
      ],
      "solutions": [
        "Designed and executed a nationwide outreach program targeting leading universities",
        "Conducted educational events, seminars, and engagement campaigns to boost visibility",
        "Implemented ground-activation strategies with structured follow-up systems",
        "Built a repeatable event-marketing framework to sustain lead generation",
        "Deployed a team of 5 to conduct event operations"
      ],
      "outcomes": [
        "Significant increase in qualified student leads and onboarding rates",
        "Strengthened brand credibility and recognition within the education sector",
        "Established a scalable, event-driven growth model for sustained awareness and engagement"
      ]
    },
    {
      "id": 10,
      "title": "Maureen Boehm",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Low brand visibility in the highly competitive U.S. career consulting market",
        "Weak and unoptimized LinkedIn presence for both company and leadership team",
        "Absence of a structured system for inbound lead generation and outreach",
        "No funnel to sell services through books"
      ],
      "solutions": [
        "Built a professional, conversion-focused website to strengthen digital credibility",
        "Strategically optimized company and leadership LinkedIn profiles",
        "Deployed a team to support her business",
        "Designed a podcast-led marketing strategy targeting industry-specific pain points",
        "Launched paid campaigns with high-conversion landing pages and lead-capture flows"
      ],
      "outcomes": [
        "Established a strong and authoritative digital presence",
        "Enhanced inbound engagement and significantly improved lead quality",
        "Achieved measurable brand recognition in a competitive market"
      ]
    },
    {
      "id": 11,
      "title": "Quanteraai.com",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No defined brand identity or cohesive visual strategy",
        "Lack of a centralized platform to communicate solutions, client outcomes, and alliances",
        "Struggled to build credibility and authority in a competitive SaaS/AI market"
      ],
      "solutions": [
        "Designed a modern, AI-focused website aligned with branding and messaging goals",
        "Built a unified digital platform showcasing alliances, client success stories, and use cases",
        "Crafted a differentiated brand identity emphasizing innovation and trust",
        "Optimized website communication with testimonials, partner logos, and clear calls-to-action"
      ],
      "outcomes": [
        "Established a professional, high-conversion digital presence",
        "Improved clarity in client communication and solution positioning",
        "Enhanced global credibility, boosting lead acquisition and community trust"
      ]
    },
    {
      "id": 12,
      "title": "Pankh project",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No unified online brand identity or positioning",
        "Weak digital visibility and low audience engagement",
        "Lack of a platform to showcase services and enable booking"
      ],
      "solutions": [
        "Developed a holistic digital branding strategy tailored to wellness consulting",
        "Built a clean, responsive website aligned with the brand’s core values",
        "Integrated booking functionality, service details, and storytelling visuals to enhance trust"
      ],
      "outcomes": [
        "Created a professional online presence that expanded audience reach",
        "Strengthened client trust and engagement through a cohesive brand identity",
        "Positioned the project as a credible and recognized wellness consultancy"
      ]
    },
    {
      "id": 13,
      "title": "Samaj Setu",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured digital platform or infrastructure to support outreach",
        "Difficulty promoting community programs, courses, and updates",
        "Inconsistent digital identity and brand messaging"
      ],
      "solutions": [
        "Designed a professional, user-friendly digital platform to showcase initiatives",
        "Developed dedicated sections for promoting courses, updates, and engagement activities",
        "Built a strong foundational branding framework to enable long-term scalability"
      ],
      "outcomes": [
        "Established a well-structured online presence for improved reach and engagement",
        "Enabled seamless interaction with community members and stakeholders",
        "Positioned the organization to sustain growth and amplify social impact digitally"
      ]
    },
    {
      "id": 14,
      "title": "Clay Boykin",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Outdated or minimal digital presence that didn’t reflect influence",
        "No structured personal brand to reach global audiences",
        "Lack of content framework to position as an industry thought leader",
        "No book launch strategy"
      ],
      "solutions": [
        "Developed a comprehensive personal branding strategy, covering tone, visuals, and messaging",
        "Built a new user-friendly website aligned with Clay Boykin’s leadership brand",
        "Designed a content plan including articles, podcasts, and targeted marketing campaigns",
        "Positioned Clay as a conscious leadership voice with global resonance"
      ],
      "outcomes": [
        "Established a strong foundation for global positioning as a thought leader",
        "Early feedback showed improved visibility and engagement",
        "Ongoing initiatives include podcasting, lead generation, and media placements scheduled for release",
        "Launched their book"
      ]
    },
    {
      "id": 16,
      "title": "Tarinika",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Heavy dependence on offline shows for customer acquisition",
        "No scalable e-commerce platform to reach global buyers",
        "Needed a premium digital presence to match luxury product positioning"
      ],
      "solutions": [
        "Built a visually immersive e-commerce platform at tarunika.in",
        "Designed curated shopping journeys for both U.S. and Indian audiences",
        "Integrated product showcases, newsletter opt-ins, and localized event alerts",
        "Enhanced SEO framework for global discoverability"
      ],
      "outcomes": [
        "Transitioned from an offline-only model to a powerful hybrid digital presence",
        "Expanded international reach with improved customer engagement",
        "Strengthened brand equity through a seamless luxury online experience"
      ]
    },
    {
      "id": 17,
      "title": "Anugami",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No scalable marketplace platform to host diverse Indian product categories",
        "Weak brand identity that didn’t reflect 'modern India'",
        "Low visibility and discoverability on digital platforms"
      ],
      "solutions": [
        "Built a responsive, category-driven ecommerce platform at anugami.com",
        "Designed custom modules for seller onboarding, product discovery, and checkout",
        "Integrated storytelling + brand design aligned with the 'Vocal for Local' movement",
        "Implemented SEO + analytics infrastructure to boost visibility and reach"
      ],
      "outcomes": [
        "Created a unified platform reflecting India’s craftsmanship digitally",
        "Empowered artisans and creators across India to reach global markets",
        "Became a launchpad for small businesses through a seamless online marketplace"
      ]
    },
    {
      "id": 18,
      "title": "KPH Outfits",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured online store or brand identity",
        "Needed a digital platform to showcase handcrafted collections",
        "Weak brand storytelling for luxury positioning"
      ],
      "solutions": [
        "Built a fully functional ecommerce platform at kphoutfits.com",
        "Integrated brand storytelling into UI/UX for deeper customer engagement",
        "Designed pages for mission, collections, and a seamless checkout experience",
        "Applied branding strategy emphasizing luxury + craftsmanship"
      ],
      "outcomes": [
        "Transformed into a digital-first premium fashion brand",
        "Platform now narrates a lifestyle, not just a product",
        "Strengthened high-end positioning and attracted fashion-conscious customers seeking authenticity and elegance"
      ]
    },
    {
      "id": 19,
      "title": "MUSKAAN NGO",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Disconnected digital identity and fragmented online presence",
        "No centralized platform for volunteer and donor engagement",
        "Difficulty consolidating diverse social causes under a single brand identity"
      ],
      "solutions": [
        "Designed a tailored digital strategy to strengthen NGO visibility and engagement",
        "Built a responsive, cause-driven website with integrated donation and volunteer sign-up features",
        "Implemented clean, intuitive design and storytelling to highlight multiple causes",
        "Optimized website for search engines to increase reach and discoverability"
      ],
      "outcomes": [
        "Significant increase in volunteer sign-ups and online donations",
        "Stronger, cohesive brand identity aligned with mission and values",
        "Enhanced accessibility for both local and global supporters"
      ]
    },
    {
      "id": 20,
      "title": "The HR Company",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Reliance on traditional offline operations with minimal digital presence",
        "Unclear brand communication and weak visual identity",
        "Lack of a structured digital interface for clients and service positioning"
      ],
      "solutions": [
        "Developed a strong brand identity (color palette, voice, and messaging)",
        "Built a responsive website highlighting core HR services",
        "Executed a comprehensive digital strategy including SEO and lead-generation touchpoints",
        "Positioned the company as a modern, tech-enabled HR solutions provider"
      ],
      "outcomes": [
        "Established a professional online presence with clear service categories and user-friendly design",
        "Boosted client inquiries and strengthened communication channels",
        "Achieved stronger market positioning in the competitive HR consulting sector"
      ]
    },
    {
      "id": 21,
      "title": "OctaFX",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No dedicated online platform to present trading services",
        "Lack of cohesive brand identity and visual guidelines",
        "Needed a professional presence to build trust, credibility, and clarity with global clients"
      ],
      "solutions": [
        "Designed a high-performance, modern website optimized for lead generation and credibility",
        "Crafted a unified brand identity with consistent design language, logo, and color palette",
        "Structured digital platform to showcase trading services with intuitive navigation and accessibility",
        "Produced compliance-driven content"
      ],
      "outcomes": [
        "Established a polished digital presence positioning Octa Money FX as a credible, global trading player",
        "Enhanced trust and confidence among clients and stakeholders",
        "Improved client engagement and delivered a seamless onboarding experience"
      ]
    },
    {
      "id": 22,
      "title": "Secret Weapon",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No digital presence to communicate service offerings",
        "Required a platform to showcase trading strategies and unique value proposition",
        "Needed a credible brand identity that resonates with traders and builds trust"
      ],
      "solutions": [
        "Designed and developed a modern, high-performance website highlighting services, features, and the platform’s edge",
        "Built dedicated sections for product walkthroughs, use cases, and portfolios",
        "Created a scalable digital architecture to support future product expansion and onboarding"
      ],
      "outcomes": [
        "Delivered a professional and engaging online presence that clearly communicates offerings",
        "Strengthened credibility and trust among target traders and early adopters",
        "Positioned the startup as a serious contender in the fintech and trading automation space"
      ]
    },
    {
      "id": 23,
      "title": "SNIX AI",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No technical infrastructure to deliver AI-powered creative services",
        "Needed automation for scalable image and video generation",
        "Lacked a centralized platform for portfolio showcasing and client onboarding"
      ],
      "solutions": [
        "Built a custom AI-driven platform to automate content creation workflows",
        "Developed a dynamic portfolio and client dashboard for seamless interaction",
        "Implemented a scalable backend to handle heavy design processing and user loads",
        "Ensured brand consistency with sleek UI/UX aligned to the agency’s creative vision"
      ],
      "outcomes": [
        "Delivered a robust AI-powered platform enabling scalable and efficient service delivery",
        "Enhanced client experience with optimized portfolio access and project management",
        "Positioned SNIX.AI as a future-ready creative agency with strong technological foundations"
      ]
    },
    {
      "id": 24,
      "title": "Spillmate AI",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Increasing demand for digital mental health solutions without a scalable platform",
        "Lack of 24/7 AI-driven wellness and therapy support",
        "Needed a personalized, accessible, and secure solution to address burnout and stress"
      ],
      "solutions": [
        "Built an AI-powered wellness assistant capable of real-time support",
        "Implemented continuous emotion monitoring and therapy-driven recommendations",
        "Designed a mobile-first platform with multilingual reach for global accessibility",
        "Integrated mood tracking and daily well-being insights to personalize user experience"
      ],
      "outcomes": [
        "Positioned Spillmate.AI as an industry leader in AI-powered mental wellness",
        "Delivered a reliable 24/7 platform for scalable emotional support",
        "Enhanced personalization through advanced AI for therapy simulations",
        "Expanded global reach with multilingual support and mobile accessibility",
        "Achieved strong adoption during beta testing, establishing credibility in the mental health tech space"
      ]
    },
    {
      "id": 25,
      "title": "Mandala LLC",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No streamlined IT framework, leading to inefficiencies and high costs",
        "Limited marketing reach and inconsistent brand visibility",
        "HR processes were unstructured, slowing down recruitment and employee management",
        "Lack of integrated operations strategy across IT, HR, and marketing functions"
      ],
      "solutions": [
        "Delivered end-to-end consulting across IT, Marketing, HR, and Brand Operations",
        "Implemented scalable IT systems to automate workflows and reduce manual effort",
        "Designed and executed a unified marketing and branding strategy to expand reach",
        "Established structured HR policies, recruitment pipelines, and engagement processes",
        "Built an integrated operations framework aligning all business functions under one strategy"
      ],
      "outcomes": [
        "Reduced operational costs by 50% through process automation and optimization",
        "Improved HR efficiency and employee satisfaction with standardized systems",
        "Significantly boosted brand visibility and market positioning in Texas and beyond",
        "Positioned Mandala Within LLC as a scalable, future-ready business with sustainable growth foundations"
      ]
    },
    {
      "id": 26,
      "title": "Leslie",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured personal brand presence to showcase expertise and credibility",
        "Lack of a long-term marketing and branding strategy",
        "Needed ongoing operational support for scaling activities",
        "High operating costs without efficient systems in place"
      ],
      "solutions": [
        "Provided end-to-end consulting covering Branding, Marketing, and HR support",
        "Deployed a dedicated long-term team to manage brand development and marketing execution",
        "Established 24x5 operational support for consistency and responsiveness",
        "Implemented cost-efficient processes to streamline operations and scale sustainably"
      ],
      "outcomes": [
        "Successfully built and positioned a strong personal brand for Leslie in the US market",
        "Continuous marketing and HR support ensured long-term visibility and growth",
        "Reduced operations cost by 50% while maintaining high-quality delivery",
        "Enabled Leslie to scale her influence and brand presence with a sustainable support framework"
      ]
    },
    {
      "id": 27,
      "title": "Dev Oils",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Inefficient IT and marketing operations limiting scalability",
        "No established brand identity or market presence",
        "Needed a partner to provide end-to-end consulting for launch and growth"
      ],
      "solutions": [
        "Streamlined IT operations with scalable systems to support business processes",
        "Built and executed a comprehensive marketing strategy to establish visibility and trust",
        "Created a brand identity from the ground up, including positioning, messaging, and design assets",
        "Provided end-to-end consulting covering IT, Marketing, and Brand Operations for sustainable growth"
      ],
      "outcomes": [
        "Successfully launched Dev Oils with a strong brand presence in the market",
        "Achieved operational efficiency through IT and marketing process optimization",
        "Built a foundation for long-term growth with an integrated consulting approach",
        "Positioned Dev Oils as a professional, competitive player in its industry"
      ]
    },
    {
      "id": 28,
      "title": "Harsh Kabra CO",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Difficulty in sourcing and onboarding high-quality law candidates",
        "Recruitment process was lengthy and unstructured",
        "Needed a streamlined HR system to consistently attract and retain the right talent"
      ],
      "solutions": [
        "Optimized HR operations by creating structured recruitment workflows",
        "Designed targeted sourcing strategies to reach top-tier law candidates",
        "Standardized screening, assessment, and onboarding processes",
        "Provided ongoing HR consulting to align hiring practices with long-term organizational goals"
      ],
      "outcomes": [
        "Reduced hiring time by 40% through efficient HR workflows",
        "Doubled the quality candidate ratio by implementing targeted sourcing methods",
        "Built a scalable and repeatable HR framework for sustained recruitment needs",
        "Enhanced overall organizational efficiency with a strong legal talent pipeline"
      ]
    },
    {
      "id": 29,
      "title": "Mittal brand usa",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Solopreneurs lacked structured brand strategy to build visibility and credibility",
        "Struggled with fragmented operations across marketing, HR, and tech",
        "High operating costs made it difficult for small businesses to scale sustainably",
        "Needed continuous support across different time zones"
      ],
      "solutions": [
        "Provided end-to-end business operations consulting (Branding, Marketing, IT, and HR)",
        "Designed tailored brand strategies for solopreneurs to establish authority and market presence",
        "Deployed a dedicated India-based team, delivering the same quality at 50% lower operations cost",
        "Set up 24x7 working model to ensure round-the-clock execution and client support"
      ],
      "outcomes": [
        "Enabled solopreneurs to launch and scale with professional, consistent brand presence",
        "Achieved significant cost savings (50% lower operations cost) while maintaining global delivery standards",
        "Improved client reach, credibility, and operational efficiency through integrated solutions",
        "Positioned Mittal Brandtech as a trusted partner for solopreneurs in the US market"
      ]
    },
    {
      "id": 30,
      "title": "Anjucreations",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Handicraft business lacked structured operations and scalable processes",
        "Limited market reach and inefficient sales channels",
        "Needed guidance on brand positioning and business strategy"
      ],
      "solutions": [
        "Provided end-to-end business consulting with a focus on operations, branding, and sales strategy",
        "Streamlined supply chain and operational workflows for efficiency",
        "Supported in expanding product distribution and client acquisition channels",
        "Enhanced digital visibility to strengthen market presence"
      ],
      "outcomes": [
        "Successfully acquired 1,700+ testimonials with consistent business growth",
        "Sold 50,000+ products across multiple channels",
        "Achieved a 3.2/5 client satisfaction rating, highlighting both reach and improvement areas",
        "Positioned Anjucreations as a scalable handicraft brand with a strong foundation for future expansion"
      ]
    },
    {
      "id": 31,
      "title": "Innovait.in",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Founder lacked a clear personal brand presence to represent the company effectively",
        "Client marketing efforts were fragmented and lacked measurable impact",
        "Needed stronger positioning in the competitive IT services market"
      ],
      "solutions": [
        "Developed a personal branding strategy for the founder to establish thought leadership and credibility",
        "Streamlined marketing campaigns for clients with structured processes and performance tracking",
        "Aligned branding and marketing efforts with the company’s overall growth strategy"
      ],
      "outcomes": [
        "Strengthened the founder’s personal brand visibility, boosting trust and authority",
        "Improved client marketing performance with measurable, streamlined campaigns",
        "Enhanced Innovait.in’s positioning as a professional and growth-oriented IT solutions provider"
      ]
    },
    {
      "id": 32,
      "title": "Ganesh Industries",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "IT operations were fragmented and inefficient, slowing down business processes",
        "No dedicated creative support for branding, marketing, or client communication",
        "Needed a structured business strategy to drive growth and competitiveness"
      ],
      "solutions": [
        "Streamlined IT operations by implementing scalable and efficient systems",
        "Deployed a dedicated creative team for branding, design, and marketing support",
        "Provided business strategy consulting to align operations, market positioning, and growth goals"
      ],
      "outcomes": [
        "Improved operational efficiency with optimized IT workflows",
        "Strengthened brand presence and client engagement through creative support",
        "Established a clear growth roadmap, positioning Ganesh Industries as a competitive and scalable business"
      ]
    },
    {
      "id": 33,
      "title": "Diginomo Private Limited",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Lacked a structured back-office setup to manage daily operations efficiently",
        "Faced challenges in HR and recruitment, leading to talent gaps",
        "Founders had limited personal brand presence, reducing market visibility and credibility",
        "Needed holistic business consulting to align operations with growth ambitions"
      ],
      "solutions": [
        "Delivered end-to-end business consulting covering operations, HR, and branding",
        "Set up a scalable back-office infrastructure to streamline workflows",
        "Designed and executed HR and recruitment processes for talent acquisition and retention",
        "Developed founder branding strategies to establish authority and improve visibility in the market"
      ],
      "outcomes": [
        "Enabled smooth daily operations with a reliable back-office framework",
        "Improved hiring efficiency and built a strong internal team",
        "Strengthened founders’ personal brands, boosting credibility and client trust",
        "Positioned Diginomo as a professional and growth-ready company with sustainable foundations"
      ]
    },
    {
      "id": 34,
      "title": "BAD IPSA",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured team or strategy to manage large-scale events and initiatives",
        "Limited marketing presence and lack of IT support for outreach and engagement",
        "Difficulty in securing sponsorships and managing PR activities",
        "Required logistical support for event branding, including merchandise"
      ],
      "solutions": [
        "Built and deployed a dedicated team with a clear strategic roadmap for execution",
        "Managed marketing and IT operations to boost visibility and audience engagement",
        "Established a PR and sponsorship team, successfully onboarding sponsors for the event",
        "Coordinated event branding and logistics, including design and printing of T-shirts"
      ],
      "outcomes": [
        "Delivered a professionally managed event with a well-structured execution framework",
        "Increased audience reach and engagement through targeted marketing and IT support",
        "Secured multiple sponsorships, improving financial sustainability of the event",
        "Enhanced brand visibility with on-ground branding assets, including customized merchandise"
      ]
    },
    {
      "id": 35,
      "title": "BAD Chandigarh",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Needed a strong local community presence in Chandigarh to expand the BAD network",
        "No structured operations team to manage events, partnerships, and growth",
        "Limited visibility among students, startups, and local businesses",
        "Lacked a clear strategy for PR, sponsorships, and marketing"
      ],
      "solutions": [
        "Built a dedicated operations and strategy team in Chandigarh",
        "Designed and executed local marketing campaigns to engage students and entrepreneurs",
        "Established PR and sponsorship initiatives to build partnerships with regional stakeholders",
        "Organized on-ground events and networking activities to strengthen the BAD brand presence"
      ],
      "outcomes": [
        "Successfully launched and positioned BAD Chandigarh as a vibrant local chapter",
        "Expanded community engagement, attracting students, startups, and professionals",
        "Secured local sponsorships and partnerships, boosting sustainability",
        "Enhanced brand recognition for BAD in the region, setting a foundation for future city expansions"
      ]
    },
    {
      "id": 36,
      "title": "BAD MAIMS",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured platform for students to access networking, mentorship, and startup support",
        "Limited awareness of the BAD ecosystem within the MAIMS community",
        "Needed sponsorships, PR, and operational support to successfully launch a campus chapter",
        "Lack of event management framework for student engagement"
      ],
      "solutions": [
        "Built a dedicated student leadership and operations team for the MAIMS chapter",
        "Deployed a clear launch and growth strategy, aligning with BAD’s larger mission",
        "Managed marketing and PR campaigns to create visibility among students and faculty",
        "Onboarded sponsorships and partners to support events and initiatives",
        "Structured event operations, including branding, logistics, and merchandise"
      ],
      "outcomes": [
        "Successfully launched BAD MAIMS as an active campus chapter",
        "Increased student participation and engagement through curated events and networking activities",
        "Secured sponsorships and partnerships to sustain chapter activities",
        "Strengthened BAD’s presence in the academic ecosystem, paving the way for further college-level expansions"
      ]
    },
    {
      "id": 37,
      "title": "Bad Medicaps",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "No structured platform at Medicaps University to connect students with mentorship, startups, and networking opportunities",
        "Lack of awareness of the BAD community within the campus ecosystem",
        "Required a framework for events, sponsorships, and community building",
        "No established operations or student leadership team to drive activities"
      ],
      "solutions": [
        "Built a dedicated student operations and leadership team at Medicaps",
        "Designed a launch strategy aligned with BAD’s larger vision of youth empowerment",
        "Executed marketing and PR initiatives to raise awareness among students and faculty",
        "Secured sponsorships and partnerships to support on-campus activities",
        "Structured event planning and branding, including merchandise and logistics support"
      ],
      "outcomes": [
        "Successfully launched BAD Medicaps as a recognized student chapter",
        "Increased student participation and engagement in networking and mentorship programs",
        "Established sponsorship support to sustain ongoing activities",
        "Strengthened BAD’s footprint in the academic ecosystem, expanding its reach among youth communities"
      ]
    },
    {
      "id": 38,
      "title": "SRM university",
      "color": "from-blue-500 to-purple-600",
      "problems": [
        "Students lacked hands-on exposure to drone technology and real-world applications",
        "No structured platform for practical learning and innovation in the field of UAVs",
        "Limited awareness of drone-based opportunities in startups, research, and industry",
        "Needed a well-organized workshop framework with expert guidance and branding support"
      ],
      "solutions": [
        "Designed and executed a drone technology workshop tailored for SRM University students",
        "Deployed a team of technical experts and mentors to deliver practical sessions",
        "Managed event operations, branding, and promotions to maximize participation",
        "Structured the workshop around hands-on learning, live demonstrations, and industry insights"
      ],
      "outcomes": [
        "Successfully engaged hundreds of students in experiential drone learning",
        "Provided participants with practical skills and exposure to drone technology and its applications",
        "Strengthened SRM University’s innovation ecosystem through collaboration with BAD",
        "Enhanced awareness about drone-based career paths, startups, and research opportunities"
      ]
    }
  ];

  const openDialog = (caseStudy) => {
    setSelectedCase(caseStudy);
  };

  const closeDialog = () => {
    setSelectedCase(null);
  };

  const brandGold = "rgba(208, 161, 81, 1)";

  return (
    <div className='bg-white'>
      <SEO
        title="Success Stories | Founder Personal Branding Case Studies"
        description="Explore how Sarthak Mittal's strategies have transformed businesses through Personal Brand Incubator and CEO Persona Development."
        keywords="branding case studies, founder success stories, business transformation, ceo personal branding results"
      />
      <Header_New />
      <Breadcrumbs />


      <div className="min-h-screen  py-12 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 mt-12">
            <h2
              className="text-3xl font-bold inline-block m-0 pb-2"
              style={{ color: brandGold }}
            >
              Case Studies
            </h2>
            <div
              className="h-2 w-[110px] mx-auto"
              style={{ backgroundColor: brandGold }}
            ></div>
          </div>

          {/* Case Study Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => openDialog(study)}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* <div className="text-6xl mb-4">{study.image}</div> */}



                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>


                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    <span>View Case Study</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dialog/Modal */}
          {selectedCase && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl max-w-6xl max-h-[90vh] overflow-y-auto relative">
                {/* Close Button */}
                <button
                  onClick={closeDialog}
                  className="absolute top-6 right-6 z-10 p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Dialog Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                          {selectedCase.title}
                        </h2>
                      </div>
                    </div>

                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Problems */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Target className="mr-3 text-red-600" />
                        Client Problems
                      </h3>
                      <div className="space-y-4">
                        {selectedCase.problems.map((problem, index) => (
                          <div key={index} className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                            <p className="text-gray-700">{problem}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <Lightbulb className="mr-3 text-yellow-600" />
                        How We Solved
                      </h3>
                      <div className="space-y-4">
                        {selectedCase.solutions.map((solution, index) => (
                          <div key={index} className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                            <p className="text-gray-700">{solution}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                        <TrendingUp className="mr-3 text-green-600" />
                        Outcomes
                      </h3>
                      <div className="space-y-4">
                        {selectedCase.outcomes.map((outcome, index) => (
                          <div key={index} className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                            <p className="text-gray-700">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;