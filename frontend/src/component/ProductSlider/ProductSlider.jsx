import React from 'react'
import { Link } from 'react-router-dom'

const ProductSlider = () => {
    const category = [
        {
            id: 1,
            name: 'Mũ Nam'
        },
        {
            id: 2,
            name: 'Mũ nữ'
        },

    ]
    return (
        <div>ProductSlider
            <div className='text-center'>
                <ul>{
                    category.map((cate) => (
                        <li><Link>{cate.name}</Link></li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default ProductSlider