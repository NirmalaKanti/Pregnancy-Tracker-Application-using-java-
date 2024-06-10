import React from 'react';
import { Link } from 'react-router-dom';
const NutritionScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">What you eat today, defines my future health</h1>
        <p className="text-lg mt-2">Are you eating well, mumma?</p>
        {/* Placeholder for fetus illustration */}
        <div className="my-4">
        <img src="https://cdn3.iconfinder.com/data/icons/baby-149/500/baby_bath_happy_hygiene_care_cute_clean_healthy-512.png" alt="baby4" />
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <Link to="/pregenant/question4" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            YES I AM
          </Link>
          <Link to="/pregenant/question4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            I'M NOT SURE
          </Link>
        </div>
        <div className="bg-orange-500 p-4 rounded-lg">
          <p className="text-lg">
            Don't worry Mumma, iMumz gives you weekly meal plans for my good growth.
          </p>
          <br />
    
          <Link to="/pregenant/question4" className="bg-white text-orange-500 font-bold py-2 px-4 rounded-full mt-4">
            CONTINUE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NutritionScreen;
