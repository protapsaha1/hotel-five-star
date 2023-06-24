import React from 'react';
import { Outlet } from 'react-router-dom';
import RightNav from '../components/Pages/Reservation/RightNav/RightNav';
import Header from '../components/Shared/Navber/Header/Header';

const ReservationLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-rows-2 grid-flow-col gap-4 relative'>
                <div className='row-span-3 col-span-2 absolute left-5'><Outlet></Outlet></div>
                <div className='col-span-2 absolute right-0'><RightNav></RightNav></div>
            </div>

        </div>
    );
};

export default ReservationLayout;