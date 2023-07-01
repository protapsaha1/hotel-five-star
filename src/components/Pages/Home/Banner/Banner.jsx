import React from 'react';
import Hotel from '../../../../assets/images/hotel.jpeg';
import { Link } from 'react-router-dom';
import '../../../Style/RandomStyle.css'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import useAuth from '../../../Module/Hooks/useAuth';
// import AwesomeSlider from 'react-awesome-slider';
// // import AwesomeSliderStyles from '../../../Style/RandomStyle.css';
// import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
// import 'react-awesome-slider/dist/styles.css';

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
                {/*TODO Slider of hotel view */}
                {/* <AwesomeSlider>
                    <div data-src={Hotel} />
                    <div data-src={Hotel} />
                    <div data-src={Hotel} />
                    <div data-src={Hotel} />
                </AwesomeSlider> */}
                <div className='relative w-[1700px] h-[800px]  bg-rose-100 mx-auto'>
                    <div>
                        <img src={Hotel} className='w-full h-[800px] ' alt="" />
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
            </div>
        </div>

    );
};

export default Banner;