import React, { useEffect } from 'react'
import './ShoppingCart.scss'
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const ShoppingCart = (props) => {

    const products = [
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            priceSale: 59.99,
            color: 'Blue',
            size: 'M',
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            color: 'Blue',
            size: 'M',
            priceSale: 59.99,
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            color: 'Blue',
            size: 'M',
            priceSale: 59.99,
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            priceSale: 59.99,
            color: 'Blue',
            size: 'M',
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
    ]
    const setShowCart = props.setShowCart
    const showCart = props.showCart
    return (
        <div className='fixed w-full h-screen bg-black z-50 bg-opacity-50'>
            <div className=' w-96 bg-white float-right h-screen px-8'>
                <div className=' py-6'>
                    <div className="flex items-center justify-end">
                        <h4>Close</h4>
                        <span onClick={() => setShowCart(false)}>
                            <AiOutlineClose className="w-30 h-auto ml-3" />
                        </span>
                    </div>
                    <div className="text-left">
                        <h3 className="text-25 text-lg font-medium">Shopping Cart (3)</h3>
                    </div>
                </div>

                <div className='overflow-y-scroll h-1/2 w-full custom pr-2'>
                    <ul className="flex flex-col divide-y divide-gray-700 ">
                        {
                            products.map((product) => (
                                <li className="py-6 sm:flex-row sm:justify-between">
                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                        <div className='w-1/3'>
                                            <img className="w-full flex-shrink-0 object-cover dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={product.url} alt="Polaroid camera" />
                                        </div>
                                        <div className="flex flex-col justify-between w-2/3 pb-4">
                                            <div className="w-full pb-2">
                                                <div className="space-y-1">
                                                    <h3 className="text-base font-medium leadi sm:pr-8">{product.name}</h3>
                                                </div>

                                                <div className='flex text-xs my-1'>
                                                    <span className='mr-6'>Color: {product.color}</span>
                                                    <span>Size: {product.size}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <p className="text-base font-semibold mr-3">{product.priceSale}$</p>
                                                    <p className="text-sm line-through dark:text-gray-600">{product.price}$</p>
                                                </div>
                                                <div className='mt-2 flex items-center'>
                                                    <span><AiOutlineEdit /></span>
                                                    <div className='flex items-center ml-3 border p-2'>
                                                        <span><IoMdRemove /></span>
                                                        <input type='number' className='w-14 text-center'></input>
                                                        <span><IoMdAdd /></span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex text-sm divide-x">
                                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                <rect width="32" height="200" x="168" y="216"></rect>
                                                <rect width="32" height="200" x="240" y="216"></rect>
                                                <rect width="32" height="200" x="312" y="216"></rect>
                                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                            </svg>
                                            <span>Remove</span>
                                        </button>
                                        <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                            </svg>
                                            <span>Add to favorites</span>
                                        </button>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div className=''>
                    <div className="space-y-1 text-right">
                        <p>Total amount:
                            <span className="font-semibold">357 €</span>
                        </p>
                        <p className="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button type="button" className="px-6 py-2 border rounded-md dark:border-violet-400">Back
                            <span className="sr-only sm:not-sr-only">to shop</span>
                        </button>
                        <button type="button" className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">
                            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ShoppingCart