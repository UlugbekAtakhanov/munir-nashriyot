import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar2.scss"


const Navbar2 = ({isSideBarOpen, setIsSideBarOpen}) => {

    if (isSideBarOpen) {
        return (
            <div className='w-screen fixed top-0 left-0 bg-black/50 h-screen z-10 ' style={{transition: ".5s"}}>
                <div className='bg-black w-3/4 h-full border-r border-white/50 p-2 opacity-100' style={{transition: ".5s"}}>

                    <div className='flex items-center justify-between border-b border-customRed/75 pb-2' onClick={() => setIsSideBarOpen(false)}>
                        <img className="w-32" src="../images/Asset 9@3x.png" alt="" /> 
                        <svg className=' text-white/75 h-8 w-8 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <ul>
                        <li className='hover:bg-customRed hover:pl-5 transition-all   text-white uppercase sm:border-b lg:border-b-0 whitespace-nowrap lg:border-r border-red-700 p-2'>
                            <Link style={{fontFamily: "Bahnschrift"}} to = "/" >
                                Yangiliklar
                            </Link>
                        </li>
                        <li className='hover:bg-customRed hover:pl-5 transition-all text-white uppercase sm:border-b lg:border-b-0 whitespace-nowrap lg:border-r border-red-700 p-2'>
                            <Link style={{fontFamily: "Bahnschrift"}} to = "">
                                Kitoblar
                            </Link>
                        </li>
                        <li className='hover:bg-customRed hover:pl-5 transition-all text-white uppercase sm:border-b lg:border-b-0 whitespace-nowrap lg:border-r border-red-700 p-2'>
                            <Link style={{fontFamily: "Bahnschrift"}} to = "">
                                Elektron Kitoblar
                            </Link>
                        </li>
                        <li className='hover:bg-customRed hover:pl-5 transition-all text-white uppercase sm:border-b lg:border-b-0 whitespace-nowrap lg:border-r border-red-700 p-2'>
                            <Link style={{fontFamily: "Bahnschrift"}} to = "">
                                Audio kitoblar
                            </Link>
                        </li>
                        <li className='hover:bg-customRed hover:pl-5 transition-all text-white uppercase sm:border-b lg:border-b-0 whitespace-nowrap lg:border-r border-red-700 p-2'>
                            <Link style={{fontFamily: "Bahnschrift"}} to = "/aloqa">
                                biz bilan aloqa
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        )
    }
    return (
        <div className='w-0 fixed top-0 left-0 bg-black/50 h-screen z-10' style={{transition: ".5s"}}>
            <div className='bg-black w-3/4 h-full border-r border-white/50 opacity-0' style={{transition: ".5s"}}>

            </div>
        </div>
    )
    
}

export default Navbar2
