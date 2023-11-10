import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Cart = () => {
    const products = [
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            priceSale: 59.99,
            color: 'blue',
            size: 'M',
            seller: "THT Shop",
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            color: 'yellow',
            size: 'M',
            priceSale: 59.99,
            category: 'Classic',
            seller: "THT Shop",
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            color: 'red',
            size: 'M',
            seller: "Shop Tus",
            priceSale: 59.99,
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
        {
            id: 1,
            name: 'Polaroid camera',
            price: 59.99,
            priceSale: 59.99,
            color: 'green',
            seller: "Shop Idol",
            size: 'M',
            category: 'Classic',
            url: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80'
        },
    ]
    return (
        <div className='pt-24 w-8/12 m-auto'>
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
                        {products.map((product) => (
                            <div className='grid grid-cols-6 gap-4 py-3'>
                                <div className='col-span-2 flex items-center'>
                                    <input type='checkbox' className='w-5 h-5 mr-3'></input>
                                    <div className='w-24 h-auto'>
                                        <img src={product.url} alt="" />
                                    </div>
                                    <div className='ml-3'>
                                        <h4 className='text-base font-medium'>{product.name}</h4>
                                        <p className='text-sm'>{product.category}</p>
                                        <h4 className='text-base font-medium'>{product.priceSale}$<span className='ml-3 text-xs text-text'><strike>{product.price}</strike></span></h4>
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
                                    <div className='w-10/12 grid grid-cols-3 items-center border p-2 text-center'>
                                        <span className='flex justify-center'><IoMdRemove /></span>
                                        <span>2</span>
                                        <span className='flex justify-center'><IoMdAdd /></span>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <h3>5555$</h3>
                                </div>

                                <div className='flex items-center'>
                                    <div>
                                        <div className='flex items-center'>
                                            <span><AiOutlineHeart /></span>
                                            <p className='ml-3'>Add to favorites</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <span><RiDeleteBin6Line /></span>
                                            <p className='ml-3'>Delete</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className='pb-10'>
                    <div className='flex items-center justify-between'>
                        <div className='w-1/2 '>
                            <ul>
                                {products.map((product) => (
                                    <li className='border-b py-2 flex items-center'>{product.name} <span className='font-medium mx-3'>X</span> 2</li>
                                ))}
                            </ul>
                        </div>

                        <div className='text-right w-1/2'>
                            <h3 className='text-xl font-medium'>Subtotal: <spna>1,588,221₫</spna></h3>
                            <p className='text-base my-2 text-text'>Taxes and shipping calculated at checkout</p>
                            <p className='text-base text-text'>All charges are billed in <span className='text-black font-medium'>USD</span>. While the content of your cart is currently displayed in <span className='text-black font-medium'>VND</span>, the checkout will use <span className='font-medium text-black'>USD</span> at the most current exchange rate.</p>
                        </div>
                    </div>

                    <div className='flex items-end justify-between'>
                        <div className='flex items-center w-1/2'>
                            <input type='checkbox' className='w-5 h-5 mr-3'></input>
                            <h3>Chọn tất cả (3)</h3>
                        </div>

                        <Link to='/checkout' className='w-1/2'>
                            <div className='w-1/2 h-12 float-right mt-6'>
                                <Button name='CHECK OUT' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart