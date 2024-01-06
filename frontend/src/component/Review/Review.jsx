import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { baseURLImg } from '../../utils/api';
import { CiStar } from "react-icons/ci";
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Review = (props) => {
    const setShowReview = props.setShowReview
    const [rating, setRating] = useState(5);
    const [productReview, setProductReview] = useState([]);
    const [isShow, setIsShow] = useState(false);
    const [isShowReview, setIsShowReview] = useState(false);

    const dataState = useSelector((state) => state?.review?.productReview);
    console.log(dataState?.length);

    useEffect(() => {
        if (dataState?.length > 1) {
            setIsShow(true)
        }
    }, [])

    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSelectProduct = (index) => {
        setProductReview([dataState[index]])
        console.log(productReview);
        setIsShowReview(true)
    }

    console.log(productReview);
    return (
        <div className='fixed w-screen h-screen bg-black z-50 bg-opacity-70 top-0 right-0 bottom-0 left-0 flex items-center justify-center'>
            <div className='w-2/6 h-auto bg-white p-6'>
                <div className='flex justify-between items-center'>
                    <h3 className='font-medium text-2xl'>Review Product</h3>
                    <h3 onClick={() => setShowReview(false)}><label>Close</label><span className='font-medium text-xl ml-2'>X</span></h3>
                </div>

                <div className='py-2 border-b'>
                    {isShow ? (
                        <div>
                            {isShowReview ? (
                                <div>
                                    {productReview?.map((product) => (
                                        <div>
                                            <div className='mt-4 flex items-center'>
                                                <img src={baseURLImg + product?.product?.attributes?.productImg?.data[0].attributes?.url} className='w-12 h-12'></img>
                                                <div className='ml-2'>
                                                    <h3 className='text-base font-medium'>{product?.product?.attributes?.productName}</h3>
                                                    <h3 className='text-xs text-gray-500'>{product?.product?.attributes?.category?.data?.attributes?.categoryName}</h3>
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                <div>
                                                    <h3 className='text-base font-medium'>Product quality:</h3>
                                                    <div className='flex my-4'>
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <span
                                                                key={star}
                                                                onClick={() => handleRatingClick(star)}
                                                                style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}

                                                            >
                                                                <FaStar className='w-8 h-auto mr-2' />
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className='text-base font-medium'>Detailed description:</h3>
                                                    <textarea className='w-full h-40 p-2 border border-gray-500 rounded-md mt-4' placeholder='Please share what you like about this product with others'></textarea>
                                                </div>
                                            </div>

                                            <div className='flex mt-4 justify-end'>
                                                <Link><label className='px-6 py-2 border border-gray-500 mr-4' onClick={() => setShowReview(false)}>Cancel</label></Link>
                                                <Link><label className='px-6 py-2 bg-orange-600 text-white' onClick={() => alert(product.product.id)}>Review</label></Link>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            ) : (
                                <div>
                                    <div>
                                        <h3 className='text-center text-lg font-medium'>Please select a product to review</h3>
                                        <div>
                                            {dataState?.map((product, index) => (
                                                <div className='mt-4 flex items-center' onClick={() => handleSelectProduct(index)}>
                                                    <img src={baseURLImg + product?.product?.attributes?.productImg?.data[0].attributes?.url} className='w-12 h-12'></img>
                                                    <div className='ml-2'>
                                                        <h3 className='text-base font-medium'>{product?.product?.attributes?.productName}</h3>
                                                        <h3 className='text-xs text-gray-500'>{product?.product?.attributes?.category?.data?.attributes?.categoryName}</h3>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    ) : (
                        <div>
                            {dataState?.map((product) => (
                                <div>
                                    <div className='mt-4 flex items-center'>
                                        <img src={baseURLImg + product?.product?.attributes?.productImg?.data[0].attributes?.url} className='w-12 h-12'></img>
                                        <div className='ml-2'>
                                            <h3 className='text-base font-medium'>{product?.product?.attributes?.productName}</h3>
                                            <h3 className='text-xs text-gray-500'>{product?.product?.attributes?.category?.data?.attributes?.categoryName}</h3>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <div>
                                            <h3 className='text-base font-medium'>Product quality:</h3>
                                            <div className='flex my-4'>
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <span
                                                        key={star}
                                                        onClick={() => handleRatingClick(star)}
                                                        style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}

                                                    >
                                                        <FaStar className='w-8 h-auto mr-2' />
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className='text-base font-medium'>Detailed description:</h3>
                                            <textarea className='w-full h-40 p-2 border border-gray-500 rounded-md mt-4' placeholder='Please share what you like about this product with others'></textarea>
                                        </div>
                                    </div>

                                    <div className='flex mt-4 justify-end'>
                                        <Link><label className='px-6 py-2 border border-gray-500 mr-4' onClick={() => setShowReview(false)}>Cancel</label></Link>
                                        <Link><label className='px-6 py-2 bg-orange-600 text-white' onClick={() => alert(product.product.id)}>Review</label></Link>
                                    </div>
                                </div>
                            ))}

                        </div>

                    )}

                </div>


            </div>
        </div>
    )
}

export default Review