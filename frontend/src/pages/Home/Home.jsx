import React from 'react'
import { GiLuckyFisherman } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import banner from '../../img/Home.webp'
import Button from '../../component/Button/Button'
import Slider from '../../component/Slider/Slider'
import ProductSlider from '../../component/ProductSlider/ProductSlider'
import men from '../../img/men.avif'
import woman from '../../img/woman.avif'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const Home = () => {
    return (
        <div className='home py-16'>
            <div className=' bg-banner banner'>
                <Slider />
            </div>
            <div className='product-slider'>
                <ProductSlider />
            </div>
            <div className='w-9/12 m-auto'>
                <div className="flex font-serif">
                    <Link className='w-1/2' to='/men'>
                        <div>
                            <div className="overflow-hidden rounded-l-full">
                                <img src={men} className="w-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="Men" />
                            </div>
                            <div className='text-right mr-8 mt-10'>
                                <h1 className='text-6xl font-bold'>Men</h1>
                                <div className='flex items-center justify-end'>
                                    <BsArrowLeft className='w-8 h-8'/>
                                    <h3 className='font-bold text-xl ml-6'>More</h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className='w-1/2' to='/women'>
                        <div>
                            <div className="overflow-hidden rounded-r-full">
                                <img src={woman} className="w-full hover:scale-110 transition-transform duration-300 ease-in-out" alt="Woman" />
                            </div>
                            <div className='text-left ml-8 mt-10'>
                                <h1 className='text-6xl font-bold'>Women</h1>
                                <div className='flex items-center'>
                                    <h3 className='font-bold text-xl mr-6'>More</h3>
                                    <BsArrowRight className='w-8 h-8'/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home