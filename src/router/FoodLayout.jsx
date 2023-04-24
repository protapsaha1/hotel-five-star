import React from 'react';
import Header from '../components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import FoodSlider from '../components/Shared/Sliders/FoodSlider/FoodSlider';

const FoodLayout = () => {
    return (
        <div>
            <Header></Header>
            <FoodSlider></FoodSlider>
            <Outlet></Outlet>
        </div>
    );
};

export default FoodLayout;