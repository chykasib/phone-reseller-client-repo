import { useContext } from 'react';
import React from 'react'
import Loader from 'react-animated-loader';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader />
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;