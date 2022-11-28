import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../../../Hooks/UseTitle';

const AllSellers = () => {
    useTitle('all sellers')
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`http://localhost:5000/users`)
            .then(res => res.json())
    })
    const handleMakeSeller = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make seller successfully')
                    refetch()
                }
            })
    }

    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Seller successfully remove ${users[0].name}`)
                    refetch()
                }
                console.log(data)
            })
    }
    return (
        <div>
            <div className="mt-5 mx-10">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            users.map((user, i) =>
                                user.typeOfRole === 'seller' &&
                                <>

                                    <tr key={i}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{
                                            user?.role !== 'seller' &&
                                            <button onClick={() => handleMakeSeller(user._id)}
                                                className='btn btn-xs 
                                                btn-primary'>
                                                Unverified</button>
                                        }</td>
                                        <td><button onClick={() => handleDeleteSeller(user._id)} className='btn btn-xs bg-red-800'>Delete</button></td>
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;