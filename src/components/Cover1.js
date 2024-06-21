import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import image from '../assets/pregnancy-nutrition-food-healthcare-infographics-illustration-vector.jpg';
import image2 from '../assets/image_yoga.jpg';
import './Cover.css';
import { food_list } from '../assets/assets';
import { yoga_list } from '../assets/assets';
import { SiD } from 'react-icons/si';
import Chatbot from './Chatbot.js';

const Cover = () => {

  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleExploreNow = () => {
    navigate('/pregnant/Signin');
  };

  function handleImageClick(link) {
    window.open(link, '_blank');
  }

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <>
    <nav className={`fixed top-0 left-0 w-full text-white py-4 px-6 flex justify-between items-center ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
            {/* Company Logo */}
            <Link to="/" className="flex items-center space-x-2">
                <img src="https://cdn1.iconfinder.com/data/icons/charity-and-donation-12/66/27_human_welfare_social_welfare_temporal_welfare_social_care_social_protection_welfare-256.png" alt="Company Logo" className="h-10 w-auto" />
                <h1 className="text-gray-700 text-xl font-bold">We Care</h1>
            </Link>

            {/* Navigation Links */}
            <ul className="flex space-x-12 text-gray-700 font-sans">
                <li>
                    <Link to="/" className="text-gray-700 hover:text-blue-600 text-xl">Home</Link>
                </li>
               
            </ul>

            {/* Signup Button */}
            <Link to="/pregnant/login" className="bg-orange-500 py-2 px-4 rounded-lg text-white font-semibold hover:bg-orange-300">Login</Link>
        </nav>
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-orange-100 rounded-b-full"></div> */}
      <div className="mt-20 min-h-screen flex flex-col justify-between">
        <div className="p-8">
          <div className="flex items-center justify-center min-h-screen">
            <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646ed44637054a8cb19bb579_Component%201.png" alt="Left Image" className="w-1/4 h-auto object-cover rounded-lg mr-4 mb-24" />
            <div className="text-center mt-[-26vh]">
              <h1 className="text-6xl font-bold text-gray-800 mb-4">Get The Best</h1>
              <h1 className="text-6xl font-bold text-gray-800 mb-4">Pregnancy Care</h1>
              <h2 className="text-4xl text-gray-800 mb-8">with WeCare</h2>
              <button className="bg-orange-500 text-white py-5 px-10 rounded-lg font-semibold hover:bg-orange-600 text-3xl" onClick={handleExploreNow}>
                Explore Now
              </button>
            </div>
            <img src="https://assets-global.website-files.com/6305ab39bd83e6b704958561/646ed446c155e528ca4574b1_Component%202.png" alt="Right Image" className="w-1/4 h-auto object-cover rounded-lg ml-4 mb-24" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cover;
