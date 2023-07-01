import React from 'react';
import { FaFacebook, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import useAuth from '../../Module/Hooks/useAuth';

const Footer = () => {
    const { theme } = useAuth();
    return (
        <footer className={theme === "light" ? 'w-full bg-slate-700' : 'w-full bg-[#161616]'}>
            <div className={theme === "light" ? 'h-96 w-[2100px] mx-auto bg-slate-700 py-20' : 'h-96 w-[2100px] mx-auto bg-[#161616] py-20'} >
                <div className='flex justify-between'>
                    <div className=''>
                        <h1 className='text-white text-4xl font-serif'>Hotel Five</h1>
                        <div className='flex ms-auto mt-36'>
                            <FaFacebook className='w-9 h-9 text-blue-500 bg-white mx-1 rounded-3xl' />
                            <FaTwitter className='w-9 h-9 text-blue-500 bg-white mx-1 rounded-3xl' />
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Contact</span>
                        <a className="link link-hover flex items-center text-xl text-white font-semibold"><FaPhoneAlt className='mr-2' /> : +09867544-43443</a>
                        <a className="link link-hover text-white text-xl font-semibold">Email: example@gmail.com</a>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <div>
                            <label>
                                <span className='text-white text-xl'>Your Email</span>
                            </label><br />
                            <input type="email" name="email" id="" className='h-10 w-80 mt-2 text-2xl ps-2' />
                        </div>
                        <br />
                        <textarea type="textarea" name="textValue" id="" className='col-10 row-10' cols={50} rows={2} />
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div className={theme === "light" ? 'bg-slate-900 w-full' : 'bg-black w-full'}>
                <div div className={theme === "light" ? "footer footer-center w-[2100px] mx-auto p-4 bg-slate-900 text-base-content" : "footer footer-center w-[2100px] mx-auto p-4 bg-black text-base-content"}>
                    <div className='bg-slate-900'>
                        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;