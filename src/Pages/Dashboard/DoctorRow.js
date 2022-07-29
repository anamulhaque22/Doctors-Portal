import React from 'react';

const DoctorRow = ({ doctor, refetch, index, setDoctorMail }) => {
    const { name, imageUrl, speciality, email } = doctor;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={imageUrl} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label
                    onClick={() => setDoctorMail(doctor)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-sm btn-error modal-button">
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default DoctorRow;