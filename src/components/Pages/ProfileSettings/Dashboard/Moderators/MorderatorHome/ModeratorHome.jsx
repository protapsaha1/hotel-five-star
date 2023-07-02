import React from 'react';
import useAuth from '../../../../../Module/Hooks/useAuth';

const ModeratorHome = () => {
    const { theme } = useAuth();
    return (
        <div className={theme === "light" ? 'bg-zinc-100 w-full h-full shadow-inner pt-10' : 'bg-[#212428] w-full h-full shadow-inner pt-10'}>
            <div className='flex items-center'>
                <div className={theme === "light" ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-8 p-8 rounded-lg' : 'bg-[#0c1a2c] mx-8 p-8 rounded-lg shadow-2xl shadow-slate-300'}>
                    <h1 className={theme === "light" ? 'text-slate-800 text-6xl text-center font-semibold' : 'text-sky-500 text-6xl text-center font-semibold'}>Total Food Cart</h1>
                    <h2 className={theme === "light" ? 'text-slate-800 text-4xl text-center font-bold p-3' : 'text-sky-500 text-4xl text-center font-bold p-3'}>10</h2>
                </div>
                <div className={theme === "light" ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-8 p-8 rounded-lg' : 'bg-[#0c1a2c] mx-8 p-8 rounded-lg shadow-2xl shadow-slate-300'}>
                    <h1 className={theme === "light" ? 'text-slate-800 text-6xl text-center font-semibold' : 'text-sky-500 text-6xl text-center font-semibold'}>Total Room Cart</h1>
                    <h2 className={theme === "light" ? 'text-slate-800 text-4xl text-center font-bold p-3' : 'text-sky-500 text-4xl text-center font-bold p-3'}>10</h2>
                </div>
                <div className={theme === "light" ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-8 p-8 rounded-lg' : 'bg-[#0c1a2c] mx-8 p-8 rounded-lg shadow-2xl shadow-slate-300'}>
                    <h1 className={theme === "light" ? 'text-slate-800 text-6xl text-center font-semibold' : 'text-sky-500 text-6xl text-center font-semibold'}>Total Room Cart</h1>
                    <h2 className={theme === "light" ? 'text-slate-800 text-4xl text-center font-bold p-3' : 'text-sky-500 text-4xl text-center font-bold p-3'}>10</h2>
                </div>
            </div>
        </div>
    );
};

export default ModeratorHome;