

import React from 'react'
import { Typography, Button, } from "@material-tailwind/react";
import BannerImage from '../assets/BannerImage.png'
import Group from '../assets/Group4.svg'
import { FaArrowCircleDown } from "react-icons/fa";
import {ArrowDownIcon} from "@heroicons/react/24/outline";
import Rounded from '../assets/Vector.svg'
function Banner(props) {
  return (
    <div className="relative h-full max-w-screen-xxl">
      <img
        src={props?.data?.banner_img}
        alt="image 3"
        className="h-full max-w-screen-xxl object-cover"
      />

      <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
        <div class='bottomright'>
          <img src={Group} alt="" />
        </div>
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
           {props.data.banner_heading}
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            {props.data.banner_paragraph}
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" className="flex p-2 px-4 text-white items-center gap-3 rounded-full bg-[#fafafa31]">
              Explore more..
              <ArrowDownIcon className='w-8 h-8  p-1 text-white rounded-full bg-deep-purple-500'/>
            </Button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner