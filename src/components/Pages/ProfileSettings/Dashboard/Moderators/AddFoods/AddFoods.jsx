import React from 'react';

const AddFoods = () => {

    const handleAddFoodCart = e => {
        e.preventDefault();
    }

    return (
        <div className='bg-zinc-100 w-full h-full shadow-inner'>
            <h1 className='text-center text-6xl text-slate-800 font-semibold py-10 shadow-inner'>Add Food</h1>
            <div className='p-10'>
                <form onSubmit={handleAddFoodCart}>
                    <div className='my-8'>
                        <label>
                            <span className='text-2xl font-semibold text-slate-800'>Food Name</span>
                        </label>
                        <br />
                        <input type="text" placeholder='Food Name' className='w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' required />
                    </div>
                    <div className='mb-8'>
                        <label>
                            <span className='text-2xl font-semibold text-slate-800'>Food Price</span>
                        </label>
                        <br />
                        <input type="text" placeholder='Food Price' className='w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' required />
                    </div>
                    <div>
                        <label>
                            <span className='text-2xl font-semibold text-slate-800'>Food Image</span>
                        </label>
                        <br />
                        <input type="file" placeholder='Food Name' className='w-full  h-10 text-3xl font-semibold shadow-inner text-slate-950 mt-3' required />
                    </div>
                    <input type="submit" value="Add Cart" className='bg-gradient-to-r from-slate-800 to-gray-800 text-xl font-semibold text-white w-[10%] h-12 rounded-xl mx-auto mt-60' />
                </form>
            </div>
        </div>
    );
};

export default AddFoods;