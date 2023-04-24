import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='relative'>
            <div className='flex justify-between bg-blue-500 w-full h-14 items-center px-8 drop-shadow-md fixed top-0 left-0 right-0'>
                <div>
                    <h4 className='font-serif text-white text-2xl hover:border-0 hover:rounded-lg hover:bg-blue-400 hover:px-3 hover:py-2'><Link to="/">Hotel Five</Link></h4>
                </div>
                <div>
                    <Link to="/" className='mx-3 text-white hover:text-rose-500 text-xl'>Home</Link>
                    <Link to="/rooms" className='mx-3 text-white hover:text-rose-500 text-xl'>Rooms</Link>
                    <Link to="/foods" className='mx-3 text-white hover:text-rose-500 text-xl'>Foods</Link>
                    <Link to="/reservation" className='mx-3 text-white hover:text-rose-500 text-xl'>Reservation</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;