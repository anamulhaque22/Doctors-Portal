import React, { useState } from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    const [selectedSlot, setSelectedSlot] = useState([slots[0]]);
    const handleSlotSelect = (e) => {
        setSelectedSlot(e.target.value);
    }
    return (
        <div className='py-8 shadow	 rounded-lg text-center space-y-3'>
            <p className='text-center text-secondary text-xl font-semibold'>{name}</p>
            <select className="select select-ghost text-[#000000] text-[14px] font-normal" onChange={handleSlotSelect}>
                <option className='text-[#000000] text-[14px]' defaultValue>{slots.length > 0 ? slots[0] : "No Slot Available"}</option>
                {
                    slots.map(slot => <option className='text-[#000000] text-[14px]' key={slot}>{slot}</option>)
                }
            </select>
            <p className='text-[#000000] text-[12px]'>{slots.length} {slots.length === 0 ? "SPACE" : "SPACES"} AVAILABLE</p>
            <p className='text-[#000000] text-[12px]'>$ {price}</p>
            <label
                disabled={slots.length === 0}
                className="btn gradient-bg text-white border-0 font-bold disabled:opacity-30 disabled:text-white"
                onClick={() => setTreatment({ service, selectedSlot })}
                htmlFor="booking-modal">
                Book Appointment
            </label>
        </div>
    );
};

export default Service;