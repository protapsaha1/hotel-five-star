import React from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const FoodSlider = ({ image }) => {
    return (
        <div className='relative w-[2100px] h-[800px] py-10 border-2 bg-red-500 mx-auto'>
            <div>
                {/* <img src={image} className='w-full h-96 ' alt="" /> */}
            </div>
            {/* leftarrow */}
            <div className='absolute top-1/2 left-6 text-bold hover:text-white hover:shadow-2xl hover:left-5 hover:btn border-0 hover:btn-ghost hover:w-28 hover:h-28 hover:rounded-[50%]'>
                <SlArrowLeft className='w-14 h-14' />
            </div>
            {/* rightarrow */}
            <div className='absolute top-1/2 right-6 text-bold hover:text-white hover:shadow-2xl hover:right-5 hover:btn border-0 hover:btn-ghost hover:w-28 hover:h-28 hover:rounded-[50%]'>
                <SlArrowRight className='w-14 h-14' />
            </div>
        </div>
    );
};

export default FoodSlider;