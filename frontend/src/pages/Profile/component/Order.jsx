import React from 'react'
import { FaShop } from 'react-icons/fa6'

const Order = () => {
    return (
        <div>
            <div className='text-left bg-white py-4 px-3 rounded-xl'>
                <label className='font-medium py-1 px-1 border-b-2 border-orange-600'>All Order</label>
            </div>

            <div className='bg-white mt-4 p-4'>
                <div className='flex justify-between items-center border-b-2 border-gray-300 pb-3'>
                    <div className='flex items-center'>
                        <label className='text-xs font-medium px-2 py-1 rounded-md bg-orange-600 text-white mr-2'>Favourite</label>
                        <span className='text-lg font-medium'>|</span>
                        <div className='flex items-center mr-2'><span className='mx-2'><FaShop className='' /></span> <label className='text-xs font-medium '>Accessory shop</label></div>
                        <span className='text-lg font-medium'>|</span>
                        <div className='flex items-center px-2 py-1 border-2 rounded-md border-orange-600 mx-2'><span><FaShop className='mr-2 text-orange-600' /></span><label className='text-xs font-medium text-orange-600'>Shop now</label></div>
                    </div>

                    <div className='flex items-center'>
                        <label className='font-normal'>Wait for confirmation</label>
                        <span className='text-lg font-medium mx-2'>|</span>
                        <label>Cash Coin</label>
                    </div>
                </div>

                <div className='mt-2'>

                </div>
            </div>
        </div>
    )
}

export default Order