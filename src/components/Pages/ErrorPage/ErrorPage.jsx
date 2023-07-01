import React from 'react';
import err from '../../../assets/images/err.gif';
const ErrorPage = () => {
    return (
        <div className='w-full h-[1200px] bg-slate-100 py-36'>
            <img className='w-[1000px] h-[700px] mx-auto' src={err} alt="" />
        </div>
    );
};

export default ErrorPage;