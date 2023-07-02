import React from 'react';
import useTitle from '../../../../../Module/Hooks/useTitle';
import useAuth from '../../../../../Module/Hooks/useAuth';

const AddFoods = () => {
    useTitle("Add Food Cart");
    const { theme } = useAuth();

    const handleAddFoodCart = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.food_name.value;
        const price = parseFloat(form.price.value);
        const food_img = form.food_img.files[0];
        console.log(foodName, price, food_img)
    }

    return (
        <div className={theme === "light" ? 'bg-zinc-100 w-full h-full shadow-inner' : 'bg-[#212428] w-full h-full shadow-inner'}>
            <h1 className={theme === "light" ? 'text-center text-6xl text-slate-800 font-semibold py-10 shadow-inner' : 'text-center text-6xl text-sky-600 font-semibold py-10 shadow-inner'}>Add Food</h1>
            <div className='p-10'>
                <form onSubmit={handleAddFoodCart}>
                    <div className='my-8'>
                        <label>
                            <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Food Name</span>
                        </label>
                        <br />
                        <input type="text" placeholder='Food Name' name='food_name' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                    </div>
                    <div className='mb-8'>
                        <label>
                            <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Food Price</span>
                        </label>
                        <br />
                        <input type="text" placeholder='Food Price' name='price' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                    </div>
                    <div>
                        <label>
                            <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Food Image</span>
                        </label>
                        <br />
                        <input type="file" name='food_img' placeholder='Food Name' className={theme === "light" ? 'w-full  h-10 text-3xl font-semibold shadow-inner text-slate-950 mt-3' : 'w-full h-10 text-3xl font-semibold shadow-inner text-slate-50 mt-3'} required />
                    </div>
                    <input type="submit" value="Add Cart" className={theme === "light" ? 'bg-gradient-to-r from-slate-800 to-gray-800 text-2xl font-semibold text-white w-[10%] h-12 rounded-xl mx-auto mt-60' : 'bg-gradient-to-r from-slate-500 to-gray-600 text-2xl font-semibold text-white w-[10%] h-12 rounded-xl mx-auto mt-60'} />
                </form>
            </div>
        </div>
    );
};

export default AddFoods;