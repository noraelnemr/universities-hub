import React from 'react';
import '../styles/AboutUs.css';
import { FaUniversity, FaLightbulb, FaTools, FaRobot } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
    <div  className="about-nav">
    <Navbar/>
</div>

      <div className="about-container">
        <section className="hero-about">
          <h1>About Universities Hub</h1>
          <p>
            Universities Hub is a comprehensive digital platform designed to help Egyptian students make one of the most important decisions of their academic and professional lives: selecting the right university and major. By addressing the widespread lack of accessible, accurate, and up-to-date information, especially in technical and scientific fields, we provide a trusted resource for students and families navigating the higher education landscape.
          </p>
        </section>
<div>
<br/>
</div>
        <section className="mission-about">
          <h2><FaLightbulb /> Our Mission</h2>
          <p>
            Our mission is to empower students in Egypt and beyond with the knowledge and tools they need to make confident, well-informed academic decisions. We aim to eliminate confusion and uncertainty by organizing complex information into a user-friendly and visually accessible platform, helping students explore options that align with their interests, abilities, and future aspirations.
          </p>
        </section>
<div>
<br/>
</div>
        <section className="features-about">
          <h2><FaUniversity /> Key Features</h2>
          <ul>
            <li><strong>University Explorer:</strong> Browse Egyptian universities by location, ranking, or specialization.</li>
            <li><strong>360° Campus Tours:</strong> Experience virtual walkthroughs of campuses to get a real feel for the environment.</li>
            <li><strong>Program Catalog:</strong> Review program descriptions, course outlines by semester, credit hour structures, and available specialization tracks.</li>
            <li><strong>Financial Information:</strong> Access tuition costs and available scholarship or financial aid options.</li>
            <li><strong>Admission Requirements:</strong> View qualifications by high school system (Thanaweya Amma, IGCSE, American Diploma, etc.).</li>
            <li><strong>Career Insights:</strong> Understand job roles, industries, and potential salaries aligned with each major.</li>
            <li><strong>Comparison Tool:</strong> Evaluate multiple universities or majors side by side across key parameters.</li>
            <li><strong>Recommendation Quiz:</strong> Discover suggested majors based on your interests, strengths, and preferences.</li>
          </ul>
        </section>
<div>
<br/>
</div>
        <section className="tech">
          <h2><FaTools /> Technology Stack</h2>
          <p>
            Universities Hub is built using the powerful and modern MERN stack:
          </p>
          <ul>
            <li><strong>MongoDB:</strong> A flexible and scalable NoSQL database to store structured university and program data.</li>
            <li><strong>Express.js:</strong> A minimalist web framework that provides robust APIs to serve content efficiently.</li>
            <li><strong>React:</strong> A dynamic frontend library for building responsive, component-based user interfaces.</li>
            <li><strong>Node.js:</strong> A fast, event-driven JavaScript runtime used for the backend and API logic.</li>
          </ul>
          <p>
            This stack ensures high performance, scalability, and responsiveness, all critical for a platform handling diverse user queries and data interactions.
          </p>
        </section>
<div>
<br/>
</div>
        <section className="future">
          <h2><FaRobot /> Looking Ahead</h2>
          <p>
            We are continuously working on expanding and enhancing Universities Hub to better serve the evolving needs of students. Planned future enhancements include:
          </p>
          <ul>
            <li><strong>AI-Powered Guidance:</strong> Personalized study path suggestions and major predictions using machine learning algorithms.</li>
            <li><strong>Community Integration:</strong> User forums and student reviews to foster shared experiences and insights.</li>
            <li><strong>Mobile App:</strong> Native applications for Android and iOS to increase accessibility on the go.</li>
            <li><strong>Regional Expansion:</strong> Including universities from across the MENA region to serve a broader audience.</li>
            <li><strong>Scholarship Tracker:</strong> Real-time updates on available financial aid and how to apply.</li>
          </ul>
          <p>
            These improvements will further personalize the experience and make higher education discovery even more accessible and valuable.
          </p>
          <div>
<br/>
</div>
        </section>
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
