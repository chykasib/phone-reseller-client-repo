import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { useAdmin } from '../Hooks/UseAdmin';
import { useSeller } from '../Hooks/UseSeller';
import Navbar from '../pages/Shared/Navbar/Navbar'
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-black">
                        {
                            isAdmin &&
                            <>
                                <Link to={'/dashboard/allusers'}>
                                    <button className="btn btn-info">All Users</button>
                                </Link>
                                <Link className='my-6' to={'/dashboard/allbuyers'}>
                                    <button className="btn btn-info">All Buyers</button>
                                </Link>
                                <Link className='my-6' to={'/dashboard/allsellers'}>
                                    <button className="btn btn-info">All Sellers</button>
                                </Link>
                            </>
                        }
                        {
                            isSeller &&
                            <Link to={'/dashboard/addProduct'}>
                                <button className="btn btn-info">Add Product</button>
                            </Link>
                        }
                        {
                            user?.emailVerified
                            === true &&
                            <Link to={'/dashboard/myorder'}>
                                <button className="btn btn-info">My Order</button>
                            </Link>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;