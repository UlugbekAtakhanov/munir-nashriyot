import React, { useContext, useReducer, useState } from 'react'
import reducer from './reducer';

const AppContext = React.createContext();


const AppProvider = ( {children} ) => {


    const initialState = {
        isLoading: true,
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)



    return (
        <AppContext.Provider value={{
            ...state,
            isSideBarOpen, setIsSideBarOpen


        }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}
