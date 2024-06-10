import React from 'react';
import { IoMdHome } from "react-icons/io";
import { MdLiveTv } from "react-icons/md";

import { MdHealthAndSafety } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiTelevisionBold } from "react-icons/pi";
// import { PiTelevisionBold } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { Link,useNavigate } from 'react-router-dom';
// import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
// import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast"
// import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';
import { RiQuestionnaireFill } from "react-icons/ri";

const LeftSidebar = () => {

    // const {user} = useSelector(store=>store.user);
    const navigate = useNavigate();
  

    return (
        <div className='w-[20%]'>
            <div>
                {/* <div>
                    <img className='ml-5' width={"24px"} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-1200x1227.png" alt="twitter-logo" />
                </div> */}
                <div className='my-4 '>
                    <Link to="/pregenant/home" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                            <IoMdHome size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Home</h1>
                    </Link>
                    <Link to="/pregenant/health" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                            <MdHealthAndSafety size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Health</h1>
                    </Link>
                    <Link to="/pregenant/program" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                            <CiUser size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Program</h1>
                    </Link>
                        {/* <Link to ="/pregenant/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                            <div>
                                <CiUser size="24px" />
                            </div>
                            <h1 className='font-bold text-lg ml-2'>Profile</h1>
                        </Link> */}
                    <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                            <RiQuestionnaireFill size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Ask Doctor</h1>
                    </div>
                    {/* <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
                        <div>
                            <AiOutlineLogout size="24px" />
                        </div>
                        <h1 className='font-bold text-lg ml-2'>Logout</h1>
                    </div> */}
                     {/* <button className='px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button> */}
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar