import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa6";
import { IoMdSwap } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { AiOutlineUserDelete } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';


const PregnancyCalculator = () => {
    const[lmp,setLmp]=useState('');
    const[edd,setEdd]=useState('');
    const[weeksPregnant,setWeeksPregnant]=useState('');
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
    <LeftSidebar />
    <div className='my-4 flex flex-col items-center'>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <AiOutlineLike size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Rate Us</h1>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <FaShare size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Share it</h1>
    </div>
    <Link to="/mother/login" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <IoMdSwap size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Use Parenting Mode</h1>
    </Link>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <IoCalendarNumber size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Change LMP</h1>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <IoCalendarNumber size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Change EDD</h1>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <MdPrivacyTip size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Privacy Policy</h1>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <IoStar size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Message Us</h1>
    </div>
    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <AiOutlineUserDelete size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Delete Account</h1>
    </div>
    <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
        <div>
            <AiOutlineLogout size="24px" />
        </div>
        <h1 className='font-bold text-lg ml-2'>Logout</h1>
    </Link>
</div>

    <RightSidebar/>
  </div>
  )
}

export default PregnancyCalculator