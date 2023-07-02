import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from 'react-icons/fa';
// import Rating from 'react-rating';
import useAuth from '../../../Module/Hooks/useAuth';
// import { Link } from 'react-router-dom';
// import FoodSlider from '../../Shared/Sliders/FoodSliFder/FoodSlider';

const Food = ({ food }) => {
    const { theme } = useAuth();
    // Like food or love 
    const [love, setLove] = useState(true);
    const { _id, img_url, name, price, love_react, ratings } = food;
    return (
        <div className={theme === "light" ? 'border w-[500px] mx-auto rounded-lg drop-shadow-xl bg-slate-50' : 'border w-[500px] mx-auto rounded-lg drop-shadow-xl bg-[#121011]'}>
            <div className='h-96'>
                {/* Food image */}
                <img src={img_url} className='w-full h-full rounded-lg p-3' alt="" />
            </div>
            <div className='flex justify-between px-3'>
                {/* food name and price */}
                <div className={theme === "light" ? 'text-slate-800' : 'text-sky-500'}>
                    <p className='text-2xl font-semibold'>{name}</p>
                    <p className='font-bold my-4 text-xl'>Price: ${price}</p>
                </div>
                <div className='me-4'>
                    {/* react of customer */}
                    <span onClick={() => setLove(!love)}>
                        {
                            love ? <FaRegHeart className={theme === "light" ? 'w-10 h-10 text-slate-800 font-thin cursor-pointer' : 'w-10 h-10 text-white font-thin cursor-pointer'} /> : <FaHeart className='w-10 h-10 text-red-600 cursor-pointer' />
                        }
                    </span>
                </div>
            </div>
            <div className='flex justify-end items-center'>
                {/* ratings */}
                {/* NOT NEED HERE ITS NEED IN RESERVATION */}
                {/* <div className='mx-3 my-2'>
                    <Rating
                        quiet
                        // placeholderRating={3.5}
                        fractions={2}
                        emptySymbol={<FaRegStar className='w-6 h-6 text-gray-700' />}
                        placeholderSymbol={<FaRegStar className='w-6 h-6' />}
                        fullSymbol={<FaStar className='w-6 h-6 text-yellow-300' />}
                    />
                </div> */}
                {/* <Link to={`/reservation/my-foods/${_id}`}> */}
                <button className='bg-pink-600 hover:bg-pink-500 px-5 py-2 text-white text-xl rounded-lg font-semibold m-4'>
                    Order
                </button>
                {/* </Link> */}
            </div>
            <div className='flex justify-between p-4'>
                {ratings && <p className=' text-slate-800 text-xl font-bold'>ratings: {ratings}</p>}
                <span className={love_react === 0 ? 'hidden' : 'flex text-slate-800 text-xl font-bold'}><FaHeart className='w-7 h-7 text-red-600 mr-1' />{love_react}</span>
            </div>
        </div>
    );
};

export default Food;