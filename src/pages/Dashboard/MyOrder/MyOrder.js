import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';
import Loading from '../../Shared/Loading/Loading';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    useTitle('my order')
    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="mt-5 mx-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) =>

                                <tr className="hover" key={i}>
                                    <th>{i + 1}</th>
                                    <td>{order.product}</td>
                                    <td>
                                        {
                                            order.resalePrice &&
                                            <p>{order.resalePrice} taka</p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            order.resalePrice && !order.paid &&
                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                <button className='btn btn-warning btn-sm'>pay</button>
                                            </Link>
                                        }
                                        {
                                            order.resalePrice && order.paid &&
                                            <span className='text-green-500'>paid</span>
                                        }
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;