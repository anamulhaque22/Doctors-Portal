import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ doctorMail, setDoctorMail, refetch }) => {
    const { name, email } = doctorMail
    const deleteDoctor = () => {
        axios.delete(`http://localhost:5000/doctor/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.data.deletedCount === 1) {
                    refetch();
                    toast.success("Successfully Deleted Doctor");
                    setDoctorMail(null)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure to delete {name}?</h3>
                    <div className="modal-action">
                        <label htmlFor="delete-confirm-modal" className="btn">No</label>
                        <label className="btn" onClick={deleteDoctor}>Yes</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeleteConfirmModal;