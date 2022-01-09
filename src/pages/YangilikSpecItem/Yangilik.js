import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context'

import FixedNavbar from '../../components/FixedNavbar/FixedNavbar'
import Navbar2 from '../../components/Navbar2/Navbar2'
import Footer from '../../components/Footer/Footer'

const Yangilik = () => {
    const param = useParams()
    const {dispatch, specYangilik, yangiliklar, isSideBarOpen, setIsSideBarOpen} = useGlobalContext()

    const [comments, setComments] = useState([])

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usersComment, setUsersComment] = useState("")
    const [writtenComment, setWrittenComment] = useState("")

    const [token, setToken] = useState("")

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    useEffect(() => {
        localStorage.removeItem("munirNashriyotAuthToken")
        const userToken = localStorage.getItem("munirNashriyotAuthToken")
        setToken(userToken)
    }, [])


    const urlYangilik = `https://munir-app.herokuapp.com/blog/${param.id}`
    useEffect(() => {
        const fetchSpecKitob = async () => {
            try {
                const {data} = await axios.get(urlYangilik)
                dispatch({type: "GET_SPEC_YANGI_KITOB", yangiKitob:data})
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchSpecKitob()
    }, [])

    const urlComments = `https://munir-app.herokuapp.com/comment/${param.id}`
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const {data} = await axios.get(urlComments)
                setComments(data)
            } catch (error) {
                console.log(error.response);
            }
        }
        fetchComments()
    }, [writtenComment])

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post("https://munir-app.herokuapp.com/api-token-auth/", {username, password})
            localStorage.setItem("munirNashriyotAuthToken", data.token)
            setToken(data.token)
        } catch (error) {
            console.log(error.response);
        }
    }

    console.log(new Date(specYangilik.created_at).toLocaleString());

    const commentHandler = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("munirNashriyotAuthToken")
        const config = {
            headers: {
                Authorization: `Token ${token}`
            }
        }
        try {
            const {data} = await axios.post(`https://munir-app.herokuapp.com/comment/`, {body: usersComment, post: specYangilik.id}, config)
            setWrittenComment(data)
        } catch (error) {
            console.log(error.response.data);
        }
    }


    return (
        <div className='' style={{background: "linear-gradient(to top, #dfe9f3 0%, white 100%)"}}>

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

            <div className='xl:container mx-auto sm:flex sm:items-start sm:mt-40 mt-16 md:mt-16'>
                <div className=' p-8 w-[90%] mx-auto sm:w-1/3 md:w-[30%] sm:p-0 sm:ml-2 md:ml-0 md:p-8' >
                    <img className='w-full h-full object-cover mb-1' src="../images/Asset 13@4x.png" alt="" />
                </div>
                <div className='sm:w-2/3 md:w-[70%] p-8 sm:pt-0 md:pt-8'>
                    <p className='text-customRed text-2xl md:text-3xl mb-6 ' style={{fontFamily: "Arsenal-Bold"}}>{specYangilik.title}</p>
                    <p className='text-green-500 mb-6 tracking-[1px]' style={{fontFamily: "Arsenal-Bold"}}>{specYangilik.sub_title}</p>
                    <p className='text-green-500 mb-6 tracking-[1px]' style={{fontFamily: "Arsenal-Bold"}}>{specYangilik.body}</p>
                    <p className='text-sm text-slate-500 pl-1 mb-2 capitalize'><span className='text-sm capitalize'>Muallif:</span> {specYangilik.author_1}</p>
                    <div className='flex mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f3af1d" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f3af1d" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f3af1d" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f3af1d" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#f3af1d" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <p className='text-customRed text-sm pl-1'><span className='text-xs '>Date:</span> {new Date(specYangilik.created_at).toLocaleString()}</p>
                </div>
            </div>

            <div className='sm:flex items-start pb-8'>

                <div className='sm:w-3/5 flex'>
                    <div className='overflow-y-scroll p-4 w-[93%]  border border-green-200 bg-white h-[450px] m-auto rounded-lg shadow-lg'>
                        {comments.length < 1 ? <p>No comments</p> : 
                            comments.map((comment) => {
                                return (
                                    <div className='mb-4' key={comment.id}>
                                        <p className='text-xs font-bold flex items-center gap-2 mb-1 capitalize'><span className='w-7 h-7 rounded-full border bg-green-500 text-white flex justify-center items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </span> {comment.username}
                                        </p>
                                        <p className='text-xs pl-9'>{comment.body}</p>
                                    </div>
                                )
                            })
                        }

                        {/* <div className='mb-4'>
                            <p className='text-xs font-bold flex items-center gap-2 mb-1 capitalize'>
                                <span className='w-7 h-7 rounded-full border bg-green-500 text-white flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                </span> 
                                username
                            </p>
                            <p className='text-xs pl-9'>body</p>
                        </div> */}
                    </div>
                </div>


                <div className='sm:w-2/5 '>
                    {token ? 
                        <form onSubmit={commentHandler} className='flex flex-col px-4 pt-4'>
                            <p className=' text-xl text-black '>Username</p>
                            <textarea className='mb-4 p-1 border rounded border-green-300 outline-red-400 overflow-hidden placeholder:text-sm' name="text" id="text" cols="30" rows="10" value={usersComment} onChange={e => setUsersComment(e.target.value)} placeholder='Izoh...' ></textarea>
                            <button className='bg-green-400 p-1 text-white uppercase tracking-[1px] text-sm rounded-sm hover:text-red-200' type = "submit">submit</button>
                        </form>
                    : 
                        <form className='flex flex-col px-4 pt-4' onSubmit={loginHandler}>
                            <p className='text-center text-xl text-black w-[60%] mx-auto '>Izoh qoldirish uchun ro'yhatdan uting!</p>
                            <label className='text-sm' htmlFor="email">Username</label>
                            <input className='mb-4 p-1 border rounded border-green-300 outline-red-400 overflow-hidden' type="text" name="email" id="email" value={username} onChange={(e) => setUsername(e.target.value)}  />
                            <label className='text-sm' htmlFor="name">Password</label>
                            <input className='mb-4 border p-1 rounded border-green-300 outline-red-400 overflow-hidden' type="password" name="name" id="name" value={password} onChange={e => setPassword(e.target.value)} />
                            <button className='bg-green-400 p-1 text-white uppercase tracking-[1px] text-sm rounded-sm hover:text-red-200' type = "submit">submit</button>
                        </form>

                    }
                    
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Yangilik
