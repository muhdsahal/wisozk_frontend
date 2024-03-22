import React from 'react'

function Momentum(props) {
  return (
    <div>
        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-black">
            Momentum
            </h1>
            <p className="flex flex-col justify-center text-lg  mt-4 text-[#6c6e25]">
                {props?.data?.momentum}
            </p>
        </div>

        <div className="flex flex-col justify-center items-center p-10">
            <h1 className="block font-sans text-5xl antialiased font-semibold leading-tight tracking-normal text-black">
            Recognitions
            </h1>
            <p className="flex flex-col justify-center text-lg  mt-4 text-[#6c6e25]">
            {props?.data?.recognitions}
            </p>
        </div>
    </div>
  )
}

export default Momentum