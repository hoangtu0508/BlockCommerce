import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { connectWallet } from '../../features/metamask/metamaskSlice';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg'
import { FiSearch } from 'react-icons/fi'
import { GiLuckyFisherman } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Button from '../Button/Button';
import './Header.scss'
import { toast } from 'react-toastify';
import { FaEthereum } from 'react-icons/fa'

const Headder = () => {
    // const balance = useSelector(state => state.metamask.balance);
    // const walletAddress = useSelector(state => state.metamask.walletAddress);
    const walletInfo = useSelector(state => state.metamask.walletInfo)
    const walletAddress = walletInfo?.walletAddress;
    const balance = walletInfo?.balance;
    // const balance = walletInfo.balance;
    // const addressWallet = walletInfo.addressWallet;
    const { isSuccess } = useSelector(state => state.auth);

    const token = localStorage.getItem("token");

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dispatch = useDispatch()

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };
    const handleConnect = () => {
        if (token) {
            dispatch(connectWallet())
        } else {
            toast.info("Please log in to connect your wallet!");
        }
    }

    return (
        <div className='z-50 flex h-12 fixed justify-between w-full mt-6 px-32'>
            <div className='w-1/5'>
                <div className='rounded-3xl shadow-lg h-full w-12'>
                    <GiLuckyFisherman className='rounded-3xl shadow-lg m-auto h-full bg-bg w-12 text-oranger' />
                </div>
            </div>
            <div
                className="
                flex items-center justify-center text-center rounded-3xl shadow-lg px-5 bg-white text-sm font-semibold
                w-1/4
            "
            >
                <ul className='flex flex-row w-full'>
                    <li className='m-auto'><Link to='/'>Home</Link></li>
                    <li className='m-auto'><Link>Shop</Link></li>
                    <li className='m-auto'><Link>Blog</Link></li>
                    <li className='m-auto'><Link>Abouts</Link></li>
                    <li className='m-auto'>Category</li>

                </ul>
            </div>

            <div className='w-1/5 '>
                <div className="w-full py-1 flex items-center justify-center text-center text-sm font-semibold">
                    <span className='m-auto'><FiSearch className='w-6 h-6 ' /></span>
                    {
                        walletAddress ? (
                            <div className='rounded-3xl shadow-lg h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5'>
                                <div className='rounded-full shadow-lg m-auto h-full px-5 text-white w-full'>
                                    <div className='flex items-center'>
                                        <FaEthereum className='w-5 h-5 mr-2' />
                                        <h3 className='text-base'>{balance.slice(0, 6)} ETH</h3>
                                    </div>
                                    <h4>{walletAddress.slice(0, 9) + '...' + walletAddress.slice(-5)}</h4>
                                </div>
                            </div>
                        ) : (
                            <div onClick={handleConnect} className='h-10 m-auto'>
                                <Button name='Connect' />
                            </div>
                        )
                    }


                    <div className='icon-dropdown m-auto' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span><CgProfile className='h-6 w-6 m-auto' />
                        {
                            isDropdownOpen && (
                                <div className='m-auto'>
                                    <div className="dropdown-content pt-9 bg-none">
                                        <ul className='p-3'>
                                            <li><Link to='sign-in'>Sign In</Link></li>
                                            <li><Link to='sign-up'>Sign Up</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }

                    </span></div>

                    <span className='m-auto'><AiOutlineShoppingCart className='h-6 w-6 m-auto' /></span>

                    {/* {isLogin ? (
                            // if user is logged in, show profile button and dropdown menu
                            <li className='nav-right-btn'>
                                <CgProfile className='icon-profile' onClick={handleClick} />
                                {isOpen && (
                                    <div className="dropdown-content">
                                        <Profile setIsLogin={setIsLogin} />
                                    </div>
                                )}
                            </li>
                        ) : (
                            // if user is not logged in, show login and register buttons
                            <li className='nav-right-btn'>
                                <CgProfile className='icon-profile' onClick={handleClick} />
                                {isOpen && (
                                    <div className="dropdown-content">
                                        <a href="sign-in" onClick={handleLogin}>Sign In</a>
                                        <a href="sign-up">Sign Up</a>
                                    </div>
                                )}
                            </li>
                        )} */}

                </div>

            </div>
        </div>
    )
}

export default Headder