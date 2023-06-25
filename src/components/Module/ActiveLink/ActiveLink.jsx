import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Style/RandomStyle.css';

const ActiveLink = ({ to, children }) => {
    return (
        <>
            <NavLink to={to} className={({ isActive }) =>
                isActive ?
            "active_route"
                    :
                    ""
            }>
                {children}
            </NavLink >
        </>
    );
};

export default ActiveLink;