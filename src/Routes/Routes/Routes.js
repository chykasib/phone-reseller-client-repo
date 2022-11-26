import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blogs from "../../pages/Blogs/Blogs";
import AddProduct from "../../pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../../pages/Dashboard/AllSellers/AllSellers";
import MyOrder from "../../pages/Dashboard/MyOrder/MyOrder";
import Payment from "../../pages/Dashboard/Payment/Payment";
import Home from "../../pages/Home/Home/Home";
import Products from "../../pages/Home/ProductCategories/Products/Products";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import Login from "../../pages/Shared/Login/Login";
import Register from "../../pages/Shared/Register/Register";
import PrivateRoute from '../PrivateRoute/PrivateRoute'
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
                path: '/category/:id', element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
            ,
            {
                path: '/blogs', element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout><PrivateRoute></PrivateRoute></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/allbuyers', element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allsellers', element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/addProduct', element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myorder', element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/payment/:id', element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
            }
        ]
    }
])