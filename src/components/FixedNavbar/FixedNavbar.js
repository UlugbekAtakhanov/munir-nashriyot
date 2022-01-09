import React from 'react'
import { Link } from 'react-router-dom'

const FixedNavbar = () => {
    return (
        <div className=' xl:container xl:mx-auto flex justify-end gap-4 px-2 sm:flex-col md:flex-row md:justify-between'>

            <div className='flex items-center justify-between '>
                <img className="w-32 lg:mr-4" src="../images/Asset 9@3x.png" alt="" /> 
                {/* language and user icons */}
                <div className=" hidden language sm:flex justify-end items-center gap-4 md:gap-8 md:hidden py-3">
                    <Link to = "">
                        <img className="img1 w-6 md:w-10" src="../images/user.png" alt="" />
                    </Link>
                    <Link to = "">
                        <img className="img2 w-14 md:w-16" src="../images/Asset 12@4x.png" alt="" />
                    </Link>
                </div>
            </div>


            <ul className='hidden sm:flex sm:items-center sm:justify-start sm:py-2 lg:py-0 lg:flex md:flex-1 sm:divide-x-[1px] divide-gray-400 lg:divide-x-0'>
                <li className='text-white uppercase hover:bg-gray-500 lg:border-b-0 whitespace-nowrap text-center py-2 '>
                    <Link style={{style: "Bahnschrift"}} to = "/" className='text-xs lg:border-r border-gray-500 py-2 px-4 block'>
                        Yangiliklar
                    </Link>
                </li>
                    <li className='text-white uppercase hover:bg-gray-500 lg:border-b-0 whitespace-nowrap text-center py-2 '>
                        <Link style={{style: "Bahnschrift"}} to = "" className='text-xs lg:border-r border-gray-500 py-2 px-4 block'>
                            Kitoblar
                        </Link>
                    </li>
                    <li className='text-white uppercase hover:bg-gray-500 lg:border-b-0 whitespace-nowrap text-center py-2 '>
                        <Link style={{style: "Bahnschrift"}} to = "" className='text-xs lg:border-r border-gray-500 py-2 px-4 block'>
                            Elektron Kitoblar
                        </Link>
                    </li>
                    <li className='text-white uppercase hover:bg-gray-500 lg:border-b-0 whitespace-nowrap text-center py-2 '>
                        <Link style={{style: "Bahnschrift"}} to = "" className='text-xs lg:border-r border-gray-500 py-2 px-4 block'>
                            Audio kitoblar
                        </Link>
                    </li>
                    <li className='text-white uppercase lg:bg-gray-500 hover:bg-gray-500 lg:border-b-0 whitespace-nowrap text-center py-2 '>
                        <Link style={{style: "Bahnschrift"}} to = "/aloqa" className='text-xs lg:border-r border-gray-500 py-2 px-4 block'>
                            biz bilan aloqa
                        </Link>
                    </li>
            </ul>
                <div className="hidden language md:flex justify-end items-center md:ml-12 gap-4 py-3">
                    <Link style={{style: "Bahnschrift"}} to = "">
                        <img className="img1 w-6" src="../images/user.png" alt="" />
                    </Link>
                    <Link style={{style: "Bahnschrift"}} to = "">
                        <img className="img2 w-12" src="../images/Asset 12@4x.png" alt="" />
                    </Link>
                </div>
        </div>
    )
}

export default FixedNavbar
