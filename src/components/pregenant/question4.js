import React from 'react';
import { Link } from 'react-router-dom';
const ActivityScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-800 to-black text-white p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Your physical activity enhances my growth</h1>
        <p className="text-lg mt-2">Are you physically active mumma?</p>
        {/* Placeholder for cartoon baby illustration */}
        <div className="my-4">
        <img src="https://cdn2.iconfinder.com/data/icons/funtime-animals-humans/60/004_028_boy_baby_human_newborn_happy_child-512.png" alt="Baby5" />
        </div>
        <div className="flex justify-center gap-4">
          <Link to="/cover"className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            YES
          </Link>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            I DON'T THINK SO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityScreen;
