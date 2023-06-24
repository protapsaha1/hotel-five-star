import React from 'react';
import err from '../../../assets/images/err.gif';
const ErrorPage = () => {
    return (
        <div className='w-full h-[100vh] bg-slate-100 py-96'>
            <img className='w-[2000px] h-[1400px] mx-auto' src={err} alt="" />
        </div>
    );
};

export default ErrorPage;