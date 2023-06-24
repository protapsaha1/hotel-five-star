import React from 'react'
import Header from '../components/Shared/Navber/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
// import SubHeader from '../components/Shared/Navber/SubHeader/SubHeader';

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-sky-200 to-white '>
            <Header></Header>
            {/* <SubHeader></SubHeader> */}

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;