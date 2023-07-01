import React from 'react'
import Header from '../components/Shared/Navber/Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import useAuth from '../components/Module/Hooks/useAuth';
// import SubHeader from '../components/Shared/Navber/SubHeader/SubHeader';

const Main = () => {
    const { theme } = useAuth();
    const location = useLocation();
    const head_foot = location.pathname.includes('/login') || location.pathname.includes('/sign-up');
    return (
        <div className={theme === "light" ? 'bg-gradient-to-r from-sky-200 to-white ' : 'bg-[#0f1929] '}>
            {head_foot || <Header></Header>}
            {/* <SubHeader></SubHeader>  */}

            <Outlet></Outlet>
            {head_foot || <Footer></Footer>}
        </div>
    );
};

export default Main;