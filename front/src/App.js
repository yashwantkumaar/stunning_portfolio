import './App.css';
import { useState, useEffect } from 'react';
import { init } from '@emailjs/browser';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Work from './components/Work';
import CountryStateSelector from './components/CountryStateSelector';

init("DlZVAFDW0d3oh2i12");

function App() {
  const [showSelector, setShowSelector] = useState(true);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Check if user has already submitted details
    const savedDetails = localStorage.getItem('userDetails');
    if (savedDetails) {
      setUserDetails(JSON.parse(savedDetails));
      setShowSelector(false);
    }
  }, []);

  const handleFormSubmit = (formData) => {
    // formData will include userType, country, state, and recruiter-specific fields if applicable
    setUserDetails(formData);
    setShowSelector(false);
    localStorage.setItem('userDetails', JSON.stringify(formData));
  };

  return (
    <div className="App">
      {showSelector ? (
        <div className="min-h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] flex items-center justify-center">
          <CountryStateSelector onSubmitSuccess={handleFormSubmit} />
        </div>
      ) : (
        <>
          <Navbar />
          <Home userDetails={userDetails} />
          <About />
          <Skill />
          <Experience />
          <Work />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;