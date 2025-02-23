import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { BsFillFileTextFill } from "react-icons/bs";

const actsCard = ({ name, description }) => {
    return (
        <div>
            <div className='bg-[#F5F5F5]/20 rounded-[20px] p-4'>
                <div className="flex items-center justify-between text-xl">
                    <BsFillFileTextFill className="text-white" />
                    <h1 className="flex-grow font-bold pl-3 text-white ">{name}</h1>
                    <MdOutlineFileDownload className="text-white" />
                </div>
                <div className='mt-3'>
                    <p className='text-white text-sm text-gray-400'>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default actsCard
