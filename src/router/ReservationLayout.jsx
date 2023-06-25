import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Shared/Navber/Header/Header';
import '../components/Style/RandomStyle.css';

const ReservationLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='main_container'>
                <div>
                    <Outlet></Outlet>
                </div>
                <div className='left_nav'>
                    <ol>
                        <li><Link to="/reservation/my-rooms">Reserve Rooms</Link></li>
                        <li><Link to="/reservation/my-foods">Reserve Foods</Link></li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default ReservationLayout;
