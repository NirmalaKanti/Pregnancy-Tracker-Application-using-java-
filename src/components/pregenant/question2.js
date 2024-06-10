import React from 'react';
import { Link } from 'react-router-dom';
const EmotionalDevelopmentScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-600 text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Maa your emotions shape my personality</h1>
        <p className="text-lg mt-2">Do you want to give me more positive qualities?</p>
        {/* Placeholder for embryo illustration */}
        <div className="my-4">
         <img src="https://cdn3.iconfinder.com/data/icons/baby-155/512/baby_kid_crawling_girl_daughter_happy-256.png" alt="Bab3" />
        </div>
        <div className="flex justify-center gap-4">
          <Link to="/pregenant/question3" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            YES
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            YES, OF COURSE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmotionalDevelopmentScreen;
