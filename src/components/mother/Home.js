import React, { useEffect } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet, useNavigate } from "react-router-dom";
// import "../assets/4124024-uhd_4096_2160_25fps.mp4"

const Home = () => {
  

  return (

    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <div className="relative bg-white rounded-lg p-4 shadow-lg w-[60%]">
        <div className="absolute top-5 left-7">
          <div className="flex items-center">
            <img src="https://cdn3.iconfinder.com/data/icons/people-emoji/50/Baby1-256.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <div className="ml-2">
              <p className="text-xs text-center font-semibold">Demo</p>
              <p className="text-xs text-center font-bold">25 Month</p>
            </div>
          </div>
          <div className='bg-emerald-300 solid text-white px-3 py-1 rounded my-3'>
            <p>0 VACCINES THIS MONTH</p>

          </div>
          <div className='relative ml-4 flex justify-center'> {/* Adjusted margin and added flex utilities */}
            <div className="w-32 h-32 relative p-7 mr-4"> {/* Adjusted margin */}
              <video controls className="absolute inset-0 w-full h-full rounded-md" style={{ objectFit: 'cover' }}>
                <source src="4124024-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col justify-center"> {/* Added flex utilities */}
              <div className="flex items-center mb-2"> {/* Added flex utilities */}
                <img src="https://cdn3.iconfinder.com/data/icons/medical-2237/512/scales-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
                <p className="ml-2">Ideal Weight Range</p> {/* Added margin-left to create space */}
              </div>
              <div className="flex items-center"> {/* Added flex utilities */}
                <img src="https://cdn3.iconfinder.com/data/icons/measuring-body-weight-and-height/265/measuring-measure-002-256.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
                <p className="ml-2">Ideal Height Range</p> {/* Added margin-left to create space */}
              </div>
            </div>
          </div>


        </div>
        <div className="absolute top-5 right-7">
          <img src="https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/message-256.png" alt="Message Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
          <p className="text-xs text-center font-bold">Message Us</p>
        </div>
        <br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className='flex justify-center'>
          <div className='align-center bottom-0 text-center bg-orange-500 solid text-white px-6 py-2 rounded my-5 w-[40%]'>
            <p>KNOW MORE ABOUT US</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* First row */}
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn2.iconfinder.com/data/icons/medical-marijuana-2/64/marijuana-meal-recipes-food-cook-weed-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>RECIPES</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn4.iconfinder.com/data/icons/multimedia-flat-19/32/Headphone-256.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>MUSIC</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn2.iconfinder.com/data/icons/thanksgiving-filled-outline-2/64/bible_reading_woman_thanksgiving_religion-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>STORIES</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn0.iconfinder.com/data/icons/mobile-app-development-flat/60/User-Stories-person-avatar-story-256.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>MUSIC</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn1.iconfinder.com/data/icons/yoga-23/24/yoga-03-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>YOGA</p>
          </div>
          {/* Second row */}
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn3.iconfinder.com/data/icons/home-activity-1/512/meditation-yoga-wellness-relax-relaxing-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>MEDITAION</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Son-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>BABY ACTIVITIES</p>
          </div>
          <div className="text-center flex flex-col items-center">
            <img src="https://cdn3.iconfinder.com/data/icons/baby-154/512/mom_hug_baby_kid_lovely_beloved_daughter-64.png" alt="Baby Icon" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
            <p>PARENTING GUIDING</p>
          </div>
        </div>
       </div>
      <RightSidebar />
    </div>
  )
}

export default Home



