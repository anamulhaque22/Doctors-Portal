import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const Users = () => {
    const { isLoading, error, data: users } = useQuery(['users'], () =>
        axios.get('http://localhost:5000/user')
    )
    if (isLoading) {
        return <div>Loading...</div>
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
                                <button class="btn btn-sm">Make Admin</button>
                                <button class="btn btn-sm">Remove Admin</button>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;