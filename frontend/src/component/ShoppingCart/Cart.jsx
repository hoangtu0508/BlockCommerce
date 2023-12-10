import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from '../Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { allSelected, decrementProductCart, getProductCart, incrementProductCart, isSelectedProductCart, removeProductCart, setSelectedProducts } from '../../features/cart/cartSlice'
import { baseURLImg } from '../../utils/api'
import { areAllSelected, calculateTotalPrice, getSelectedProducts } from '../../utils/utils'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("customer"));
    const userId = user?.user.id

    const productCartState = useSelector((state) => state?.cart?.productCart?.data[0])
    const productCart = productCartState?.attributes?.products
    const cartId = productCartState?.id

    const productPayment = getSelectedProducts(productCart)
    const totalPrice = calculateTotalPrice(productPayment);

    useEffect(() => {
        dispatch(getProductCart(userId))
        dispatch(setSelectedProducts(productPayment))
    }, [dispatch])

    const handleRemoveProductCart = (indexId, productCart, cartId) => {
        dispatch(removeProductCart({ indexId, productCart, cartId }))
        dispatch(getProductCart(userId))
    }

    const handleincrementQuanity = (indexId, productCart, cartId) => {
        dispatch(incrementProductCart({ indexId, productCart, cartId }))
        dispatch(getProductCart(userId))
    }

    const handledecrementQuanity = (indexId, productCart, cartId) => {
        dispatch(decrementProductCart({ indexId, productCart, cartId }))
        dispatch(getProductCart(userId))
    }

    const handleIsSelected = (indexId, productCart, cartId) => {
        dispatch(isSelectedProductCart({ indexId, productCart, cartId }))
        dispatch(getProductCart(userId))
    }

    const handleAllSelected = (productCart, cartId) => {
        dispatch(allSelected({ productCart, cartId }))
        dispatch(getProductCart(userId))
    }

    const handleClickCheckout = () => {
        navigate('/checkout')
        dispatch(setSelectedProducts(productPayment))
    }

    return (
        <div className='pt-24'>
            <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <a href="#" class="text-2xl font-bold text-gray-800">sneekpeeks</a>
                <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div class="relative">
                        <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
                                ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
                                    ></a>
                                <span class="font-semibold text-gray-900">Shop</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
                                <span class="font-semibold text-gray-900">Shipping</span>
                            </li>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <li class="flex items-center space-x-3 text-left sm:space-x-4">
                                <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
                                <span class="font-semibold text-gray-500">Payment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-8/12 m-auto'>
                <div className='text-center'>
                    <h3 className='text-3xl font-medium'>Shopping Cart</h3>
                </div>

                <div >
                    <div className='my-10'>
                        <div className='font-medium grid grid-cols-6 gap-4 py-3 border-b'>
                            <div className='col-span-2'>
                                <h4>Product</h4>
                            </div>

                            <div className=''>
                                <h4>Classify</h4>
                            </div>

                            <div className=''>
                                <h4>Quantity</h4>
                            </div>

                            <div>
                                <h4>Total</h4>
                            </div>

                            <div>
                                <h4>Order</h4>
                            </div>
                        </div>

                        <div className='mt-3 border-b'>
                            {productCart?.map((product, index) => (
                                <div className='grid grid-cols-6 gap-4 py-3'>
                                    <div className='col-span-2 flex items-center'>
                                        <div className='w-1/12' onClick={() => handleIsSelected(index, productCart, cartId)}>
                                            <input type='checkbox' className='w-5 h-5 mr-3' checked={product?.isSelected}></input>
                                        </div>
                                        <div className='w-4/12 h-auto'>
                                            <img src={baseURLImg + product?.product?.attributes?.productImg?.data[0].attributes?.url} alt="" />
                                        </div>
                                        <div className='ml-3 w-7/12'>
                                            <h4 className='text-base font-medium'>{product?.product?.attributes?.productName}</h4>
                                            <p className='text-sm'>{product.category}</p>
                                            <h4 className='text-base font-medium'>{product?.product?.attributes?.productPrice}$<span className='ml-3 text-xs text-text'><strike>{product?.product?.attributes?.productPrice}</strike></span></h4>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <div className='text-sm'>
                                            <h3>Size: <span className='font-medium'>{product.size}</span></h3>
                                            <div className='flex items-center'>
                                                <h3>Color: </h3>
                                                <span className={`ml-3 font-medium capitalize text-${product.color}-500`}>{product.color}</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <div className='w-10/12 grid grid-cols-3 items-center border text-center'>
                                            <div className='flex justify-center p-2' onClick={() => handledecrementQuanity(index, productCart, cartId)}><IoMdRemove /></div>
                                            <div className='p-2'>{product?.quantity}</div>
                                            <div className='flex justify-center p-2' onClick={() => handleincrementQuanity(index, productCart, cartId)}><IoMdAdd /></div>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <h3>{product?.product?.attributes?.productPrice * product?.quantity} $</h3>
                                    </div>

                                    <div className='flex items-center'>
                                        <div>
                                            <div className='flex items-center'>
                                                <span><AiOutlineHeart /></span>
                                                <p className='ml-3'>Add to favorites</p>
                                            </div>
                                            <div className='flex items-center hover:text-red-500' onClick={() => handleRemoveProductCart(index, productCart, cartId)}>
                                                <span><RiDeleteBin6Line /></span>
                                                <p className='ml-3'>Remove</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className='pb-10'>
                        <div className='flex items-center justify-between'>
                            <div className='w-1/2 flex'>
                                <ul className='w-full'>
                                    {productPayment?.map((product) => (
                                        <li className='border-b py-2 flex items-center'>
                                            <h3 className='w-2/3'>{product?.product?.attributes?.productName}</h3>
                                            <h4 className='w-1/3'><span className='font-medium mx-3'>X</span>{product?.quantity}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='text-right w-1/2'>
                                <h3 className='text-xl font-medium'>Subtotal: <spna>{totalPrice} USD</spna></h3>
                                <p className='text-base my-2 text-text'>Taxes and shipping calculated at checkout</p>
                                <p className='text-base text-text'>All charges are billed in <span className='text-black font-medium'>USD</span>. While the content of your cart is currently displayed in <span className='text-black font-medium'>VND</span>, the checkout will use <span className='font-medium text-black'>USD</span> at the most current exchange rate.</p>
                            </div>
                        </div>

                        <div className='flex items-end justify-between'>
                            <div className='flex items-center w-1/2' onClick={() => handleAllSelected(productCart, cartId)}>
                                <input type='checkbox' className='w-5 h-5 mr-3' checked={productCart && areAllSelected(productCart)}></input>
                                <h3>Sellect all (3)</h3>
                            </div>


                            <div className='w-1/4 h-12 float-right mt-6' onClick={() => handleClickCheckout()}>
                                <Button name='CHECK OUT' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart