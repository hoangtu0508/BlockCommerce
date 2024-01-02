import React from 'react'
import { FaFacebookMessenger } from 'react-icons/fa6'
import { IoNotifications } from 'react-icons/io5'

const ProfileDetail = () => {
    return (
        <div className='w-full  text-gray-600 pb-6'>
            <div className='w-full bg-white rounded-xl h-14 items-center justify-between flex px-4 text-gray-600'>
                <div className=''>
                    <h3>hello</h3>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-center border border-text px-2 py-1 rounded-md'>
                        <span><FaFacebookMessenger /></span>
                        <h3 className='ml-2 text-xs'>Messenger</h3>
                    </div>

                    <div className='flex items-center border border-text px-2 py-1 rounded-md ml-2'>
                        <span><IoNotifications /></span>
                        <h3 className='ml-2 text-xs'>Notification</h3>
                    </div>
                </div>
            </div>
            <div className='w-2/3 mt-4'>

                <div className='bg-white p-4 rounded-xl'>
                    <h3 className='font-semibold'>Profile Details</h3>

                    <div className='flex mt-2'>
                        <div className='w-1/2 mr-2'>
                            <div>
                                <label className='text-xs font-medium'>Username</label>
                                <input className='text-sm px-2 py-2 w-full border border-text rounded-lg mt-2' value='THT THT'></input>
                            </div>
                            <div className='mt-2'>
                                <label className='text-xs font-medium'>Phone Number</label>
                                <input className='px-2 py-1 w-full border border-text rounded-lg mt-2' value='THT THT'></input>
                            </div>
                        </div>
                        <div className='w-1/2 ml-2'>
                            <div>
                                <label className='text-xs font-medium'>Email</label>
                                <input className='px-2 py-1 w-full border border-text rounded-lg mt-2' value='THT@gmail.com'></input>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='p-4 bg-white mt-4 rounded-xl'>
                    <h3 className='font-semibold'>Contact Information</h3>

                    <div>
                        <div className='mt-2'>
                            <label className='text-xs font-medium'>Address</label>
                            <input className='text-sm px-2 py-2 w-full border border-text rounded-lg mt-2' value='THT THT'></input>
                        </div>

                        <div className='flex mt-2'>
                            <div className='w-1/2 mr-2'>
                                <div>
                                    <label className='text-xs font-medium'>Email</label>
                                    <input className='px-2 py-1 w-full border border-text rounded-lg mt-2' value='THT@gmail.com'></input>
                                </div>
                                <div className='mt-2'>
                                    <label className='text-xs font-medium'>Email</label>
                                    <input className='px-2 py-1 w-full border border-text rounded-lg mt-2' value='THT@gmail.com'></input>
                                </div>
                            </div>

                            <div className='w-1/2 ml-2'>
                                <div>
                                    <label className='text-xs font-medium'>Email</label>
                                    <input className='px-2 py-1 w-full border border-text rounded-lg mt-2' value='THT@gmail.com'></input>
                                </div>
                                <div className='mt-2'>
                                    <label className='text-xs font-medium'>Email</label>
                                    <input className='px-2 py-1 w-full border border-text rounded-lg mt-2' value='THT@gmail.com'></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail