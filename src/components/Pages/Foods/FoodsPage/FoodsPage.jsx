import React, { useEffect, useState } from 'react';
import Food from './Food';

const FoodsPage = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:6001/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => console.log(error.message))
    }, []);
    return (
        <div className='grid grid-cols-4 gap-6 w-[2100px] mx-auto py-10'>
            {
                foods.map(food => <Food key={food._id} food={food}></Food>)
            }
        </div>
    );
};

export default FoodsPage;