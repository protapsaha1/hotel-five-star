import React from 'react';
import { Outlet } from 'react-router-dom';

const Err = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Err;