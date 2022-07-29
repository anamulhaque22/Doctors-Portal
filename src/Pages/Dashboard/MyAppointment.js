import { signOut } from 'firebase/auth';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const [appoinments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/booking?email=${user.email}`, { headers: { "authorization": `Bearer ${localStorage.getItem('accessToken')}` } })
                .then(res => setAppoinments(res.data))
                .catch((err) => {
                    if (err.response) {
                        if (err.response.status === 401 || err.response.status === 403) {
                            signOut(auth);
                            localStorage.removeItem('accessToken');
                        }
                    }
                })
        }
    }, [user])
    return (
        <div>
            <h3>My Appoinment</h3>
            <table className="table table-auto w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Time</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appoinments.map((appoinment, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{appoinment.userName}</td>
                            <td>{appoinment.name}</td>
                            <td>{appoinment.time}</td>
                            <td>{(appoinment.price && !appoinment?.paid) ? <Link to={`/dashboard/payment/${appoinment._id}`} className="btn btn-sm">Pay</Link> : <p className='text-xl'>Paid</p>}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;