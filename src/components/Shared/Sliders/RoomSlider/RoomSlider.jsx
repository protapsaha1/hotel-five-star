import React, { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import useAuth from '../../../Module/Hooks/useAuth';

const Slider = () => {
    const { theme } = useAuth();
    const [currIndex, setCurrIndex] = useState(0);
    const slide_rooms_img = [
        {
            url: "https://s3.envato.com/files/301739218/3097p.jpg"
        },
        {
            url: "https://img.freepik.com/premium-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1904.jpg"
        },
        {
            url: "https://media.designcafe.com/wp-content/uploads/2019/11/17054922/how-to-make-your-bedroom-feel-like-five-star-hotel-intro.jpg"
        },
        {
            url: "https://planndesign.sgp1.digitaloceanspaces.com/article/transitional-bedroom_7.jpg"

        },
        {
            url: "https://d3m2b6ge3mz697.cloudfront.net/media/mageplaza/blog/post/f/e/featureimage-luxury-hotel-bed.jpg"
        },
        {
            url: "https://planndesign.sgp1.digitaloceanspaces.com/article/modern-bedroom_2.jpg"
        }
    ]
    console.log(slide_rooms_img[0].url);

    const handleLeftArrow = () => {
        const firstSlideIndex = currIndex === 0;
        const newSlideIndex = firstSlideIndex ? slide_rooms_img.length - 1 : currIndex - 1;
        setCurrIndex(newSlideIndex);
    }

    const handleRightArrow = () => {
        const lastIndexSlide = currIndex === slide_rooms_img.length - 1;
        const nextIndex = lastIndexSlide ? 0 : currIndex + 1;
        setCurrIndex(nextIndex);
    }

    const handleGoNextSlideByDot = slideCurrentIndex => {
        setCurrIndex(slideCurrentIndex);
    }
    // TODO SLIDER ROOM
    return (
        <div className='relative w-[2100px] h-[1000px] bg-green-100 mx-auto group'>
            <img src={slide_rooms_img[currIndex].url} className='w-full h-full bg-center bg-cover duration-500 ' alt="" />
            {/* leftarrow */}
            <div onClick={handleLeftArrow} className='hidden group-hover:block absolute top-1/2 left-6  text-bold text-slate-800 hover:text-white hover:shadow-2xl bg-[whitesmoke] hover:bg-black py-5 px-5 hover:py-5 hover:px-5 rounded-[50%] hover:rounded-[50%]'>
                <SlArrowLeft className='w-14 h-14' />
            </div>
            {/* rightarrow */}
            <div onClick={handleRightArrow} className='hidden group-hover:block absolute top-1/2 right-6  text-bold text-slate-800 hover:text-white hover:shadow-2xl bg-[whitesmoke] hover:bg-black py-5 px-5 hover:py-5 hover:px-5 rounded-[50%] hover:rounded-[50%]'>
                <SlArrowRight className='w-14 h-14' />
            </div>
            <div className='flex justify-center top-4 py-2'>
                {
                    slide_rooms_img.map((slide, index) => (
                        <div key={index} onClick={() => handleGoNextSlideByDot(index)} className='cursor-pointer'>
                            {currIndex === index ? <FaCircle className={theme === "light" ? 'w-5 h-5 text-slate-950 mr-4' : 'w-5 h-5 text-white mr-4'} /> : <FaRegCircle className={theme === "light" ? 'w-5 h-5 text-slate-950 mr-4' : 'w-5 h-5 text-white mr-4'} />}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;