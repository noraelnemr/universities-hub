import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage";
import MajorPage from "./pages/MajorPage"
import UniPage from './pages/UniPage';
import SearchResultsPage from './pages/SearchResult'
import QuizPage from './pages/QuizPage'
import UniversityComparison from './pages/UniversityComparison';
import AboutUs from './pages/AboutPage';
import FAQ from './pages/FAQ'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/university/:id" element={<UniPage />} />
        <Route path="/program/:id" element={<MajorPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/comparison" element={<UniversityComparison />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/FAQ" element={<FAQ />} />
        
      </Routes>
    </Router>
  );
}

export default App;

