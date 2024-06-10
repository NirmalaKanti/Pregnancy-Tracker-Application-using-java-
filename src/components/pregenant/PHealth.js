import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import pregnancyData from './pregnancyData'; // Assuming you have pregnancy data imported from a separate file

const PHealth = () => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const handlePrevWeek = () => {
    if (currentWeek > 1) {
      setCurrentWeek(currentWeek - 1);
    }
  };

  const handleNextWeek = () => {
    if (currentWeek < pregnancyData.length) {
      setCurrentWeek(currentWeek + 1);
    }
  };

  const weekData = pregnancyData.find((week) => week.week === currentWeek);

  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
      <div className="bg-white rounded-lg p-4 shadow-lg w-[60%]">
        <div className="  bg-white rounded-lg">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-4xl font-semibold text-blue-700">{weekData ? `Week ${weekData.week}` : 'Loading...'}</h2>
              <span className="text-gray-500 text-lg">
                ({weekData ? `${40 - weekData.week} weeks behind` : ''})
              </span>
            </div>

            <div className=" rounded-full mb-4 flex justify-center items-center">
              {/* Placeholder for baby illustration */}
              {weekData ? (
                <img
                  src={weekData.images.baby}
                  alt={`Week ${weekData.week} Baby`}
                  className="max-w-md w-full h-auto rounded-full"
                />

              ) : (
                <span>Baby loading...</span>
              )}
            </div>
            <div className="text-center mb-4">
              <p>{weekData ? 'We\'ll happily wait for you' : 'Loading...'}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                KNOW MORE
              </button>
              <div className="flex justify-around p-2 text-sm">
                <button onClick={handlePrevWeek} className="cursor-pointer bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300">Prev</button>
                <button onClick={handleNextWeek} className="cursor-pointer bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition duration-300">Next</button>
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <h3 className="font-bold text-3xl mb-2">Weekly Reads</h3>
            {weekData ? (
              <>
                <div className="mb-4 border border-gray-200 rounded p-4">
                <img className="h-10 w-10 rounded-full border border-gray-300 mr-3" src={weekData.weeklyReads.pic1} alt="Small square image" />
                  <h4 className="font-semibold text-2xl">{weekData.weeklyReads.content1}</h4>
                  <span className="text-s text-gray-600">2 mins read</span>
                </div>
                <div className="mb-4 border border-gray-200 rounded p-4">
                  <p className="font-semibold text-2xl">{weekData.weeklyReads.content2}</p>
                  <span className="text-s text-gray-600">2 mins read</span>
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>



        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default PHealth;
