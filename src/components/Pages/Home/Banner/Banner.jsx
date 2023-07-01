import React from 'react';
import Hotel from '../../../../assets/images/hotel.jpeg';
import int1 from '../../../../assets/images/int1.jpeg'
import int2 from '../../../../assets/images/int2.jpeg'
import int3 from '../../../../assets/images/int3.jpeg'
import int4 from '../../../../assets/images/int4.jpeg'
import { Link } from 'react-router-dom';
import '../../../Style/RandomStyle.css'
import useAuth from '../../../Module/Hooks/useAuth';
import AwesomeSlider from 'react-awesome-slider';

const Banner = () => {
    const { theme } = useAuth();
    return (
        <div className="hero flex w-[2100px] mx-auto pb-10">
            <div className={theme === "light" ? "hero-content text-center text-neutral-content w-[400x] h-[800px] shadow-2xl bg-orange-50" : "hero-content text-center text-neutral-content w-[400x] h-[800px] shadow-2xl bg-[#212429]"}>
                <div className="max-w-md">
                    <h3 className={theme === "light" ? 'font-semibold text-2xl px-10 mb-5 text-slate-900 font-serif text-left' : 'font-semibold text-2xl px-10 mb-5 text-white font-serif text-left'}>Hello our honorable customer, this is our <span className={theme === "light" ? 'text-fuchsia-500 font-bold font-serif' : 'text-sky-500 font-bold font-serif'}>HOTEL FIVE Official Website</span>.
                        Here you can reserve room from your home. And take our quality service.
                        Thanks to takes our website hospitalities.</h3>
                    <Link to="/rooms"><button className='bg-sky-400 hover:bg-sky-600 px-4 py-3 rounded-lg text-white font-bold text-2xl text-center mx-auto mt-10'>Get Services</button></Link>
                </div>
            </div>
            <div className="bg-opacity-60">
                <div className='relative w-[1700px] h-[800px]  bg-rose-100 mx-auto'>
                    <AwesomeSlider className='w-full h-full'>
                        <div data-src={Hotel} />
                        <div data-src={int1} />
                        <div data-src={int2} />
                        <div data-src={int3} />
                        <div data-src={int4} />
                    </AwesomeSlider>
                </div>
            </div>
        </div>

    );
};

export default Banner;