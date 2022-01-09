import React from 'react'

const ErrorHandler1 = ({msg, condition}) => {
    if (condition === "success") {
        return (
            <span className='bg-green-500 self-center px-12 rounded shadow-lg shadow-green-500 text-white py-1 text-sm  mb-4'>
                {msg}
            </span>
        )
    }
    if (condition === "danger") {
        return (
            <span className='bg-rose-500 self-center px-12 rounded shadow-lg shadow-rose-500 text-white py-1 text-sm  mb-4'>
                {msg}
            </span>
        )
    }
    return null
}

export default ErrorHandler1
