import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaBookmark, FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const [bookmark, setBookmark] = useState(true);
    const { _id, bedImgUrl, roomPrice, roomStatus, availableRooms, roomClassification } = room;
    return (
        <div className={availableRooms === 0 ? 'hidden' : 'border w-[500px] mx-auto rounded-lg shadow-xl bg-slate-50'}>
            <div className='h-96'>
                <img src={bedImgUrl} className='w-full h-full rounded-lg p-3' alt="" />
            </div>
            <div className='flex justify-between px-3'>
                <div className='text-slate-800'>
                    <p className='font-semibold text-xl'>Quality: {roomClassification}</p>
                    <p className='font-semibold'>Room: {roomStatus}</p>
                    <p className='font-semibold'>Available: {availableRooms}</p>
                    <p className='my-3 text-2xl font-bold'>Cost: ${roomPrice}</p>
                </div>
                <div>
                    <div className='flex justify-end p-0' >
                        <span onClick={() => setBookmark(!bookmark)}>
                            {bookmark ? <FaRegBookmark className='w-6 h-6 mr-0 text-slate-950' /> : <FaBookmark className='w-6 h-6 mr-0 text-slate-950' />}
                        </span>

                        <span>
                            <FaShareAlt className='w-6 h-6 ms-1 text-slate-950' />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                {/* NOT NEED HERE ITS NEED IN RESERVATION */}
                <div className='mx-3 my-2'>
                    <Rating
                        quiet
                        placeholderRating={3.5}
                        fractions={2}
                        emptySymbol={<FaRegStar className='w-6 h-6 text-gray-700' />}
                        placeholderSymbol={<FaRegStar className='w-6 h-6' />}
                        fullSymbol={<FaStar className='w-6 h-6 text-yellow-300' />}
                    />
                </div>
                <Link disabled={availableRooms === 0} to={`/reservation/my-rooms/${_id}`}>
                    <button className='bg-pink-400 hover:bg-pink-600 px-5 py-2 text-white text-xl rounded-lg font-semibold m-4' disabled={availableRooms === 0} >Get</button>
                </Link>
            </div>
        </div>
    );
};

export default Room;