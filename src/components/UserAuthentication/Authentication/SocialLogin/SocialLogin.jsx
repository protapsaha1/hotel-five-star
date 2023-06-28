import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../../Module/Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                const users = result.user;
                console.log(users)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <button onClick={handleGoogle} className='px-5 py-4 hover:px-4 hover:py-4 hover:bg-slate-50 hover:rounded-full hover:border-2 hover:border-slate-900 hover:shadow-2xl'><FaGoogle className='w-14 h-14' /></button>
        </div>
    );
};

export default SocialLogin;