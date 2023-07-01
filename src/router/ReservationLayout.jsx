import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Shared/Navber/Header/Header';
import '../components/Style/RandomStyle.css';

const ReservationLayout = () => {
    return (
        <div className='bg-white'>
            <Header></Header>
            <div className='main_container'>
                <div className='left_nav'>
                    <ul>
                        <li><Link to="/reservation/my-rooms">Reserve Rooms</Link></li>
                        <li><Link to="/reservation/my-foods">Reserve Foods</Link></li>
                    </ul>
                </div>
                <div className='out' >
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default ReservationLayout;
