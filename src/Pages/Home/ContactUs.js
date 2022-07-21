import React from 'react';
import Button from '../Shared/Button';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const data = {
            name,
            email,
            message
        }
    }
    return (
        <section id='contact' className='bg-contact-bg bg-no-repeat	bg-cover py-14 mt-10 md:mt-20'>
            <div className="container-area">
                {/* Contact Heading */}
                <div className='text-center mb-8'>
                    <h4 className='text-xl font-bold text-secondary mb-2.5'>Contact Us</h4>
                    <h2 className='text-4xl	font-normal text-white'>Stay connected with us</h2>
                </div>
                {/* Contact Form */}
                <div className='w-full md:w-[450px] mx-auto'>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2.5">
                        <input type="email" placeholder="Email Address" className="input w-full" />
                        <input type="text" placeholder="Subject" className="input w-full" />
                        <textarea className="textarea !mb-5" placeholder="Your message"></textarea>
                        <div className='flex justify-center'>
                            <Button>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;