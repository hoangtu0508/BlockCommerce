import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { baseURLImg } from '../../../utils/api';
import { FaEthereum, FaShippingFast } from 'react-icons/fa';
import { getProductCart, getShip, setIdShip, } from '../../../features/cart/cartSlice';
import Shipping from '../../../component/Shipping/Shipping';
import { calculateTotalPrice, converEth, getSelectedProducts } from '../../../utils/utils';
import { IoLogoUsd } from 'react-icons/io';
import { getPriceEth } from '../../../features/currencyConverter/currencyConverterSlice';

const Checkout = () => {
    const dispatch = useDispatch()

    const [selectedDiv, setSelectedDiv] = useState(2);
    const [shipMethod, setShipMethod] = useState(0)
    const [shipEth, setShipEth] = useState()
    const [subtotalEth, setSubtotalEth] = useState()

    const user = JSON.parse(localStorage.getItem("customer"));
    const userId = user?.user.id

    const productCartState = useSelector((state) => state?.cart?.productCart?.data[0])
    const productCart = productCartState?.attributes?.products
    const ship = useSelector((state) => state?.cart?.ship?.data)
    const ethPrice = useSelector((state) => state?.currency?.ethPrice)

    const productPayment = getSelectedProducts(productCart)
    const subtotal = calculateTotalPrice(productPayment);

    useEffect(() => {
        setSubtotalEth(converEth(ethPrice, subtotal))
    }, [subtotal, ethPrice])

    useEffect(() => {
        setShipEth(converEth(ethPrice, shipMethod))
    }, [shipMethod, ethPrice])

    const totalEth = subtotalEth + shipEth

    useEffect(() => {
        dispatch(setIdShip(selectedDiv))
    }, [selectedDiv])

    useEffect(() => {
        dispatch(getProductCart(userId))
    }, [dispatch])

    useEffect(() => {
        dispatch(getPriceEth())
        dispatch(getShip())
    }, [])

    useEffect(() => {
        if (ship?.length > 0) {
            const defaultShipMethod = 2; // Giá trị mặc định bạn muốn
            setSelectedDiv(defaultShipMethod);
            setShipMethod(ship.find(item => item.id === defaultShipMethod)?.attributes?.shippingPrice || 0);
        }
    }, [ship]);

    const handleChange = (radioId, price) => {
        setSelectedDiv(radioId);
        setShipMethod(price);
    };

    return (
        <div className=''>
            <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="px-4 pt-8">
                    <p class="text-xl font-medium">Order Summary</p>
                    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
                    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {productPayment?.map((product) => (
                            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                                <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={baseURLImg + product?.product?.attributes?.productImg?.data[0].attributes?.url} alt="" />
                                <div class="flex w-full flex-col px-4 py-4">
                                    <span class="font-semibold">{product?.product?.attributes?.productName}</span>
                                    <span class="float-right text-gray-400">42EU - 8.5US</span>
                                    <p class="text-lg font-bold">${product?.product?.attributes?.productPrice}.00</p>
                                </div>
                            </div>
                        ))}

                        <div class="mt-6 border-t border-b py-2">
                            <div class="flex justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <div>
                                    <h3 className='flex items-center'><IoLogoUsd /><span className='ml-3'>{subtotal}.00 USD</span></h3>
                                    <h3 className='flex items-center'><FaEthereum /><span className='ml-3'>{subtotalEth?.toFixed(4)} ETH</span></h3>
                                </div>

                            </div>
                            <div class="flex justify-between">
                                <p class="text-sm font-medium text-gray-900">Shipping</p>
                                <div>
                                    <h3 className='flex items-center'><IoLogoUsd /><span className='ml-3'>{shipMethod}.00 USD</span></h3>
                                    <h3 className='flex items-center'><FaEthereum /><span className='ml-3'>{shipEth?.toFixed(4)} ETH</span></h3>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 flex justify-between">
                            <p class="text-base font-medium text-gray-900">Total</p>
                            <div className='text-lg font-medium'>
                                <h3 className='flex items-center'><IoLogoUsd /><span className='ml-3'>{subtotal + shipMethod}.00 USD</span></h3>
                                <h3 className='flex items-center'><FaEthereum /><span className='ml-3'>{totalEth?.toFixed(4)} ETH</span></h3>
                            </div>
                        </div>
                    </div>

                    <p class="mt-8 text-lg font-medium">Shipping Methods</p>
                    <form class="mt-5 grid gap-6">
                        <div>
                            {ship?.map(item => (
                                <div className="relative my-2" key={item.id} onClick={() => handleChange(item.id, item.attributes.shippingPrice)}>
                                    <input
                                        className="peer hidden"
                                        id={`radio_${item.id}`}
                                        type="radio"
                                        name="radio"
                                        checked={selectedDiv === item.id}
                                        onChange={() => handleChange(item.id)}
                                    />
                                    <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-none"></span>
                                    <label
                                        className={`peer-checked:border-2 peer-checked:border-gray-700 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 ${selectedDiv === item.id ? 'bg-white' : ''}`}
                                        htmlFor={`radio_${item.id}`}
                                    >
                                        <span>
                                            <FaShippingFast className="w-10 h-10 ml-6" />
                                        </span>
                                        <div className="ml-5">
                                            <span className="mt-2 font-semibold">{item.attributes.shippingName}</span>
                                            <p className="text-slate-500 text-sm leading-6">Giao hàng: 2-3 ngày</p>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
                <div>
                    <Shipping />
                </div>
            </div>
        </div>
    )
}

export default Checkout