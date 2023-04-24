import React from 'react';
import Header from '../components/Shared/Header/Header';
import RoomSlider from '../components/Shared/Sliders/RoomSlider/RoomSlider';
import { Outlet } from 'react-router-dom';
import RoomPage from '../components/RoomPage/RoomPage';

const RoomLayout = () => {
    return (
        <div>
            <Header></Header>
            <RoomSlider></RoomSlider>
            <RoomPage></RoomPage>
            <Outlet></Outlet>
        </div>
    );
};

export default RoomLayout;