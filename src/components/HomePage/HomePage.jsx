import React from 'react';
import Hotel from '../../images/hotel.jpeg';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='mt-14'>
            <div className='bg-orange-50 flex h-96 '>
                <div className='px-10 py-14 w-1/2'>
                    <h3 className='font-semibold text-2xl px-14 text-neutral-900 font-sans'>Hello our honorable customer, this is our <span className='text-fuchsia-500 font-bold font-serif'>HOTEL FIVE Official Website</span>.
                        Here you can reserve room from your home. And take our quality service.
                        Thanks to takes our website hospitalities.</h3>
                    <Link to="/rooms"><button className='bg-sky-400 hover:bg-sky-600 px-4 py-3 rounded-lg text-white font-bold text-xl ms-14 mt-10 '>Get Services</button></Link>
                </div>
                <div className='w-1/2 py-5 px-10 m-auto'>
                    <img src={Hotel} className=' w-full rounded-lg border' />
                </div>
            </div>
            <div className='my-10 flex'>
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
        </div>
    );
};

export default HomePage;