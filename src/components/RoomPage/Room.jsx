import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaRegBookmark, FaRegStar, FaShareAlt, FaStar, FaStarHalf } from "react-icons/fa";

const Room = ({ room }) => {
    console.log(room)
    const [bookmark, setBookmark] = useState(false);
    const { id, bedImgUrl, roomPrice, roomStatus, availableRooms, roomClassification } = room;
    return (
        <div className='border w-96 mx-auto rounded-lg drop-shadow-xl bg-slate-50'>
            <img src={bedImgUrl} className='w-96 h-48 rounded-lg p-3' alt="" />
            <div className='flex justify-between px-3'>
                <div>
                    <p className='font-semibold text-xl'>Quality: {roomClassification}</p>
                    <p className='font-semibold'>Room: {roomStatus}</p>
                    <p className='font-semibold'>Available: {availableRooms}</p>
                    <p className='my-3 text-2xl font-bold'>Cost: ${roomPrice}</p>
                </div>
                <div>
                    <div className='flex justify-end p-0'>
                        <FaRegBookmark className='w-6 h-6 mr-0 ' />
                        <FaShareAlt className='w-6 h-6 ms-1' />
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='mx-3 my-2'>
                    <Rating
                        quiet
                        // placeholderRating={3.5}
                        emptySymbol={<FaRegStar className='w-6 h-6' />}
                        placeholderSymbol={<FaRegStar className='w-6 h-6' />}
                        fullSymbol={<FaStar className='w-6 h-6' />}
                    />
                </div>
                <button className='bg-pink-400 hover:bg-pink-600 px-5 py-2 text-white text-xl rounded-lg font-semibold m-4'>Get</button>
            </div>
        </div>
    );
};

export default Room;