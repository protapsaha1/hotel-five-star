import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookedRoom from './BookedRoom';

const ReserveRoom = () => {
    const specificRoom = useLoaderData();
    console.log(specificRoom)
    return (
        <div className='border w-[700px] h-full relative m-5'>
            <img className='absolute right-6 w-[700px] h-[500px]' src={specificRoom.bedImgUrl} alt="" /> 
            <p>{specificRoom.roomClassification}</p>
        </div>
    );
};

export default ReserveRoom;