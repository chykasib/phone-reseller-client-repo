import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../../../Hooks/UseTitle';

const AllBuyers = () => {
    useTitle('all buyers')
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`https://phone-reseller-server.vercel.app/users`)
            .then(res => res.json())
    })
    const handleDeleteSeller = id => {
        fetch(`https://phone-reseller-server.vercel.app/users/seller/${id}`, {
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                user?.typeOfRole === 'user' &&
                                <>
                                    <tr className="hover" key={i}>

                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
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

export default AllBuyers;