import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../../../Hooks/UseTitle';

const AllUsers = () => {
    useTitle('all users')
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`https://phone-reseller-server.vercel.app/users`)
            .then(res => res.json())
    })
    useTitle('all users')
    const handleMakeAdmin = id => {
        fetch(`https://phone-reseller-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successfully')
                    refetch()
                }
            })
    }

    const handleDeleteAdmin = id => {
        fetch(`https://phone-reseller-server.vercel.app/users/admin/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`Admin successfully remove ${users[0].name}`)
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
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <>
                                    <tr className="hover" key={i}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{
                                            user?.role !== 'admin' &&
                                            <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                                        }</td>
                                        <td><button onClick={() => handleDeleteAdmin(user._id)} className='btn btn-xs bg-red-800'>Delete</button></td>
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

export default AllUsers;