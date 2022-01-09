import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'

import FixedNavbar from "../../components/FixedNavbar/FixedNavbar"
import Navbar2 from '../../components/Navbar2/Navbar2'
import Footer from '../../components/Footer/Footer'

const Aloqa = () => {
    // const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const {isSideBarOpen, setIsSideBarOpen} = useGlobalContext()

    useEffect(() => {
        setIsSideBarOpen(false)
        window.scrollTo(0, 0)
    }, [])



    return (
        <div>
            {/* NAVBARS ALTOGETHER */}
            <div className='fixed top-0 left-0 w-full'>
                <Navbar2 setIsSideBarOpen = {setIsSideBarOpen} isSideBarOpen = {isSideBarOpen} />

                {/* fixed navbar */}
                <div className='bg-black px-1 py-2 '>

                    <div className=' absolute top-4 left-4 cursor-pointer sm:hidden' onClick={() => setIsSideBarOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                            <path className='text-white' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <FixedNavbar/>
                    
                </div>
            </div>


            <div className='bg-[#969696] mx-auto w-3/4 mt-20 mb-8 sm:mt-40 md:mt-24 lg:mb-12 lg:ml-12 rounded-full'>
                <p className='text-white text-lg sm:text-2xl lg:text-5xl text-center py-2 uppercase tracking-[2px]' style={{fontFamily: "Bahnschrift"}}>biz bilan aloqa</p>
            </div>

            <div className=' px-4 lg:px-12 lg:grid grid-cols-2 lg:gap-8 mb-8'>

                <div className='mb-12'>
                    <p className='uppercase text-black text-[13px] mb-4' style={{fontFamily: "Arial, regular"}}><span className='font-bold text-[14px]'>bizning manzil:</span> toshkent shahri, alisher navoi ko'chasi, 44, munir kitoblar do'koni</p>
                    <div className=''>
                        <iframe className='w-full h-80 mb-6' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95912.40257034557!2d69.28501078820344!3d41.303150998983334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1639806963984!5m2!1suz!2s"  allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <p className='w-1/2 text-black uppercase text-sm font-bold mb-4' style={{fontFamily: "Arial"}}>Bizni ijtimoiy tarmoqlarda kuzatib boring:</p>
                    <Link to = "" className='uppercase text-black font-bold text-xs mb-2 flex items-center gap-1'>
                        <img className='w-6' src="./images/telegram.png" alt="" />
                        @bookmarket24
                    </Link>
                    <Link to = "" className='uppercase text-black font-bold text-xs mb-2 flex items-center gap-1'>
                        <img className='w-6' src="./images/instagram.png" alt="" />
                        @bookmarket24.uz
                    </Link>
                    <Link to = "" className='uppercase text-black font-bold text-xs mb-2 flex items-center gap-1'>
                        <img className='w-6' src="./images/facebook.png" alt="" />
                        fb.me/bookmarket24
                    </Link>
                    <Link to = "" className='uppercase text-black font-bold text-xs mb-2 flex items-center gap-1'>
                        <img className='w-6' src="./images/phone.png" alt="" />
                        (+998) 71 244 45 45
                    </Link>
                </div>

                <form className=' lg:px- flex flex-col' autoComplete='off'>
                    <div className='bg-gray-300 text-center text-gray-500 rounded-lg py-1 mb-4 border-2 border-gray-400' style={{fontFamily: "Arial"}}>BIZGA XAT YOZISH UCHUN</div>
                    <div className='border rounded-lg flex items-center px-2 gap-2 mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className='text-gray-500' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <input style={{fontFamily: "Montserrat-Regular"}} className=' text-sm p-1 outline-none flex-1' type="text" name="name" id="name" placeholder='Ismingiz' />
                    </div>
                    <div className='border rounded-lg flex items-center px-2 gap-2 mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className='text-gray-500' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                        <input style={{fontFamily: "Montserrat-Regular"}} className=' text-sm p-1 outline-none flex-1' type="email" name="email" id="email" placeholder='e-mail adressingizni kiriting' />
                    </div>
                    <div className='border rounded-lg flex items-start px-2 gap-2 mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className='text-gray-500' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <textarea style={{fontFamily: "Montserrat-Regular"}} className='outline-none text-sm flex-1 text-gray-500' name="text" id="" cols="30" rows="10" placeholder='Habarni kiriting'></textarea>
                    </div>
                    <button  style={{fontFamily: "Montserrat-SemiBold"}} className='bg-[#F8AD3B] transition-all py-2 rounded text-white uppercase tracking-[1px] text-sm hover:bg-amber-500' type='button'>yuborish</button>
                </form>

            </div>


            <Footer />


        </div>
    )
}

export default Aloqa
