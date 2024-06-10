import React from 'react'
import RightSidebar from './RightSidebar'
import LeftSidebar from './LeftSidebar'

const Program = () => {
  return (
    <>
    <div className='flex justify-between w-[80%] mx-auto'>
  
    <LeftSidebar/> 
    <h1>Programs  </h1> 
   <RightSidebar/>
   </div>
   </>
  )
}

export default Program