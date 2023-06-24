import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Style/RandomStyle.css';

// sticky top-0 left-0 right-0 
const Header = () => {
    return (
        <div className='w-full h-20 bg-blue-500 shadow-2xl'>
            <div className='flex justify-between bg-blue-500 w-[2100px] h-full mx-auto items-center px-12'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <h4 className='font-serif text-white text-4xl hover:border-0 hover:rounded-lg hover:bg-blue-400 hover:px-3 hover:py-2'><Link to="/">Hotel Five</Link></h4>
                    </div>
                    <div className='' >
                        <Link to="/" className='nav_link'>Home</Link>
                        <Link to="/rooms" className='nav_link'>Rooms</Link>
                        <Link to="/foods" className='nav_link'>Foods</Link>
                        <Link to="/reservation" className='nav_link'>Reservation</Link>
                        <Link to="/contact" className='nav_link'>Contact</Link>
                        <Link to="/history" className='nav_link'>History</Link>
                    </div>
                </div>
                <div>
                    <img src="" className='w-16 h-16 rounded-full' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;