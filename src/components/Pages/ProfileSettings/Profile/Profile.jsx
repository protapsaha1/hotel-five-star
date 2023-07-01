import React from 'react';
import useAuth from '../../../Module/Hooks/useAuth';
import ChatTimeOverView from '../ChatTimeOverView/ChatTimeOverView';
import useTitle from '../../../Module/Hooks/useTitle';

const Profile = () => {
    useTitle("Profile");
    const { user, theme, toggleWebTheme } = useAuth();
    // const toggleTheme = () =>{
    //     toggleWebTheme()
    // }
    return (
        <div className={theme === "light" ? "bg-white w-full h-full flex" : "bg-[#0f1929] w-full h-full flex"}>
            {/* user profile details */}
            <div className='w-[50vw] p-20'>
                <div className='' >
                    {/* user Image */}
                    <div className='w-full h-full'>
                        <img className='w-[300px] h-[300px] rounded-full' src={user?.photoURL} alt="" />
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3' : 'text-3xl text-white font-semibold py-3'}>Name : {user?.displayName}</h1>
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3' : 'text-3xl text-white font-semibold py-3'}>Email : {user?.email}</h1>
                    </div>
                    <div className='border-b-4 mt-10'>
                        <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3 truncate' : 'text-3xl text-white font-semibold py-3 truncate'}>PhotoURL : {user?.photoURL}</h1>
                    </div>
                    {user?.phoneNumber && <div className='border-b-4 mt-10'>
                        <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3' : 'text-3xl text-white font-semibold py-3'}>Phone Number : {user?.phoneNumber}</h1>
                    </div>}
                </div>
                <hr className='mt-36 mb-36' />
                <div className='pt-10'>
                    <label>
                        <span className={theme === "light" ? "text-slate-800 text-2xl font-semibold" : "text-white text-2xl font-semibold "}>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
                    </label>
                    <br />
                    {/* TODO Get from local storage */}
                    <input type="checkbox" className="toggle toggle-success toggle-lg mt-5" onChange={toggleWebTheme} checked={theme === 'dark'} />
                </div>
            </div>
            <div className='w-[50vw] p-20 '>
                <div className='grid-rows-2'>
                    {/* user account create time */}
                    <div>
                        <h1 className={theme === "light" ? 'text-6xl text-slate-900 font-semibold py-3' : 'text-6xl text-white font-semibold py-3'}>Create Account</h1>
                        <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3' : 'text-3xl text-white font-semibold py-3'}>{user?.metadata?.creationTime}</h1>
                    </div>
                    <hr className='my-10' />
                    {/* last login time */}
                    <div>
                        <h1 className={theme === "light" ? 'text-6xl text-slate-900 font-semibold py-3' : 'text-6xl text-white font-semibold py-3'}>Last Login</h1>
                        <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3' : 'text-3xl text-white font-semibold py-3'}>{user?.metadata?.lastSignInTime}</h1>
                    </div>
                </div>
                <hr className='my-10' />
                <div className='grid-rows-2'>
                    {/* Chart depend on user stay in site time, date, day*/}
                    <div>
                        <h1 className={theme === "light" ? 'text-6xl text-slate-900 font-semibold py-3' : 'text-6xl text-white font-semibold py-3'}>Site View Durations</h1>
                        <ChatTimeOverView />
                    </div>
                    <hr className='my-10' />
                    {/* Login devices */}
                    <div>
                        <h1 className={theme === "light" ? 'text-6xl text-slate-900 font-semibold py-3' : 'text-6xl text-white font-semibold py-3'}>Login Devices</h1>
                        <div className='flex items-center'>
                            <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3 mr-2' : 'text-3xl text-white font-semibold py-3 mr-2'}>Windows 10</h1>
                            <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3 mr-2' : 'text-3xl text-white font-semibold py-3 mr-2'}>Windows 7</h1>
                            <h1 className={theme === "light" ? 'text-3xl text-slate-900 font-semibold py-3 mr-2' : 'text-3xl text-white font-semibold py-3 mr-2'}>Windows 8</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;