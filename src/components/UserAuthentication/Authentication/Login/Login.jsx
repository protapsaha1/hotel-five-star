import React, { useState } from 'react';
import useTitle from '../../../Module/Hooks/useTitle';
import { FaEnvelopeOpenText, FaUserLock } from 'react-icons/fa';
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    useTitle("Login");
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='bg-zinc-200 to-zinc-800 w-[100vw] h-full py-10'>  {/* TODO make border colorful random color*/}
            {/* TODO Make login div animation hidden and show*/}
            <div className='border-4 w-[800px] mx-auto p-5 shadow-2xl bg-white'>
                <h1 className='text-5xl font-semibold text-center py-10'>Login Now!</h1>
                <form onSubmit={handleLogin}>
                    {/* Email */}
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Your Email</span>
                        </label>
                        <br />
                        <label className='flex items-center'>
                            <span>
                                <FaEnvelopeOpenText className='w-14 h-14 mr-4' />
                            </span>
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-6 ps-3' placeholder='Your Email Address' type="email" name="email" id="email" required />
                        </label>
                    </div>
                    {/* Password */}
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Your password</span>
                        </label>
                        <br />
                        <label className='flex items-center'>
                            <span>
                                <FaUserLock className='w-14 h-14 mr-4' />
                            </span>
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-10 ps-3' placeholder='Your Password' type={show ? "text" : "password"} name="password" id="password" required />
                            <span className='-ms-12 -mt-5' onClick={() => setShow(!show)}>
                                {
                                    show ? <VscEye className='w-12 h-12' /> : <VscEyeClosed className='w-12 h-12' />
                                }
                            </span>
                        </label>
                    </div>
                    <input type="submit" value="Login" className='text-3xl text-slate-800 font-semibold text-center my-10 bg-white px-5 py-4 hover:bg-slate-700 hover:text-white hover:px-5 hover:py-4 hover:rounded-xl' />
                </form>
            </div>
            <div className='w-[800px] mx-auto p-3 '>
                <div className='flex items-center'>
                    <p className='text-2xl text-slate-500 hover:text-sky-600 hover:underline'>Forget Password</p>
                    <h1 className='ms-3 text-2xl text-slate-800 font-semibold'>Is New ? Create Account <Link to="/sign-up" className='hover:text-gray-950 hover:underline'>Sign Up</Link></h1>
                </div>
                <div className='my-20 ms-[340px]'>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;