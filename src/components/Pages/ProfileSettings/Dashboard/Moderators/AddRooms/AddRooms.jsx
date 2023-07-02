import React from 'react';
import useTitle from '../../../../../Module/Hooks/useTitle';
import useAuth from '../../../../../Module/Hooks/useAuth';

const AddRooms = () => {
    useTitle("Add Rooms Cart")
    const { theme } = useAuth();


    const handleAddRoomCart = e => {
        e.preventDefault();
        const form = e.target;
        const room_classification = form.room_classification.value;
        const price = (parseFloat);
        const available_room = parseInt(form.available_room.value);
        const beds = parseInt(form.beds.value);
        const adults = parseInt(form.adults.value);
        const child = parseInt(form.child.value);
        const room_img = form.room_img.files[0];
        console.log(room_classification, price, available_room, beds, adults, child, room_img)
    }

    return (
        <div className={theme === "light" ? 'bg-zinc-100 w-full h-full shadow-inner' : 'w-full h-full shadow-inner bg-[#212428]'}>
            <h1 className={theme === "light" ? 'text-center text-6xl text-slate-800 font-semibold py-10 shadow-inner' : 'text-center text-6xl text-sky-700 font-semibold py-10 shadow-inner'}>Add Room</h1>
            <div className='p-10'>
                <form onSubmit={handleAddRoomCart}>
                    <div className='grid grid-cols-2 gap-6'>
                        {/*Room Classification*/}
                        <div className='mb-8'>
                            <label>
                                <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Room Classification</span>
                            </label>
                            <br />
                            <input type="text" name='room_classification' placeholder='Room Classification' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                        </div>
                        {/* Room Price */}
                        <div className='mb-8'>
                            <label>
                                <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Room Price</span>
                            </label>
                            <br />
                            <input type="text" name='price' placeholder='Room Price' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        {/* Available Room */}
                        <div className='mb-8'>
                            <label>
                                <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Available Room</span>
                            </label>
                            <br />
                            <input type="text" name='available_room' placeholder='Available Room' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                        </div>
                        {/* Category */}
                        {/* Beds in Rooms */}
                        <div className='mb-8'>
                            <label>
                                <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Beds in Rooms</span>
                            </label>
                            <br />
                            <input type="text" name='beds' placeholder='Beds in Rooms' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-6'>
                        {/* Adults */}
                        <div className='mb-8'>
                            <label>
                                <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Adults</span>
                            </label>
                            <br />
                            <input type="text" name='adults' placeholder='Adults' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                        </div>
                        {/* Child */}
                        <div className='mb-8'>
                            <label>
                                <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Child</span>
                            </label>
                            <br />
                            <input type="text" name='child' placeholder='Child' className={theme === "light" ? 'w-full h-[75px] bg-white text-3xl font-semibold ps-5 shadow-inner text-slate-950 border-b-4 border-b-green-500 mt-3' : 'w-full h-[75px] bg-[#0f1929] text-3xl font-semibold ps-5 shadow-inner text-slate-50 border-b-4 border-b-green-500 mt-3'} required />
                        </div>
                    </div>
                    <div>
                        <label>
                            <span className={theme === "light" ? 'text-2xl font-semibold text-slate-800' : 'text-2xl font-semibold text-sky-500'}>Room Image</span>
                        </label>
                        <br />
                        <input type="file" name='room_img' className={theme === "light" ? 'w-full  h-10 text-3xl font-semibold shadow-inner text-slate-950 mt-3' : 'w-full  h-10 text-3xl font-semibold shadow-inner text-slate-50 mt-3'} required />
                    </div>
                    <input type="submit" value="Add Cart" className={theme === "light" ? 'bg-gradient-to-r from-slate-800 to-gray-800 text-2xl font-semibold text-white w-[10%] h-12 rounded-xl mx-auto mt-60' : 'bg-gradient-to-r from-slate-500 to-gray-600 text-2xl font-semibold text-white w-[10%] h-12 rounded-xl mx-auto mt-60'} />
                </form>
            </div>
        </div>
    );
};

export default AddRooms;