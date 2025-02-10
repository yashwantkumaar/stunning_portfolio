import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const CountryStateSelector = ({ onSubmitSuccess }) => {
  const [name, setName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [userType, setUserType] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const countries = {
    IND: {
      name: 'India',
      states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']
    },
    USA: {
      name: 'United States',
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    },
    CAN: {
      name: 'Canada',
      states: ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']
    },
    AUS: {
      name: 'Australia',
      states: ['New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia', 'Australian Capital Territory', 'Northern Territory']
    },
    BRA: {
      name: 'Brazil',
      states: ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
    }
  };

  const sendEmail = async (details) => {
    try {
      const templateParams = {
        to_name: "Yashwant", // Your name
        from_name: name,
        message: details,
      };

      const response = await emailjs.send(
        'service_yashwant', // Replace with your EmailJS service ID
        'template_8s8uf5t', // Replace with your EmailJS template ID
        templateParams,
        'DlZVAFDW0d3oh2i12' // Replace with your EmailJS public key
      );

      if (response.status === 200) {
        setIsEmailSent(true);
        return true;
      } else {
        console.error('Failed to send email');
        return false;
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !userType || !selectedCountry || !selectedState || (userType === 'recruiter' && !lookingFor) || (userType === 'recruiter' && lookingFor === 'other' && !customRole)) {
      setPopupMessage('Please fill in all fields to help me personalize your experience! 😊');
      setShowPopup(true);
      return;
    }

    const formData = {
      name,
      userType,
      country: countries[selectedCountry].name,
      state: selectedState,
      ...(userType === 'recruiter' && {
        lookingFor,
        ...(lookingFor === 'other' && { customRole })
      })
    };

    const details = `New Portfolio Visitor Details:
    
Name: ${name}
Type: ${userType === 'developer' ? 'Fellow Developer 👨‍💻' : 'Recruiter 🎯'}
${userType === 'recruiter' ? `Looking for: ${lookingFor === 'other' ? customRole : 
  lookingFor === 'frontend' ? 'Frontend Developer 🎨' : 
  lookingFor === 'backend' ? 'Backend Developer ⚙️' : 
  lookingFor === 'fullstack' ? 'Fullstack Developer 🔋' : 
  'Python Developer 🐍'}\n` : ''}
Location: ${countries[selectedCountry].name} 🌍
State/Region: ${selectedState}

Time: ${new Date().toLocaleString()}`;

    const emailSent = await sendEmail(details);

    setPopupMessage(`Thanks for visiting, ${name}! 🎉
    
${details}
    
${emailSent ? "I'll be in touch soon! 📧" : "Looking forward to connecting with you! 🤝"}`);
    setShowPopup(true);
    
    onSubmitSuccess(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome to My Portfolio! 👋</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            What's your name? 😊
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* User Type Selection */}
        <div>
          <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
            Tell me about yourself! 🤔
          </label>
          <select
            id="userType"
            value={userType}
            onChange={(e) => {
              setUserType(e.target.value);
              if (e.target.value === 'recruiter') {
                setLookingFor('');
              }
            }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your role</option>
            <option value="developer">I'm a Developer 👨‍💻</option>
            <option value="recruiter">I'm a Recruiter 🎯</option>
          </select>
        </div>

        {/* Looking For Selection */}
        {userType === 'recruiter' && (
          <div>
            <label htmlFor="lookingFor" className="block text-sm font-medium text-gray-700 mb-1">
              What kind of developer are you looking for? 🔍
            </label>
            <select
              id="lookingFor"
              value={lookingFor}
              onChange={(e) => {
                setLookingFor(e.target.value);
                if (e.target.value === 'other') {
                  setCustomRole('');
                }
              }}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select role</option>
              <option value="frontend">Frontend Developer 🎨</option>
              <option value="backend">Backend Developer ⚙️</option>
              <option value="fullstack">Fullstack Developer 🔋</option>
              <option value="python">Python Developer 🐍</option>
              <option value="other">Other (specify) ✨</option>
            </select>
            
            {lookingFor === 'other' && (
              <input
                type="text"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                placeholder="What role are you looking for?"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        )}

        {/* Country Selection */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Where are you from? 🌍
          </label>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
              setSelectedState('');
            }}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select your country</option>
            {Object.entries(countries).map(([code, country]) => (
              <option key={code} value={code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Selection */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            Which state/region? 📍
          </label>
          <select
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={!selectedCountry}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          >
            <option value="">Select your state/region</option>
            {selectedCountry &&
              countries[selectedCountry].states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium text-lg"
        >
          Let's Connect! 🚀
        </button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-md w-full">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <p className="whitespace-pre-line text-gray-800">
              {popupMessage}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryStateSelector;