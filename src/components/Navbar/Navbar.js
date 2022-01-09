import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            
            <div className='sm:border-t-2 sm:border-customRed'>
                <ul className='hidden sm:grid grid-cols-2 gap-4 lg:flex items-center sm:pb-4 lg:pb-0'>
                    <img className="w-32" src="./images/Asset 9@3x.png" alt="" /> 
                    <li className='text-white uppercase lg:bg-customRed sm:border-b lg:border-b-0 whitespace-nowrap  py-2 '>
                        <Link to = "/" className='lg:border-r border-customRed py-2 px-4 block'>
                            Yangiliklar
                        </Link>
                    </li>
                        <li className='text-white uppercase hover:bg-customRed sm:border-b lg:border-b-0 whitespace-nowrap  py-2 '>
                            <Link to = "" className='lg:border-r border-customRed py-2 px-4 block'>
                                Kitoblar
                            </Link>
                        </li>
                        <li className='text-white uppercase hover:bg-customRed sm:border-b lg:border-b-0 whitespace-nowrap  py-2 '>
                            <Link to = "" className='lg:border-r border-customRed py-2 px-4 block'>
                                Elektron Kitoblar
                            </Link>
                        </li>
                        <li className='text-white uppercase hover:bg-customRed sm:border-b lg:border-b-0 whitespace-nowrap  py-2 '>
                            <Link to = "" className='lg:border-r border-customRed py-2 px-4 block'>
                                Audio kitoblar
                            </Link>
                        </li>
                        <li className='text-white uppercase hover:bg-customRed sm:border-b lg:border-b-0 whitespace-nowrap  py-2 '>
                            <Link to = "/aloqa" className=' border-customRed py-2 px-4 block'>
                                biz bilan aloqa
                            </Link>
                        </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
