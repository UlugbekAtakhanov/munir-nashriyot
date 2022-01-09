import React, { useContext, useReducer, useState, useEffect } from 'react'
import reducer from './reducer';
import axios from 'axios';

const AppContext = React.createContext();


const AppProvider = ( {children} ) => {


    const initialState = {
        isLoading: true,
        yangiliklar: "",
        specYangilik: "",

    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)


    // GETTING YANGILIKLAR
    const urlYangilik = "https://munir-app.herokuapp.com/blog/"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get(urlYangilik)
                dispatch({type: "GETTING_YANGILIKLAR", data})
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    // USER API
    const urlUsers = "https://munir-app.herokuapp.com/users/"
    useEffect(() => {
        const getUsers = async () => {
            try {
                const {data} = await axios.get(urlUsers)
                // console.log(data);
            } catch (error) {
                console.log(error.response);
            }
        }
        getUsers()
    }, [])


    return (
        <AppContext.Provider value={{
            ...state, dispatch,
            isSideBarOpen, setIsSideBarOpen,
            // yangiliklar, setYangiliklar


        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}
