import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Mission from './components/home/Mission';
import Founder from './components/home/Founder';
import Footer from './components/layout/Footer';
import EntrepreneurSignup from './pages/EntrepreneurSignup';
import InvestorSignup from './pages/InvestorSignup';
import ExpertEvaluation from './pages/ExpertEvaluation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="pt-16">
              <Hero />
              <Mission />
              <Founder />
            </div>
          } />
          <Route path="/entrepreneur-signup" element={<EntrepreneurSignup />} />
          <Route path="/investor-signup" element={<InvestorSignup />} />
          <Route path="/expert/evaluate/:id" element={<ExpertEvaluation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;