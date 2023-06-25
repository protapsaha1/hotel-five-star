import React from 'react';
import { Link } from 'react-router-dom';

const RightNav = () => {
    return (
        <div className='relative'>
            <div className='sticky top-0 right-0 h-[800px] w-[400px] bg-zinc-50 left-0'>
                <h1 className='text-center text-white'>hello</h1>
                <Link to="reservation/my-rooms">Reserve Rooms</Link>
                <Link to="/reservation/my-foods">Reserve Foods</Link>
            </div>
        </div>
    );
};

export default RightNav;