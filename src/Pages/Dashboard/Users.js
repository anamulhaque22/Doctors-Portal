import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Users = () => {
    const { isLoading, error, data: users, refetch } = useQuery(['users'], () =>
        axios.get('https://doctors-portal-server-lac.vercel.app/user', { headers: { "authorization": `Bearer ${localStorage.getItem('accessToken')}` } })
            .catch((err) => {
                if (err.response) {
                    if (err.response.status === 401 || err.response.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                    }
                }
            })
    )
    if (isLoading) {
        return <div>Loading...</div>
    }
    const makeAdmin = (email) => {
        axios.put(`https://doctors-portal-server-lac.vercel.app/user/admin/${email}`, {}, { headers: { "authorization": `Bearer ${localStorage.getItem('accessToken')}` } })
            .then(res => {
                if (res.data) {
                    toast.success('User made admin');
                    refetch();
                }
                return res;
            })
            .catch((err) => {
                if(err.response){
                    if(err.response.status === 403){
                        toast.error('You are not authorized to make user admin');
                    }
                }
            })
    }
    const removeAdmin = (user) => {

    }
    return (
        <div>
            <h2 className='text-2xl'>All Users: {users?.data.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Add Role</th>
                            <th>Remove Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.data.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' && <button onClick={() => makeAdmin(user.email)} class="btn btn-sm">Make Admin</button>}</td>
                                <td>{user.role === 'admin' && <button onClick={() => removeAdmin(user.email)} class="btn btn-sm">Remove Admin</button>}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;