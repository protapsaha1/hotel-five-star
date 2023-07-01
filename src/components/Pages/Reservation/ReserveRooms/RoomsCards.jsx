import React from 'react';

const RoomsCards = ({ room }) => {
    const { bed_image, room_classification, price } = room;
    return (
        <div className='border bg-slate-50 rounded-2xl w-[1550px] h-full mx-auto my-3'>
            <div className='h-16 p-3'>
                <h1 className='text-xl text-slate-800 text-right py-3 font-bold'>12/12/23</h1>
                <h1 className='text-xl text-slate-800 text-left py-3 font-bold'>8:00</h1>
            </div>
            <hr />
            <div className='w-full h-[700px] mx-auto'>
                <img className='w-full h-full' src={bed_image} />
            </div>
            <div className='h-16 p-3 flex justify-between py-3'>
                <h1 className='text-3xl text-slate-800 font-bold'>{room_classification}</h1>
                <h1 className='text-xl text-slate-800 font-bold'>Price : ${price}</h1>
            </div>
        </div>
    );
};

export default RoomsCards;