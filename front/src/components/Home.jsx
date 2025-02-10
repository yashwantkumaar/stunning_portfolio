import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from "typewriter-effect";

const Home = ({ userDetails }) => {
  const getGreeting = () => {
    if (!userDetails) return "Hi, ";
    
    if (userDetails.userType === 'developer') {
      return `Hi fellow developer from ${userDetails.state}, ${userDetails.country}, `;
    } else if (userDetails.userType === 'recruiter') {
      const role = userDetails.lookingFor === 'other' 
        ? userDetails.customRole 
        : userDetails.lookingFor === 'frontend' 
          ? 'Frontend Developer'
          : userDetails.lookingFor === 'backend'
            ? 'Backend Developer'
            : userDetails.lookingFor === 'fullstack'
              ? 'Fullstack Developer'
              : 'Python Developer';
              
      return `Hi recruiter looking for a ${role} in ${userDetails.state}, ${userDetails.country}, `;
    }
    
    return "Hi, ";
  };

  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">{getGreeting()}my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
          Yashwant Kumaar
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am</span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-End-Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Back-End-Developer")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
          {userDetails?.userType === 'recruiter' 
            ? `I specialize in ${userDetails.lookingFor === 'frontend' 
                ? 'frontend development with modern frameworks and responsive design'
                : userDetails.lookingFor === 'backend'
                ? 'backend development with scalable architecture and efficient APIs'
                : userDetails.lookingFor === 'fullstack'
                ? 'full-stack development covering both frontend and backend technologies'
                : userDetails.lookingFor === 'python'
                ? 'Python development with expertise in various frameworks and applications'
                : 'web development'}`
            : 'With a passion for creating captivating user experiences, I specialize in developing web applications using modern technologies while incorporating appealing design principles'
          }
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold">
            View Work{" "}
            <span className="group-hover:translate-x-1 duration-300">
              {" "}
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;