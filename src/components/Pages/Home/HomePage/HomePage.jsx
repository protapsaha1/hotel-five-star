import React from 'react';
import Services from '../OurServices/Services';
import Banner from '../Banner/Banner';
import hotel from '../../../../assets/images/hotel.jpeg';
import '../../../Style/RandomStyle.css';
import useAuth from '../../../Module/Hooks/useAuth';

const HomePage = () => {
    const { theme } = useAuth();
    return (
        <div className={theme === "light" ? 'bg-white h-full' : 'bg-[#0f1929] h-full'}>
            <Banner />
            <Services />


            {/* <div className='slider_main'>
                <div className='slider'>
                    <div className='image_slide'>
                        <img src={hotel} alt="" />
                    </div>
                    <div className='image_slide'>
                        <img src={hotel} alt="" />
                    </div>
                    <div className='image_slide'>
                        <img src={hotel} alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HomePage;