import React from 'react'
import Group2 from '../assets/Group2.svg'

function Mission(props) {
  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      
      <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-black">
        Mission
      </h1>
      <p className="flex flex-col justify-center text-lg  mt-4 text-[#6c6e25]">
       {props?.data?.mission_paragraph}.
      </p>
      
    </div>
  )
}

export default Mission