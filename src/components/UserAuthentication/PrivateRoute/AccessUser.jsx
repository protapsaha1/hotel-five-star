import React from 'react';
import useAuth from '../../Module/Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AccessUser = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <>Loading . . .</>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AccessUser;