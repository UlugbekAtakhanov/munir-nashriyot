import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'


import Carousel2 from '../../components/Carousel2/Carousel2'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Navbar2 from '../../components/Navbar2/Navbar2'
import Yangiliklar from '../../components/Yangiliklar/Yangiliklar'

const Asosiy = () => {

    // const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const {isSideBarOpen, setIsSideBarOpen} = useGlobalContext()

    useEffect(() => {
        setIsSideBarOpen(false)
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* container1 */}
            <div className='border bg-black'>

                <div className="xl:container mx-auto px-2">

                    <div className=' absolute top-4 left-4 cursor-pointer sm:hidden' onClick={() => setIsSideBarOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                            <path className='text-white' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <div className="hidden language sm:flex justify-end items-center gap-4 py-3 ">
                        <Link to = "">
                            <img className="img1 w-7" src="./images/user.png" alt="" />
                        </Link>
                        <Link to = "">
                            <img className="img2 w-12" src="./images/Asset 12@4x.png" alt="" />
                        </Link>
                    </div>

                    {/* logo */}
                    <img className='w-[15rem] block mx-auto py-8 md:pb-16' src="./images/Asset 6@4x.png" alt="" />

                    <Navbar />
                    <Navbar2 setIsSideBarOpen = {setIsSideBarOpen} isSideBarOpen = {isSideBarOpen} />

                </div>

            </div>

            <div className=" overflow-x-hidden   ">
                <Carousel2 />
            </div>

            <div className="yangiliklar">
                <Yangiliklar />
            </div>

            <Footer />



        </>
    )
}

export default Asosiy
