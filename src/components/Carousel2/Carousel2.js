import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Carousel2.scss"
import {IconContext} from 'react-icons'



const Carousel2 = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <div data-value = "1" className=' px-8 py-16'>
            <div className='aspect-[3/4] border card-5 border-black/25 rounded-2xl overflow-hidden'>
                <div className='div1   bg-[#090C19] relative'>
                    <div className=' border-4 border-white rounded-2xl bg-[#979797] h-[100%] w-[30%] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='object-cover' src="./images/Asset 13@4x.png" alt="" />
                    </div>
                </div>
                <div className='div2  bg-[#EEEEEE] flex flex-col justify-center'>
                    <p className='text-center mt-3 text-lg text-customRed'>QUR’ONI KARIM</p>
                    <p className='text-center mb-4 text-[13px]'>Madina mus’hafi</p>
                    <p className='text-center text-[15px] mb-2 px-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                </div>
            </div>
        </div>,

        <div data-value = "1" className=' px-8 py-16'>
            <div className='aspect-[3/4] border card-5 border-black/25 rounded-2xl overflow-hidden'>
                <div className='div1   bg-[#090C19] relative'>
                    <div className=' border-4 border-white rounded-2xl bg-[#979797] h-[100%] w-[30%] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='object-cover' src="./images/Asset 13@4x.png" alt="" />
                    </div>
                </div>
                <div className='div2  bg-[#EEEEEE] flex flex-col justify-center'>
                    <p className='text-center mt-3 text-lg text-customRed'>QUR’ONI KARIM</p>
                    <p className='text-center mb-4 text-[13px]'>Madina mus’hafi</p>
                    <p className='text-center text-[15px] mb-2 px-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                </div>
            </div>
        </div>,

        <div data-value = "1" className=' px-8 py-16'>
            <div className='aspect-[3/4] border card-5 border-black/25 rounded-2xl overflow-hidden'>
                <div className='div1   bg-[#090C19] relative'>
                    <div className=' border-4 border-white rounded-2xl bg-[#979797] h-[100%] w-[30%] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='object-cover' src="./images/Asset 13@4x.png" alt="" />
                    </div>
                </div>
                <div className='div2  bg-[#EEEEEE] flex flex-col justify-center'>
                    <p className='text-center mt-3 text-lg text-customRed'>QUR’ONI KARIM</p>
                    <p className='text-center mb-4 text-[13px]'>Madina mus’hafi</p>
                    <p className='text-center text-[15px] mb-2 px-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                </div>
            </div>
        </div>,

        <div data-value = "1" className=' px-8 py-16'>
            <div className='aspect-[3/4] border card-5 border-black/25 rounded-2xl overflow-hidden'>
                <div className='div1   bg-[#090C19] relative'>
                    <div className=' border-4 border-white rounded-2xl bg-[#979797] h-[100%] w-[30%] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='object-cover' src="./images/Asset 13@4x.png" alt="" />
                    </div>
                </div>
                <div className='div2  bg-[#EEEEEE] flex flex-col justify-center'>
                    <p className='text-center mt-3 text-lg text-customRed'>QUR’ONI KARIM</p>
                    <p className='text-center mb-4 text-[13px]'>Madina mus’hafi</p>
                    <p className='text-center text-[15px] mb-2 px-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                </div>
            </div>
        </div>,

        <div data-value = "1" className=' px-8 py-16'>
            <div className='aspect-[3/4] border card-5 border-black/25 rounded-2xl overflow-hidden'>
                <div className='div1   bg-[#090C19] relative'>
                    <div className=' border-4 border-white rounded-2xl bg-[#979797] h-[100%] w-[30%] absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <img className='object-cover' src="./images/Asset 13@4x.png" alt="" />
                    </div>
                </div>
                <div className='div2  bg-[#EEEEEE] flex flex-col justify-center'>
                    <p className='text-center mt-3 text-lg text-customRed'>QUR’ONI KARIM</p>
                    <p className='text-center mb-4 text-[13px]'>Madina mus’hafi</p>
                    <p className='text-center text-[15px] mb-2 px-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
                </div>
            </div>
        </div>,
    ];
    const responsive = {
        300: { items: 1 },
        650: { items: 2 },
        1024: { items: 3 },
    };

    return (
        <IconContext.Provider value = {{size: "30px", color: "hsl(205, 77%, 27%)"}}>
            <div className = "carousel2 ">
                    <AliceCarousel 
                        mouseTracking
                        items={items} 
                        autoPlay = {true} 
                        autoPlayInterval = {5000} 
                        responsive = {responsive}
                        infinite = {true}
                        disableDotsControls = {false}
                        disableButtonsControls = {false}
                        className = "border-4 border-red-500"
                        />   
            </div>
        </IconContext.Provider>

    )
}

export default Carousel2
