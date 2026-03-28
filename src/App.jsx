// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import SEO from "./Components/Shared/SEO";
import Breadcrumbs from "./Components/Shared/Breadcrumbs";
import Footer from "./Components/Core/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SuccessMatrix from "./Pages/SuccessMatrix";
import ResultConsistent from "./Pages/ResultConsistent";
import ConnectMe from "./Pages/ConnectMe";
import PainfulBegining from "./Pages/PainfulBegining/PainfulBegining";
import Rebellion from "./Pages/PainfulBegining/Rebellion";
import Leadership from "./Pages/Leadership";
import FrameworkBad from "./Pages/FrameworkBad";
import Services from "./Pages/Services";
import Testimonials from "./Pages/Testimonials";
import Podcast from "./Pages/Podcast";
import Book from "./Pages/Book";
import Blog from "./Pages/Blog";
import GreatTogether from "./Pages/GreatTogether";
import Awards from "./Pages/Awards";
import TedxSection from "./Pages/TedxSection";
import Contact from "./Pages/Contact";
// import Stories from "./Pages/Stories";

// Import REAL pages
import BlogsPage from "./Pages/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import PodcastsDetail from "./Pages/PodcastsDetail";
import EventsPage from "./Pages/Events";
import PodcastsPage from "./Pages/Podcasts";
// import StoriesPage from "./Pages/Stories";
import BooksPage from "./Pages/Books";
import MentorsPage from "./Pages/Mentors";
import HistoryPage from "./Pages/History";
import CareersPage from "./Pages/Careers";
import FAQsPage from "./Pages/FAQs";
import ServiceDetails from "./Pages/ServiceDetails";
import Testimonials_InnerPage from "./Pages/Testimonials_InnerPage";
import Struggle from "./Pages/Struggle";
import NotFound from "./Pages/NotFound";
import WhoIsCeoSarthak from "./Pages/WhoIsCeoSarthak";

// Import Admin components
import Auth from "./Admin/Auth";
import ProtectedRoute from "./Admin/ProtectedRoute";
import AdminDashboard from "./Admin/AdminDashboard";
import AddBlog from "./Admin/AddBlog";
import EditBlog from "./Admin/EditBlog";
import CaseStudiesPage from "./Pages/CaseStudy";
import WhyPersonalBrand from "./Pages/Why";
// import { Contact } from "lucide-react";

// This component aggregates all sections for the single-page style homepage.
const HomePage = () => (
  <>
    <SEO
      title="Founder Brand Incubator & CEO Personal Branding"
      description="Transform your leadership with Sarthak Mittal's Founder Personal Brand Strategy. Expert Personal Brand Incubator for CEOs, Entrepreneurs, and Executives."
      keywords="founder personal brand strategy, thought leadership personal branding, personal branding for founders, personal brand incubator, persona incubator for leaders, ceo personal branding, personal brand building for entrepreneurs, founder brand incubator, ceo persona development, executive personal brand building"
    />
    <Home />
    <About />
    <GreatTogether />
    <WhyPersonalBrand />

    <SuccessMatrix />
    <ResultConsistent />
    <ConnectMe />
    <PainfulBegining />
    <Leadership />
    {/* <FrameworkBad /> */}
    {/* <Services /> */}
    <Awards />
    <TedxSection />
    <Testimonials />
    <div>
      <hr className="bg-black h-0.5" />
    </div>
    {/* <Struggle /> */}
    <Podcast />
    <Book />
    <Blog />
    <ConnectMe />
  </>
);


const AboutPage = () => (
  <>
    <SEO
      title="About Sarthak Mittal | Founder Brand Incubator"
      description="Learn about Sarthak Mittal's journey, the Mittal Alliance legacy, and his mission to empower 2000+ industrialists."
      keywords="about sarthak mittal, mittal alliance history, founder biography, personal branding expert background"
    />
    <Header />
    <Breadcrumbs />
    <div className="mt-20">
      <About />
    </div>
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        {/* The <Routes> component manages all the different URL paths. */}
        <Routes>
          {/* Main landing page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/pricing" element={<Stories />} /> */}

          {/* Route for the main services list */}
          <Route path="/" element={<Services />} />
          <Route path="/services" element={<Services />} />
          {/* Route for the main Testimoials list */}
          <Route path="/testimonials" element={<Testimonials_InnerPage />} />

          {/* Dynamic route for individual service details */}
          <Route path="/services/:id" element={<ServiceDetails />} />

          {/* Blog pages */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Podcast pages */}
          <Route path="/podcasts" element={<PodcastsPage />} />
          {/* THIS IS THE NEWLY ADDED ROUTE.
            It listens for a URL like "/podcasts/1" or "/podcasts/2"
            and renders the PodcastsDetail component, passing the "id" as a parameter.
          */}
          <Route path="/podcasts/:id" element={<PodcastsDetail />} />

          {/* Other application pages */}
          <Route path="/events" element={<EventsPage />} />
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
          <Route path="/books" element={<BooksPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/who-is-ceo-sarthak" element={<WhoIsCeoSarthak />} />
          <Route path="/contact" element={<ConnectMe />} />
          <Route path="/case-study" element={<CaseStudiesPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog/add"
            element={
              <ProtectedRoute>
                <AddBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <EditBlog />
              </ProtectedRoute>
            }
          />

          {/* 404 Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* The Footer appears on every page */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
