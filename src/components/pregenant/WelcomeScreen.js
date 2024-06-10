import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hi Mumma</h1>
        <p className="text-xl mt-2">Do you want to know the biggest secrets of pregnancy?</p>
        {/* Placeholder for baby illustration */}
        <div className="my-4">
          {/* <svg
            className="mx-auto h-48 w-48 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
          
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19V6l-2.293 2.293a1 1 0 001.414 1.414L12 5l3.879 3.879a1 1 0 001.414-1.414L15 6v13"
            />
          </svg> */}
       <img src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Son-512.png" alt="Baby1" />

        </div>
        <Link to="/pregenant/question1" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
          YES BABY, I WANT TO KNOW
        </Link>
        <div className="absolute top-4 right-4">
          <button className="text-gray-400 hover:text-gray-100">SKIP</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;