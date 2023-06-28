import Food from './Food';
import useFoods from '../../../Module/Hooks/useFoods';

const FoodsPage = () => {
    const { foods } = useFoods();
    
    return (
        <div className='grid grid-cols-4 gap-6 w-[2100px] mx-auto py-10'>
            {foods &&
                foods.map(food => <Food key={food._id} food={food}></Food>)
            }
        </div>
    );
};

export default FoodsPage;