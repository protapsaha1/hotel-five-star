import React from 'react';

const RoomsCards = ({ room }) => {
    const { bedImgUrl, roomClassification, roomPrice } = room;
    return (
        <div className='border bg-slate-50 rounded-2xl w-[1550px] h-full mx-auto my-3'>
            <div className='h-16 p-3'>
                <h1 className='text-xl text-slate-800 text-right py-3 font-bold'>12/12/23</h1>
                <h1 className='text-xl text-slate-800 text-left py-3 font-bold'>8:00</h1>
            </div>
            <hr />
            <div className='w-full h-[700px] mx-auto'>
                <img className='w-full h-full' src={bedImgUrl} />
            </div>
            <div className='h-16 p-3 flex justify-between py-3'>
                <h1 className='text-3xl text-slate-800 font-bold'>{roomClassification}</h1>
                <h1 className='text-xl text-slate-800 font-bold'>Price : ${roomPrice}</h1>
            </div>
        </div>
    );
};

export default RoomsCards;