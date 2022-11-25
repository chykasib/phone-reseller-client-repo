import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../pages/Shared/Loading/Loading';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user.uid) {
        return Children;
    }
    else {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;