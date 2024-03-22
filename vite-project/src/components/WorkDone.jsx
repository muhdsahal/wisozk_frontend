import React from 'react'
import img1 from "../assets/BannerImage.png";


function WorkDone(props) {
    const works = [
        {
          id: props?.data?.work_done,
          name: img1,
        },
        {
          id: props?.data?.work_done,
          name: img1,
        },
        {
          id: props?.data?.work_done,
          name: img1,
        },
        {
          id: props?.data?.work_done,
          name: img1,
        },
        {
          id: props?.data?.work_done,
          name: img1,
        },
      ];
  return (
    <div>
        <div className="bg-[#d0f4deea]">
        <div className="mx-auto container py-7">
          <h1 className="text-center text-[#161616ce]  text-[2.3rem] font-semibold">
            Works Done
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-8 w-full">
            {works.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center w-full"
                >
                  <div className="w-[13rem] h-[13rem] border-4 z-30 border-[#fff] rounded-full">
                    <img
                      className="object-cover h-full w-full rounded-full border-5"
                      src={item.name}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
            <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-black">
            Compliments
            </h1>
            <p className="flex flex-col justify-center text-lg  mt-4 text-[#6c6e25]">
            {props?.data?.compliments}
            </p>
        </div>
    </div>
  )
}

export default WorkDone;