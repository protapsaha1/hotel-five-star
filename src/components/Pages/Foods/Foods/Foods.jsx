import React from 'react';
import FoodsPage from '../FoodsPage/FoodsPage';
import FoodSlider from '../../../Shared/Sliders/FoodSlider/FoodSlider';
import useTitle from '../../../Module/Hooks/useTitle';

const Foods = () => {
    useTitle("Foods");
    return (
        <div>
            <FoodSlider />
            <FoodsPage />
        </div>
    );
};

export default Foods;