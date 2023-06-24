import React from 'react';
import FoodsPage from '../FoodsPage/FoodsPage';
import FoodSlider from '../../../Shared/Sliders/FoodSlider/FoodSlider';

const Foods = () => {
    return (
        <div>
            <FoodSlider />
            <FoodsPage />
        </div>
    );
};

export default Foods;