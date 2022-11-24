import { createBrowserRouter } from "react-router-dom"
import Main from "../../layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../pages/Dashboard/MyOrders/MyOrders";
import Home from "../../pages/Home/Home/Home";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import Login from "../../pages/Shared/Login/Login";
import Register from "../../pages/Shared/Register/Register";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: 'register', element: <Register></Register>
            },
            {
                path: 'login', element: <Login></Login>
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/allsellers', element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/myorders', element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct', element: <AddProduct></AddProduct>
            }
        ]
    }
])