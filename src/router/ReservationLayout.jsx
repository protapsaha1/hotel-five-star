import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';
import RightNav from '../components/RightNav/RightNav';

const ReservationLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-4'><Outlet></Outlet></div>
            <div className='col-span-1'><RightNav></RightNav></div>
            </div>

        </div>
    );
};

export default ReservationLayout;