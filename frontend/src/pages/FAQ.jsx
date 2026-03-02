import React, { useState } from 'react';
import '../styles/FAQ.css';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUs.css'

const faqs = [
  {
    question: "What is the purpose of Universities Hub?",
    answer: "Universities Hub is a digital platform created to help Egyptian students and families make well-informed decisions when choosing universities and academic majors. It offers structured information on institutions, programs, career paths, and more, all in one place."
  },
  {
    question: "How reliable is the data presented on the platform?",
    answer: "All information on Universities Hub is sourced from official university websites, Ministry of Higher Education publications, and verified educational resources. We frequently update the content to ensure it remains accurate, relevant, and trustworthy."
  },
  {
    question: "How does the comparison tool work?",
    answer: "Our comparison tool allows users to select up to 4 universities or academic majors and view them side-by-side. It highlights critical factors like tuition fees, duration, university rankings, and universitys' location."
  },
  {
    question: "What information is available for each academic program?",
    answer: "Each academic program includes a semester-wise course outline, credit hour distribution, specialization tracks, prerequisites, tuition fees, potential career paths, and entrance requirements based on high school systems like Thanaweya Amma, IGCSE, or American Diploma."
  },
  {
    question: "What is the purpose of the recommendation quiz?",
    answer: "The recommendation quiz is designed to help students discover the academic majors that best align with their interests, strengths, and personality traits. It uses a structured logic-based approach to suggest majors that are likely to lead to academic and career success."
  },
  {
    question: "Do I need to pay to use the platform?",
    answer: "No, Universities Hub is completely free to use. We believe access to academic guidance and career planning tools should be available to every student, regardless of financial background."
  },
  {
    question: "Are virtual campus tours available for every university?",
    answer: "Yes, 360-degree virtual campus tours are available for all listed universities on the platform. These immersive experiences help students explore the environment and facilities without needing to visit in person."
  },
  {
    question: "Can I find scholarship information on the platform?",
    answer: "Currently, we provide tuition fee details and admission prerequisites. In future updates, we plan to include real-time scholarship tracking and eligibility information for both local and international students."
  },
  {
    question: "Will the platform support universities outside Egypt?",
    answer: "Yes. While our primary focus is currently on Egyptian institutions, we have plans to expand coverage to include universities across the MENA region in future releases."
  },
  {
    question: "Are all majors and universities included on the platform?",
    answer: "At this stage, Universities Hub focuses primarily on Computer Science and Engineering majors in Egyptian universities. However, we are actively working to include other disciplines—such as Medicine, Business, and Arts—and universities in future updates."
  }
];



function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
    <div className='about-nav'>
<Navbar />
</div>

    <div className="faq-container">
    
      <div className="faq-box">
        <h1><FaQuestionCircle /> Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <FaChevronDown className={`icon ${openIndex === index ? 'rotated' : ''}`} />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default FAQ;
