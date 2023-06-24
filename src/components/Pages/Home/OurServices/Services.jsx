import React from 'react';

const Services = () => {
    return (
        <div className='py-28 flex w-[1800px] mx-auto'>
            <div className='bg-pink-600 w-96 mx-auto rounded-lg px-10 pb-10 pt-5 relative'>
                <h3 className='text-center font-bold text-2xl text-white'>Gold Service</h3>
                <p className='text-white text-left font-semibold'>This is our gold package. In this package you available room, breakfast, lunch and dinner.</p>
                <button className='text-white font-bold bg-fuchsia-500 hover:bg-fuchsia-600 px-5 py-2 rounded-lg absolute bottom-4 right-4'>Buy</button>
            </div>
            <div className='bg-rose-600 w-96 mx-auto rounded-lg px-10 pb-10 pt-5 relative'>
                <h3 className='text-center font-bold text-2xl text-white '>Diamond Service</h3>
                <p className='text-white text-left font-semibold'>This is our diamond package. In this package you available room, breakfast, lunch, dinner, Gym and swimming pool.</p>
                <button className='text-white font-bold bg-pink-500 hover:bg-pink-700 px-5 py-2 rounded-lg absolute bottom-4 right-4'>Buy</button>
            </div>
            <div className='bg-fuchsia-600 w-96 mx-auto rounded-lg px-10 pb-10 pt-5 relative'>
                <h3 className='text-center font-bold text-2xl text-white '>Platinum Service</h3>
                <p className='text-white text-left font-semibold'>This is our platinum package. In this package you available room, breakfast, lunch, dinner, Gym, swimming pool and our bar service.</p>
                <button className='text-white font-bold bg-rose-500 hover:bg-rose-600 px-5 py-2 rounded-lg absolute bottom-4 right-4'>Buy</button>
            </div>
        </div>
    );
};

export default Services;