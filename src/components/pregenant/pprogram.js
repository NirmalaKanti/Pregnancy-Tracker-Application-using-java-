import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
// import pregnancyData from './pregnancyData'; // Assuming you have pregnancy data imported from a separate file

const PProgram = () => {
  

  return (
    <div className="flex justify-between w-[80%] mx-auto">
      <LeftSidebar />
     <h1>Program</h1>
      <RightSidebar />
    </div>
  );
};

export default PProgram;
