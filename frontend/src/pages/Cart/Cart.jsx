import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='pt-24'>
            <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <Link clLinkss="text-2xl font-bold text-gray-800">sneekpeeks</Link>
                <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div class="relative">
                        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <Link to='/cart/your-cart'>
                                <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                                    ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
                                        ></span>
                                    <span class="font-semibold text-gray-900">Shop</span>
                                </li>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <Link to='/cart/check-out'>
                                <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</span>
                                    <span class="font-semibold text-gray-900">Shipping</span>
                                </li>
                            </Link>

                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <Link to='/cart/payment'>
                                <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                    <span class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</span>
                                    <span class="font-semibold text-gray-500">Payment</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Cart