import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [doctorMail, setDoctorMail] = useState(null);
    const { isLoading, error, data: doctors, refetch } = useQuery(['doctors'], () => {
        const data = axios.get('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        return data;
    })
    if (isLoading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error)
    }
    return (
        <div className='w-full'>
            <h2>Num of Doctor: {doctors.data.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Sapcilitiy</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.data.map((doctor, index) => <DoctorRow
                                setDoctorMail={setDoctorMail}
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
                {doctorMail && <DeleteConfirmModal
                    doctorMail={doctorMail}
                    setDoctorMail={setDoctorMail}
                    refetch={refetch}
                ></DeleteConfirmModal>}
            </div>
        </div>
    );
};

export default ManageDoctors;