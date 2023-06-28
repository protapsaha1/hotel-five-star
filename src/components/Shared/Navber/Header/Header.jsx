import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../Style/RandomStyle.css';
// import ActiveLink from '../../../Module/ActiveLink/ActiveLink';
import { useContext } from 'react';
import useAuth from '../../../Module/Hooks/useAuth';

// sticky top-0 left-0 right-0 
const Header = () => {
    const { user, signOutUser } = useAuth();
    const location = useLocation();
    const isProfile = location.pathname.includes('/profile');
    const isBookmark = location.pathname.includes('/bookmark');

    const handleLogout = () => {
        signOutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className='w-full h-20 bg-blue-500 shadow-2xl'>
            <div className='flex justify-between bg-blue-500 w-[2100px] h-full mx-auto items-center px-12'>
                <div className='grid grid-cols-2 items-center'>
                    <div>
                        <h4 className='font-serif text-white text-4xl hover:border-0 hover:rounded-lg hover:bg-blue-400 hover:px-3 hover:py-2'><Link to="/">Hotel Five</Link></h4>
                    </div>
                    <div className='' >
                        <ol className='flex'>
                            <li><Link to="/" className='nav_link' >Home</Link></li>
                            <li><Link to="/rooms" className='nav_link' >Rooms</Link></li>
                            {isBookmark || isProfile ||
                                <>
                                    <li><Link to="/foods" className='nav_link'>Foods</Link></li>
                                    <li><Link to="/reservation/my-rooms" className='nav_link' >Reservation</Link></li>
                                    <li><Link to="/contact" className='nav_link'>Contact</Link></li>
                                    <li><Link to="/history" className='nav_link'>History</Link></li>
                                </>
                            }
                            {isProfile && isBookmark ||
                                <>
                                    <li><Link to="/bookmark" className='nav_link'>Bookmark</Link></li>
                                    <li><Link to="/dashboard" className='nav_link'>Dashboard</Link></li>
                                </>
                            }
                        </ol>
                    </div>
                </div>
                <div>
                    {user ?
                        <span className='flex items-center'>
                            <button onClick={handleLogout} className='text-3xl text-white font-semibold hover:bg-white hover:text-blue-500  px-5 py-3 hover:px-5 hover:py-3 hover:rounded-[30px] hover:border-2 mr-3'>Sign out</button>
                            <div className="tooltip tooltip-bottom" data-tip="Profile">
                                <Link to="/profile"><img src={user?.photoURL} className='w-16 h-16 rounded-full' alt="" /></Link>
                            </div>
                        </span>
                        :
                        <span>
                            <Link to="/login"><button className='text-3xl text-white font-semibold hover:bg-white hover:text-blue-500  px-5 py-3 hover:px-5 hover:py-3 hover:rounded-[30px] hover:border-2 mr-2'>Login</button></Link>
                            <Link to="/sign-up"><button className='text-3xl text-white font-semibold hover:bg-white hover:text-blue-500  px-5 py-3 hover:px-5 hover:py-3 hover:rounded-[30px] hover:border-2'>Sign Up</button></Link>
                        </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;