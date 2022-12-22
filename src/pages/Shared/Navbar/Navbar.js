import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useAdmin } from '../../../Hooks/UseAdmin';
import { useSeller } from '../../../Hooks/UseSeller';
import Loading from '../Loading/Loading';
const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [theme, setTheme] = useState('bg-white');
    const toggleTheme = () => {
        theme === 'bg-white' ?
            setTheme('bg-black') : setTheme('bg-white');

    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    const logoutHandler = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.error(error))
    }
    const menuItems = <React.Fragment>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/blogs'}>Blogs</Link></li>
        {
            isAdmin || isSeller || user?.emailVerified
                === true ?
                <>
                    <li><Link to={'/dashboard'}>Dashboard</Link></li>
                    <li>
                        <button onClick={logoutHandler} className="btn btn-warning rounded">Log out</button>
                    </li>
                </>
                :
                <li><Link to={'/login'}><button className="btn btn-warning">Login</button></Link></li>
        }

        <input onClick={toggleTheme} type="checkbox" className="toggle mt-4 ml-4" />
    </React.Fragment>
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case">
                        T Phone-Reseller-Shop.Com
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden ml-24">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};
export default Navbar;