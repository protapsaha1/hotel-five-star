import React, { useState } from 'react';
import useTitle from '../../../Module/Hooks/useTitle';
import { FaEnvelopeOpenText, FaImages, FaPhoneSquareAlt, FaUserLock } from 'react-icons/fa';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const SignUp = () => {
    useTitle("Sign Up Now ");

    const [show, setShow] = useState(false);
    const [showCon, setShowCon] = useState(false);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const number = form.number.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        const gender = form.gender.value;

        console.log(name, email, photo, number, password, confirm_password, gender)
    }

    return (
        <div className='bg-zinc-200 w-[100vw] h-full py-10'>
            <div className='w-[800px] border-2 border-gray-300 rounded-xl mx-auto p-5 shadow-2xl bg-white'>
                <h1 className='text-5xl font-semibold text-center py-10'>Sign Up Now!</h1>
                <form onSubmit={handleSignUp}>
                    {/* Name */}
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Your Name</span>
                        </label>
                        <br />
                        <label className='flex items-center'>
                            <span>
                                <FaEnvelopeOpenText className='w-14 h-14 mr-4' />
                            </span>
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-6 ps-3' placeholder='Your first & last name' type="text" name="name" id="name" required />
                        </label>
                    </div>
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
                    {/* Photo */}
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Your Photo</span>
                        </label>
                        <br />
                        <label className='flex items-center'>
                            <span>
                                <FaImages className='w-14 h-14 mr-4' />
                            </span>
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-6 ps-3' placeholder='Your PhotoURL' type="text" name="photo" id="photo" required />
                        </label>
                    </div>
                    {/* Number */}
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Your Number</span>
                        </label>
                        <br />
                        <label className='flex items-center'>
                            <span>
                                <FaPhoneSquareAlt className='w-14 h-14 mr-4' />
                            </span>
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-6 ps-3' placeholder='Your Number' type="text" name="number" id="number" required />
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
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-10 ps-3' placeholder='Password' type={show ? "text" : "password"} name="confirm_password" id="confirm_password" required />
                            <span className='-ms-12 -mt-5' onClick={() => setShow(!show)}>
                                {
                                    show ? <VscEye className='w-12 h-12' /> : <VscEyeClosed className='w-12 h-12' />
                                }
                            </span>
                        </label>
                    </div>
                    {/* Confirm Password */}
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Confirm Password</span>
                        </label>
                        <br />
                        <label className='flex items-center'>
                            <span>
                                <FaUserLock className='w-14 h-14 mr-4' />
                            </span>
                            <input className='border-b-4 border-b-gray-500 h-[75px] w-[700px] mx-auto bg-white text-3xl text-slate-800 mt-3 mb-10 ps-3' placeholder='Confirm your Password' type={showCon ? "text" : "password"} name="password" id="password" />
                            <span className='-ms-12 -mt-5' onClick={() => setShowCon(!showCon)}>
                                {
                                    showCon ? <VscEye className='w-12 h-12' /> : <VscEyeClosed className='w-12 h-12' />
                                }
                            </span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span className='text-2xl text-slate-800 font-semibold'>Gender</span>
                        </label>
                        <br />
                        <select className='bg-white h-16 w-[200px] text-2xl text-slate-900 text-center mt-2 font-semibold border-2 border-zinc-300 shadow-lg' name="gender" id="gender">
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    <input type="submit" value="Register" className='text-3xl text-slate-800 font-semibold text-center my-10  px-5 py-4 hover:bg-zinc-200 hover:text-slate-950 hover:rounded-xl hover:px-5 hover:py-4' />
                </form>
            </div>
            <div className='w-[800px] mx-auto p-3 '>
                <div className='flex items-center'>
                    <h1 className='ms-3 text-2xl text-slate-800 font-semibold'>Have an account ? Please <Link to="/login" className='hover:text-gray-950 hover:underline'>Login Now</Link></h1>
                </div>
                <div className='my-20 ms-[340px]'>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;