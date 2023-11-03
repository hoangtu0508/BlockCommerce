import React, { useState } from 'react'
import { MdOutlineColorLens } from 'react-icons/md'
import { LiaRulerHorizontalSolid, LiaShippingFastSolid } from 'react-icons/lia'
import { TiTick } from 'react-icons/ti'
import { SiFireship } from 'react-icons/si'
import { AiOutlineEye } from 'react-icons/ai'
import Description from './Container/Description'
import Review from './Container/Review'
import Shipping from './Container/Shipping'
import Return from './Container/Return'
import Button from '../Button/Button'

const ProductDetails = () => {
    const [activeComponent, setActiveComponent] = useState(1)

    const handleActiveComponent = (number) => {
        setActiveComponent(number)
    }
    return (
        <div className='py-16'>
            <section class="pt-10 font-poppins dark:bg-gray-800">
                <div class="w-10/12 px-4 mx-auto">
                    <div class="flex flex-wrap mb-12 -mx-4">
                        <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div class="sticky top-0">
                                <div class="relative mb-6 lg:mb-10 lg:h-96">
                                    <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                                            </path>
                                        </svg>
                                    </a>
                                    <img class="object-contain w-full lg:h-full" src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
                                    <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                            </path>
                                        </svg>
                                    </a>
                                </div>
                                <div class="flex-wrap hidden -mx-2 md:flex">
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                            <img class="object-contain w-full lg:h-28" src="https://i.postimg.cc/Z5KhRkD6/download-1-removebg-preview.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                            <img class="object-contain w-full lg:h-28" src="https://i.postimg.cc/8kJBrw03/download-removebg-preview.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                            <img class="object-contain w-full lg:h-28" src="https://i.postimg.cc/0jwyVgqz/Microprocessor1-removebg-preview.png" alt="" />
                                        </a>
                                    </div>
                                    <div class="w-1/2 p-2 sm:w-1/4">
                                        <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                                            <img class="object-contain w-full lg:h-28" src="https://i.postimg.cc/0N4Kk1PN/black-microprocessors-removebg-preview.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2">
                            <div class="lg:pl-20">
                                <div class="mb-6 ">
                                    <span class="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">New
                                        Arrival</span>
                                    <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                        Intel® Core™ i5-12600HX Processor (18M Cache, up to 4.60 GHz)
                                    </h2>
                                    <div class="flex flex-wrap items-center mb-6">
                                        <ul class="flex mb-4 mr-2 lg:mb-0">
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                                        </path>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                        <a class="mb-4 text-xs underline hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0" href="#">
                                            View the acer store
                                        </a>
                                    </div>
                                    <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>Rs.7,000.00</span>
                                        <span class="ml-3 text-base font-normal text-gray-500 line-through dark:text-gray-400">Rs.10,000.00</span>
                                    </p>
                                </div>
                                <div class="mb-6">
                                    <div class="bg-gray-200 dark:bg-gray-700 rounded-xl">
                                        <div class="p-3 lg:p-5 ">
                                            <div class="flex p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                <div className='w-1/2'>
                                                    <div className='flex items-center'>
                                                        <span className='mr-3'><MdOutlineColorLens /></span>
                                                        <h3>COLOR: <span className='font-medium'>BLUE</span></h3>
                                                    </div>
                                                    <ul className="flex flex-row items-center space-x-2 mt-4">
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                                                <a href="#blue" className="block w-5 h-5 bg-blue-600 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                                                <a href="#yellow" className="block w-5 h-5  bg-yellow-400 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-red-500 rounded-full transition ease-in duration-300">
                                                                <a href="#red" className="block w-5 h-5  bg-red-500 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                        <li className="">
                                                            <span className="block p-1 border-2 hover:border-green-500 rounded-full transition ease-in duration-300">
                                                                <a href="#green" className="block w-5 h-5  bg-green-500 rounded-full"></a>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='w-1/2'>
                                                    <div className='flex items-center pl-3'>
                                                        <span className='mr-3'><LiaRulerHorizontalSolid /></span>
                                                        <h3>SIZE:</h3>
                                                    </div>
                                                    <div className="cursor-pointer text-gray-400 mt-4 text-2xl grid grid-cols-4 gap-4">
                                                        <span className="border hover:border-text hover:text-text p-1 py-0 px-2 text-center rounded-lg">S</span>
                                                        <span className="border hover:border-text hover:text-text p-1 py-0 px-2 text-center rounded-lg">M</span>
                                                        <span className="border hover:border-text hover:text-text p-1 py-0 px-2 text-center rounded-lg">L</span>
                                                        <span className="border hover:border-text hover:text-text p-1 py-0 px-2 text-center rounded-lg">XL</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-6 "></div>
                                <div class="flex flex-wrap items-center mb-6">
                                    <div class="w-3/12 mb-4 mr-4 lg:mb-0">
                                        <div class="w-28">
                                            <div class="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                                                <button class="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                                                    <span class="m-auto text-2xl font-thin">-</span>
                                                </button>
                                                <input type="number" class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black" placeholder="1" />
                                                <button class="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                                                    <span class="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-2/12 mb-4 lg:mb-0">
                                        <button class="flex items-center justify-center w-full h-10 p-2 mr-4 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className='w-6/12 rounded-full shadow-lg h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5'>
                                        <button className='rounded-full shadow-lg m-auto h-full hover:text-white hover:bg-transparent w-full bg-white text-text'>Add to cart</button>
                                    </div>
                                </div>
                                <div class="flex gap-4 mb-6 h-12">
                                    <Button name='Buy now' />
                                </div>
                                <div class="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                    <div className='flex text-green-500 items-center'>
                                        <span className=' border border-green-500 rounded-full'><TiTick /></span>
                                        <span class="text-base font-medium dark:text-gray-400 ml-3">In Stock</span>
                                    </div>
                                    <div className='flex text-red-500 items-center'>
                                        <span className=''><SiFireship /></span>
                                        <span class="text-base font-medium dark:text-gray-400 ml-3">32 sold in last 7 hours</span>
                                    </div>
                                    <div className='flex text-yellow-500 items-center'>
                                        <span className=''><AiOutlineEye /></span>
                                        <span class="text-base font-medium dark:text-gray-400 ml-3">32 people are viewing this right now</span>
                                    </div>
                                    <div className='flex items-center font-medium'>
                                        <span><LiaShippingFastSolid /></span>
                                        <span class="text-gray-600 dark:text-gray-400 ml-3">
                                            Order in the next 3 - 5 days to get it between
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='border-b-2 w-full'>
                            <ul className=' flex justify-center'>
                                <li
                                    onClick={() => handleActiveComponent(1)}
                                    className={`py-3 font-medium text-xl mx-6 ${activeComponent === 1 ? 'text-gray-800 border-b-4 border-blue-400' : 'text-gray-400 hover:text-gray-800'
                                        }`}
                                >
                                    Description
                                </li>
                                <li
                                    onClick={() => handleActiveComponent(2)}
                                    className={`py-3 font-medium text-xl mx-6 ${activeComponent === 2 ? 'text-gray-800 border-b-4 border-blue-400' : 'text-gray-400 hover:text-gray-800'
                                        }`}
                                >
                                    Review
                                </li>
                                <li
                                    onClick={() => handleActiveComponent(3)}
                                    className={`py-3 font-medium text-xl mx-6 ${activeComponent === 3 ? 'text-gray-800 border-b-4 border-blue-400' : 'text-gray-400 hover:text-gray-800'
                                        }`}
                                >
                                    Shipping
                                </li><li
                                    onClick={() => handleActiveComponent(4)}
                                    className={`py-3 font-medium text-xl mx-6 ${activeComponent === 4 ? 'text-gray-800 border-b-4 border-blue-400' : 'text-gray-400 hover:text-gray-800'
                                        }`}
                                >
                                    Return
                                </li>
                            </ul>
                        </div>

                        {activeComponent === 1 && <Description />}
                        {activeComponent === 2 && <Review />}
                        {activeComponent === 3 && <Shipping />}
                        {activeComponent === 4 && <Return />}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetails