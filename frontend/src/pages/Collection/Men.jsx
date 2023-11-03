import React, { useState } from 'react'
import men from '../../img/men.avif'
import { BsSearch } from 'react-icons/bs'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { AiOutlineDownCircle } from 'react-icons/ai';
import Product from '../../component/Product/Product';

const Men = () => {
    const [priceRange, setPriceRange] = useState([50, 300])
    const [isOpenPrice, setOpenPrice] = useState(false)
    const [isOpenSort, setOpenSort] = useState(false)

    const [selectedOption, setSelectedOption] = useState('');

    const handlePriceRangeChange = (value) => {
        setPriceRange(value);
    };

    const handleClickPrice = () => {
        setOpenPrice(!isOpenPrice)
    }

    const handleClickSort = () => {
        setOpenSort(!isOpenSort)
    }

    const options = ['Volvo', 'Saab', 'Mercedes', 'Audi'];

    const selectOption = (option) => {
        setSelectedOption(option);
        setOpenSort(false);
    };

    const products = [
        {
            id: 1,
            name: "Nike Air MX Super 5000",
            url: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            star: 5.0,
            heart: 650,
            price: 20,
            priceSale: 15,
        },
        {
            id: 2,
            name: "Nike Air MX Super 5000 1",
            url: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            star: 4.8,
            heart: 650,
            price: 20,
            priceSale: 15,
        },
        {
            id: 3,
            name: "Nike Air MX Super 5000 3",
            url: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            star: 4.8,
            heart: 650,
            price: 20,
            priceSale: 15.00,
        },
        {
            id: 4,
            name: "Nike Air MX Super 5000 4",
            url: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            star: 4.8,
            heart: 650,
            price: 20,
            priceSale: 15,
        },
        {
            id: 5,
            name: "Nike Air MX Super 5000 5",
            url: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            star: 4.8,
            heart: 650,
            price: 20,
            priceSale: 15,
        }
    ]

    return (
        <div className='pb-16'>
            <div className='flex justify-end items-center'>
                <div className='w-6/12'>
                    <div className=''>
                        <h1 className='text-6xl font-bold'>MEN'S COLLECTION</h1>
                        <h3 className='my-6 font-bold text-sm'>Suggestions</h3>
                        <p className='w-3/5'>The menswear category is a collection of products and accessories specifically for men, helping you create your unique personal style and express yourself through apparel and accessories. This category includes a wide range of items from clothing, shoes, watches, handbags, jewelry, to personal care products and more.</p>
                    </div>
                </div>
                <div className='w-5/12'>
                    <img src={men} className='rounded-l-full'></img>
                </div>
            </div>

            <div className='mt-10 w-10/12 m-auto'>
                <div>
                    <div className='grid grid-cols-4 gap-12'>
                        <div className=''>
                            <h3 className='text-xl font-medium'>FILTER YOUR SEARCH</h3>
                            <h4>345 Products</h4>
                        </div>
                        <div>
                            <h3 className='text-lg font-medium'>Search</h3>
                            <div className='flex items-center border-b border-text'>
                                <input type='text' className='w-full  py-2 bg-transparent focus:outline-none' placeholder='Search Product'></input>
                                <BsSearch className='w-6 h-6 ml-3' />
                            </div>
                        </div>

                        <div className='relative border-b border-text'>
                            <h3 className='text-lg font-medium'>Filter by</h3>
                            <div className='flex justify-between items-center pb-2 py-2' onClick={() => handleClickPrice()}>
                                <h6 className='text-sm font-medium'>Price</h6>
                                <AiOutlineDownCircle className='w-6 h-6' />
                            </div>
                            {isOpenPrice &&
                                <div className='absolute p-4 border border-text w-full mt-3 rounded-lg z-10 bg-white'>
                                    <Slider
                                        range
                                        min={0}
                                        max={500}
                                        defaultValue={priceRange}
                                        onChange={handlePriceRangeChange}
                                    />
                                    <div className='price'>
                                        Giá: ${priceRange[0]} - ${priceRange[1]}
                                    </div>
                                </div>
                            }

                        </div>
                        <div className='border-b border-text relative'>
                            <h3 className='text-lg font-medium'>Sort by</h3>
                            <div className='flex justify-between pb-2 py-2' onClick={() => handleClickSort()}>
                                <div
                                    className="bg-transparent cursor-pointer"
                                >
                                    {selectedOption ? selectedOption : 'Select an option'}
                                </div>
                                <AiOutlineDownCircle className='w-6 h-6' />
                            </div>
                            {isOpenSort && (
                                <ul className="absolute left-0 mt-2 py-1 bg-white border border-gray-300 rounded-lg shadow w-full mt-3 z-20">
                                    {options.map((option) => (
                                        <li
                                            key={option}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => selectOption(option)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-12 mt-10'>
                    {products.map((product) => (
                        <Product product={product} />
                    ))}
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Men