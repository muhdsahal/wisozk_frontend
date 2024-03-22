import { Typography } from '@material-tailwind/react'
import React from 'react'

import Group3 from '../assets/Group3.svg'


function Vision(props) {
    return (
        <div className="flex flex-col justify-center items-center p-10 h-64 md:h-96 lg:h-auto bg-[rgb(11,9,46)]">
            <div className='self-start flex'>
            <img src={Group3} alt="img"  width="150" height="100" className='bg-[rgb(11,9,46)]' />
            
            </div>
            <div className='flex justify-center items-center text-justify'>
            <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal  text-white">
                Vision
            </h1>
            </div>
                
            <p className="flex flex-col justify-center text-lg  mt-4 text-[#757ed0]">
                {props?.data?.vision_paragraph}
            </p>
        </div>
    )
}

export default Vision