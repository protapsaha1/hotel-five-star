import React, { useState } from 'react';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import useAuth from '../../../Module/Hooks/useAuth';

const FoodSlider = () => {
    const { theme } = useAuth();
    const [currIndex, setCurrIndex] = useState(0);
    const slide_foods_img = [
        {
            url: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z291cm1ldCUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        },
        {
            url: "https://media.istockphoto.com/id/1221032000/photo/risotto-with-mushrooms-in-a-plate.jpg?s=612x612&w=0&k=20&c=KNdNtL0WyUfBHICZhGVTLhA1TSG2bWohahdmRzYuTRw="
        },
        {
            url: "https://media.istockphoto.com/id/520421898/photo/beef-steaks-on-the-grill.jpg?s=612x612&w=0&k=20&c=x66gAivz2_zG-E-I963_VwySZQrNHXjD2Q0PW3NXeL4="
        },
        {
            url: "https://thumbs.dreamstime.com/b/healthy-grilled-chicken-caesar-salad-cheese-croutons-49277045.jpg"
        },
        {
            url: "https://media.istockphoto.com/id/183869552/photo/pasta-with-king-prawns.jpg?s=612x612&w=0&k=20&c=aLTrQ16nUuIEnoP6_haHbJ9ZZMjV7xyuhIBPG4ipFeo="
        },
        {
            url: "https://keviniscooking.com/wp-content/uploads/2018/02/How-to-Make-Creamy-Lobster-Bisque-square.jpg"
        }
    ]
    console.log(slide_foods_img[0].url);

    const handleLeftArrow = () => {
        const firstSlideIndex = currIndex === 0;
        const newSlideIndex = firstSlideIndex ? slide_foods_img.length - 1 : currIndex - 1;
        setCurrIndex(newSlideIndex);
    }

    const handleRightArrow = () => {
        const lastIndexSlide = currIndex === slide_foods_img.length - 1;
        const nextIndex = lastIndexSlide ? 0 : currIndex + 1;
        setCurrIndex(nextIndex);
    }

    const handleGoNextSlideByDot = slideCurrentIndex => {
        setCurrIndex(slideCurrentIndex);
    }

    return (
        <div className='relative w-[2100px] h-[1000px] bg-green-100 mx-auto group shadow-inner'>
            {/* <div
                style={{ backGroundImage: `url(${slide_foods_img[0].url})` }}
                className='w-full h-full bg-center bg-cover duration-500'
            ></div> */}
            <img src={slide_foods_img[currIndex].url} className='w-full h-full bg-center bg-cover duration-500' alt="" />
            {/* <div>
            </div> */}
            {/* leftarrow */}
            <div onClick={handleLeftArrow} className='hidden group-hover:block absolute top-1/2 left-6 text-bold text-slate-800 hover:text-white hover:shadow-2xl bg-[whitesmoke] hover:bg-black py-5 px-5 hover:py-5 hover:px-5 rounded-[50%] hover:rounded-[50%]'>
                <SlArrowLeft className='w-14 h-14' />
            </div>
            {/* rightarrow */}
            <div onClick={handleRightArrow} className='hidden group-hover:block absolute top-1/2 right-6 text-bold text-slate-800 hover:text-white hover:shadow-2xl bg-[whitesmoke] hover:bg-black py-5 px-5 hover:py-5 hover:px-5 rounded-[50%] hover:rounded-[50%]'>
                <SlArrowRight className='w-14 h-14' />
            </div>
            <div className='flex justify-center top-4 py-2'>
                {
                    slide_foods_img.map((slide, index) => (
                        <div key={index} onClick={() => handleGoNextSlideByDot(index)} className='cursor-pointer'>
                            {currIndex === index ? <FaCircle className={theme === "light" ? 'w-5 h-5 text-slate-950 mr-4' : 'w-5 h-5 text-white mr-4'} /> : <FaRegCircle className={theme === "light" ? 'w-5 h-5 text-slate-950 mr-4' : 'w-5 h-5 text-white mr-4'} />}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FoodSlider;