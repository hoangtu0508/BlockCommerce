import React from 'react'
import './Button.scss'

const Button = (props) => {

    return (
        <div className='button rounded-full shadow-lg h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5'>
            <button className='rounded-full shadow-lg m-auto h-full px-5 text-white w-full'>{props.name}</button>
        </div>

    )
}

export default Button