import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ treatment, date, setTreatment}) => {
    const { service, selectedSlot } = treatment;
    const { name } = service;
    const handleBooking = event => {
        event.preventDefault();
        setTreatment(null);
    }
    return (
        <div className='container-area'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-semibold mb-6">{name}</h3>
                    <form className='grid grid-cols-1 gap-5' onSubmit={handleBooking}>
                        <input type="text" placeholder="Type here" value={format(date, 'PP')} disabled className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" value={selectedSlot} disabled className="input input-bordered w-full" />
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full" />
                        <input type="submit" value="SUBMIT" className='btn bg-accent text-white border-0 font-bold' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;