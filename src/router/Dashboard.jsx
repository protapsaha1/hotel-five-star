import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../components/Style/RandomStyle.css';

const Dashboard = () => {
    return (
        <div className='dash_main'>
            <div className='side_bar py-20 ps-5'>
                <ul className='mt-20 '>
                    <li className='text-3xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner'><Link to="/dashboard/add-foods">Add Food Cart</Link></li>
                    <li className='text-3xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner'><Link to="/dashboard/add-rooms">Add Room Cart</Link></li>
                    <hr className='my-10 bg-slate-300' />
                    <li className='text-3xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner'><Link to="/">Home</Link></li>
                    <li className='text-3xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner'><Link to="/rooms">Rooms</Link></li>
                </ul>
            </div>
            <div className='show_content py-20 px-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;