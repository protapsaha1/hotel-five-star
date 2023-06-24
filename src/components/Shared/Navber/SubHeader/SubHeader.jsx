import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    return (
        <div className='bg-slate-100 flex justify-between items-baseline py-5 px-20'>
            <div>
                <button className='rounded-3xl bg-red-500 text-xl font-semibold p-3 text-white flex items-center'>Admin Penal <FaAngleDown/></button>
            </div>
            <div>
                <Link to="/login"><button className='btn btn-outline-primary mx-2 text-lg'>Login</button></Link>
                <Link><button className='btn btn-outline-primary mx-2 text-lg'>Sign Up</button></Link>
                <Link><button className='btn btn-outline-primary mx-2 text-lg'>LogOut</button></Link>
            </div>
        </div>
    );
};

export default SubHeader;