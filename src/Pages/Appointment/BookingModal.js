import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { service, selectedSlot } = treatment;
    const { _id, name } = service;
    const formatedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const time = event.target.time.value;
        const userName = event.target.username.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const bookingData = {
            serviceId: _id,
            name,
            date: formatedDate,
            time,
            userName,
            email,
            phone,
        }
        fetch('https://doctors-portal-server-lac.vercel.app/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.booking);
                if (data.success) {
                    toast(`Appointment is set ${formatedDate} at ${time}`);
                } else {
                    toast.error(`Alreday have an appointment ${data.booking?.date} at ${data.booking?.time}`);
                }
                refetch();
                setTreatment(null);
            });

    }
    return (
        <div className='container-area'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-semibold mb-6">{name}</h3>
                    <form className='grid grid-cols-1 gap-5' onSubmit={handleBooking}>
                        <input type="text" name='year' placeholder="Type here" value={formatedDate} disabled className="input input-bordered w-full" />
                        <input type="text" name='time' placeholder="Type here" value={selectedSlot} disabled className="input input-bordered w-full" />
                        <input type="text" name='username' disabled value={user?.displayName} placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="email" name='email' disabled placeholder="Email" value={user?.email} className="input input-bordered w-full" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="SUBMIT" className='btn bg-accent text-white border-0 font-bold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;