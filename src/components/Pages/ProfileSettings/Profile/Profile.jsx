import React from 'react';
import useAuth from '../../../Module/Hooks/useAuth';
import ChatTimeOverView from '../ChatTimeOverView/ChatTimeOverView';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className='bg-white w-full h-full flex'>
            {/* user profile details */}
            <div className='w-[50vw] border-2 p-20'>
                <div className=''>
                    {/* user Image */}
                    <div className='w-full h-full'>
                        <img className='w-[300px] h-[300px] rounded-full' src={user?.photoURL} alt="" />
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className='text-3xl text-slate-900 font-semibold py-3'>Name : {user?.displayName}</h1>
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className='text-3xl text-slate-900 font-semibold py-3'>Email : {user?.email}</h1>
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className='text-3xl text-slate-900 font-semibold py-3 truncate'>PhotoURL : {user?.photoURL}</h1>
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className='text-3xl text-slate-900 font-semibold py-3'>Phone Number : {user?.phoneNumber}</h1>
                    </div>
                </div>
            </div>
            <div className='w-[50vw] p-20 '>
                <div className='grid-rows-2'>
                    {/* user account create time */}
                    <div>
                        <h1 className='text-6xl text-slate-900 font-semibold py-3'>Create Account</h1>
                        <h1 className='text-3xl text-slate-900 font-semibold py-3'>{user?.metadata?.creationTime}</h1>
                    </div>
                    <hr className='my-10' />
                    {/* last login time */}
                    <div>
                        <h1 className='text-6xl text-slate-900 font-semibold py-3'>Last Login</h1>
                        <h1 className='text-3xl text-slate-900 font-semibold py-3'>{user?.metadata?.lastSignInTime}</h1>
                    </div>
                </div>
                <hr className='my-10' />
                <div className='grid-rows-2'>
                    {/* Chart depend on user stay in site time, date, day*/}
                    <div>
                        <ChatTimeOverView />
                    </div>
                    <hr className='my-10' />
                    {/* Login devices */}
                    <div>
                        <h1 className='text-6xl text-slate-900 font-semibold py-3'>Login Devices</h1>
                        <div className='flex items-center'>
                            <h1 className='text-3xl text-slate-900 font-semibold py-3 mr-2'>Windows 10</h1>
                            <h1 className='text-3xl text-slate-900 font-semibold py-3 mx-2'>Windows 7</h1>
                            <h1 className='text-3xl text-slate-900 font-semibold py-3 mx-2'>Windows 8</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;