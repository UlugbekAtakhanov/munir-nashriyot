import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "./Yangiliklar.scss"
import { useGlobalContext } from '../../context'

const data = [
    {
        img: "./images/Asset 13@4x.png", title: "OHIRAT KUNIGA TAYYORGARLIK", text: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений про'
    },
    {
        img: "./images/Asset 13@4x.png", title: "OHIRAT KUNIGA TAYYORGARLIK", text: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений про'
    },
    {
        img: "./images/Asset 13@4x.png", title: "OHIRAT KUNIGA TAYYORGARLIK", text: 'С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений прогрессивного развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. представляет собой интересный эксперимент проверки систем массового участия. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации направлений про'
    },
]

// const urlYangilik = "https://munir-app.herokuapp.com/blog/"



const Yangiliklar = () => {

    const {yangiliklar, dispatch} = useGlobalContext()

    const specYangilikHandler = (yangiKitob) => {
        dispatch({type: "GET_SPEC_YANGI_KITOB", yangiKitob})
    }

    

    return (
        <div className=' lg:py-12 lg:px-24 px-2 py-6'>
            {yangiliklar && yangiliklar.map((item) => {
                const string = item.body;
                const length = 380;
                const trimmedString = string.substring(0, length);
                return (
                    <div key = {item.id} className='relative md:flex items-start gap-8 mb-8 bg-white p-8 rounded-xl shadow-2xl effect2'>
                        <img className='w-52 shadow object-cover mb-4 mx-auto' src="./images/Asset 13@4x.png" alt="" />
                        <div>
                            <div className='flex flex-col lg:flex-row lg:items-center lg:mb-6 items-start'>
                                <Link to = ""  className='bg-[#F8AD3B] px-4 py-1 rounded-3xl mr-8' style={{fontFamily:"Arial"}}>Yangilik!</Link>
                                <Link onClick={() => specYangilikHandler(item)} to = {`/yangiliklar/${item.id}`} className=' text-xl lg:text-3xl  text-customRed mt-2 lg:mt-0 hover:underline' style={{fontFamily:"Arsenal-Bold"}}>{item.title}</Link><br />
                            </div>
                            <p className=' block text-justify mb-4 lg:text-lg' style={{fontFamily:"Arsenal-Bold"}}>{item.sub_title}</p>
                            <p className=' text-justify text-sm mb-6 lg:text-lg' style={{fontFamily:"Arsenal-Bold"}}>{trimmedString}... <Link onClick={() => specYangilikHandler(item)} className='text-customRed font-semibold hover:underline' to = {`/yangiliklar/${item.id}`} style={{fontFamily:"Arsenal-Bold"}}>Ko'proq ma'lumot</Link></p>

                            <div className='text-xs text-gray-400 absolute right-4 bottom-4 flex items-center gap-4'>
                                <span>
                                    comments:{item.comment}
                                </span>
                                <span className='flex items-center gap-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    {item.post_view}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Yangiliklar
