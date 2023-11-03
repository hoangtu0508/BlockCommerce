import React from 'react'
import { AiOutlineEye, AiTwotoneHeart, AiTwotoneStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoMdAdd } from 'react-icons/io'
import { HiOutlineMinusSm } from 'react-icons/hi'
import Button from '../Button/Button'

const Product = (props) => {
    const product = props.product
    return (
        <div>
            <Link to='/product-details/1'>
                <div className="relative">
                    <div className="container">
                        <div className="max-w-md w-full rounded-xl p-6 bg-white shadow-md">
                            <div className="flex flex-col ">
                                <div className="">
                                    <div className="relative h-62 w-full mb-3">
                                        <div className="absolute flex flex-col top-0 right-0 p-3">
                                            <button className="transition ease-in duration-300  hover:text-purple-500 hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1 hover:border border-text"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg></button>
                                        </div>
                                        <img src={product.url} alt="Just a flower" className=" w-full object-fill rounded-2xl" />
                                    </div>
                                    <div className="flex-auto justify-evenly">
                                        <div className="flex flex-wrap ">
                                            <div className="w-full flex-none text-sm flex items-center text-gray-600 justify-between">
                                                <div className='flex items-center'>
                                                    <span className="h-4 w-4 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <AiTwotoneStar />
                                                    </span>
                                                    <span className="text-gray-400 whitespace-nowrap mr-3">{product.star}</span>
                                                </div>
                                                <div className='flex items-center'>
                                                    <span className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                        <AiTwotoneHeart />
                                                    </span>
                                                    <span className="text-gray-400 whitespace-nowrap mr-3">{product.heart}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-full justify-between min-w-0 ">
                                                <h2 className="text-lg mr-auto cursor-pointer text-text hover:text-purple-500 truncate ">{product.name}</h2>

                                            </div>
                                        </div>
                                        <div className='flex items-end'>
                                            <span className="text-xl text-text font-semibold mt-1">${product.priceSale}.00</span>
                                            <span className='text-gray-400 ml-3'><strike>{product.price}.00</strike></span>
                                        </div>
                                        <div className="lg:flex  py-4  text-sm text-gray-600">
                                            <div className="w-1/2 inline-flex items-center mb-3 mr-1">
                                                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                                    <ul className="flex flex-row justify-center items-center space-x-2">
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                                                <a href="#blue" className="block w-3 h-3 bg-blue-600 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                                                <a href="#yellow" className="block w-3 h-3  bg-yellow-400 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-red-500 rounded-full transition ease-in duration-300">
                                                                <a href="#red" className="block w-3 h-3  bg-red-500 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-green-500 rounded-full transition ease-in duration-300">
                                                                <a href="#green" className="block w-3 h-3  bg-green-500 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="w-1/2 inline-flex items-center mb-3 ml-1">
                                                <span className="text-secondary whitespace-nowrap mr-1">Size:</span>
                                                <div className="cursor-pointer text-gray-400 ">
                                                    <span className="hover:text-purple-500 p-1 py-0">S</span>
                                                    <span className="hover:text-purple-500 p-1 py-0">M</span>
                                                    <span className="hover:text-purple-500 p-1 py-0">L</span>
                                                    <span className="hover:text-purple-500 p-1 py-0">XL</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2 text-sm font-medium w-full">
                                            <div className='w-5/12 flex items-center'>
                                                <span className='w-4/12 border py-3 rounded-l-full'><HiOutlineMinusSm className='m-auto' /></span>
                                                <input className='w-4/12 border h-full px-2' value={1}></input>
                                                <span className='w-4/12 border py-3 rounded-r-full'><IoMdAdd className='m-auto' /></span>
                                            </div>
                                            <div className="w-5/12 transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 justify-center">
                                                <Button name='Add Cart'/>
                                            </div>
                                            <span className="w-2/12 flex items-center justify-center transition ease-in duration-300 hover:bg-gray-800 border hover:border-gray-500 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-1">
                                                <AiOutlineEye className='h-6 w-6'/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Link>
        </div>
    )
}

export default Product