import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useAdmin } from '../../Hooks/UseAdmin';
import Loading from '../../pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, useAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if (loading || useAdminLoading) {
        return <Loading></Loading>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;