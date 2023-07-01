import React, { useState } from 'react';
// import Rating from 'react-rating';
import { FaBookmark, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from "react-icons/fa";
import useAuth from '../../../Module/Hooks/useAuth';
// import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { theme } = useAuth();
    const [bookmark, setBookmark] = useState(true);
    const { _id, bed_image, price, room_status, available_rooms, room_classification, category, reviews } = room;
    console.log(room)
    return (
        <div className={available_rooms === 0 ? 'hidden' : 'border w-[500px] mx-auto rounded-lg shadow-2xl bg-slate-50' && theme === "light" ? 'border w-[500px] mx-auto rounded-lg shadow-2xl bg-slate-50' : 'border w-[500px] mx-auto rounded-lg shadow-2xl bg-[#121011]'}>
            <div className='h-96'>
                <img src={bed_image} className='w-full h-full rounded-lg p-3' alt="" />
            </div>
            <div className='flex justify-between px-3'>
                <div className={theme === "light" ? 'text-slate-800' : 'text-sky-500'}>
                    <p className='font-semibold text-xl'>Quality: {room_classification}</p>
                    <p className='font-semibold'>Room: {room_status}</p>
                    <p className='font-semibold'>Available: {available_rooms}</p>
                    <p className='my-3 text-2xl font-bold'>Cost: ${price}</p>
                </div>
                <div>
                    <div className='flex justify-end p-0' >
                        <span onClick={() => setBookmark(!bookmark)}>
                            {bookmark ? <FaRegBookmark className='w-8 h-8 mr-0 text-slate-950' /> : <FaBookmark className='w-8 h-8 mr-0 text-slate-950' />}
                        </span>
                        {/* react share using all ready install */}
                        <span>
                            <FaShareAlt className='w-8 h-8 ms-1 text-slate-950' />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-end pr-3'>
                <div className={theme === "light" ? 'text-slate-800 mr-10 my-5' : 'text-sky-500 mr-10 my-5'}>
                    <h1 className='font-semibold text-4xl mb-2'>Category</h1>
                    <p className='font-semibold text-2xl'>Bed: {category.bed_amount}</p>
                    <p className='font-semibold text-2xl'>Adult: {category.adult}</p>
                    <p className='font-semibold text-2xl'>Child: {category.child}</p>
                </div>
            </div>
            <hr />
            <div className='flex justify-between items-center'>
                {/* NOT NEED HERE ITS NEED IN RESERVATION */}
                {/* <div className='mx-3 my-2'>
                    {/* <Rating
                        quiet
                        placeholderRating={3.5}
                        fractions={2}
                        emptySymbol={<FaRegStar className='w-6 h-6 text-gray-700' />}
                        placeholderSymbol={<FaRegStar className='w-6 h-6' />}
                        fullSymbol={<FaStar className='w-6 h-6 text-yellow-300' />}
                    /> */}
                {/* </div>  */}
                <h1 className={theme === "light" ? 'font-semibold text-2xl text-slate-900 ms-5' : 'font-semibold text-2xl text-sky-500 ms-5'}>Reviews: {reviews}</h1>
                {/* <Link disabled={available_rooms === 0} to={`/reservation/my-rooms/${_id}`}> */}
                <button className='bg-pink-400 hover:bg-pink-600 px-5 py-2 text-white text-xl rounded-lg font-semibold m-4' disabled={available_rooms === 0} >Get</button>
                {/* </Link> */}
            </div>
        </div>
    );
};

export default Room;