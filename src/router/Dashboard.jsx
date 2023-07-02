import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../components/Style/RandomStyle.css';
import useAuth from '../components/Module/Hooks/useAuth';
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    const { theme } = useAuth();
    return (
        <div className='dash_main'>
            <div className={theme === "light" ? 'w-[800px] h-[1203px] bg-[#ffffff] py-20 px-5' : 'w-[800px] h-[1203px] bg-[#0f1929] py-20 px-5'}>
                <ul className='mt-20 '>
                    <li className={theme === "light" ? 'text-4xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer' : 'text-4xl font-semibold text-slate-100 hover:bg-[#1d2228] hover:text-sky-700 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer'}>
                        <Link to="/dashboard/moderator-dash-home" className='flex items-center'><FaHome className='mr-4 w-20 h-20 bg-slate-100 hover:bg-red-400 py-4 px-3 hover:py-4 hover:px-3 rounded-[50%] text-black' />Home</Link>
                    </li>
                    <li className={theme === "light" ? 'text-4xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer' : 'text-4xl font-semibold text-slate-100 hover:bg-[#1d2228] hover:text-sky-700 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer'}>
                        <Link to="/dashboard/add-foods" className='flex items-center '><FaHome className='mr-4 w-20 h-20 bg-slate-100 hover:bg-red-400 py-4 px-3 hover:py-4 hover:px-3 rounded-[50%] text-black' />Add Food Cart</Link>
                    </li>
                    <li className={theme === "light" ? 'text-4xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer' : 'text-4xl font-semibold text-slate-100 hover:bg-[#1d2228] hover:text-sky-700 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer'}>
                        <Link to="/dashboard/add-rooms" className='flex items-center '><FaHome className='mr-4 w-20 h-20 bg-slate-100 hover:bg-red-400 py-4 px-3 hover:py-4 hover:px-3 rounded-[50%] text-black' />Add Room Cart</Link>
                    </li>
                    <hr className='my-10 bg-slate-300' />
                    <li className={theme === "light" ? 'text-4xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer' : 'text-4xl font-semibold text-slate-100 hover:bg-[#1d2228] hover:text-sky-700 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer'}>
                        <Link to="/" className='flex items-center '><FaHome className='mr-4 w-20 h-20 bg-slate-100 hover:bg-red-400 py-4 px-3 hover:py-4 hover:px-3 rounded-[50%] text-black' />Home</Link>
                    </li>
                    <li className={theme === "light" ? 'text-4xl font-semibold text-slate-900 hover:bg-zinc-100 hover:text-slate-900 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer' : 'text-4xl font-semibold text-slate-100 hover:bg-[#1d2228] hover:text-sky-700 px-20 py-7 hover:px-20 hover:py-7 my-3 hover:shadow-inner cursor-pointer'}>
                        <Link to="/rooms" className='flex items-center '><FaHome className='mr-4 w-20 h-20 bg-slate-100 hover:bg-red-400 py-4 px-3 hover:py-4 hover:px-3 rounded-[50%] text-black' />Rooms</Link>
                    </li>
                </ul>
            </div>
            <div className={theme === "light" ? 'w-full h-full bg-[#ffffff] py-20 px-5' : 'w-full h-full bg-[#1b1e22] py-20 px-5'}>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;