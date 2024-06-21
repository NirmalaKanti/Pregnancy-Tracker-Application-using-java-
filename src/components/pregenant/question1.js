import React from 'react';
import { Link } from 'react-router-dom';

const StressManagementScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-black text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Hi Mumma</h1>
        <p className="text-lg mt-2 text-white">Do you want to know the biggest secrets of pregnancy?</p>
        <h1 className="text-2xl font-bold text-white mt-4">Stress hormones decrease my IQ by 10 points!</h1>
        <p className="text-lg mt-2 text-white">Do you want to know how to reduce stress?</p>
        {/* Placeholder for cartoon character illustration */}
        <div className="my-4">
          <img src="https://cdn3.iconfinder.com/data/icons/about-love-1/500/little_child_baby_young_kid_love_infant_care_childhood_newborn-256.png" alt="Baby2" />
        </div>
        <div className="flex justify-center gap-4">
          <Link to="/pregenant/question2" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            YES, I WANT TO KNOW
          </Link>
          <Link to="/pregenant/question2" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            NO, I'M AWARE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StressManagementScreen;
