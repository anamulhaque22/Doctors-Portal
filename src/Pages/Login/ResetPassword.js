import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, passwordReseterror] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let errorMessage;
    if(passwordReseterror){
        errorMessage = <p>{passwordReseterror.message}</p>
    }
    const handleResetPassword = async (data) => {
        sendPasswordResetEmail(data.email)
        console.log(data.email)
    }
    return (
        <div className='flex justify-center items-center container-area min-h-[calc(100vh-64px)]'>
            <div className="card w-96 bg-base-100 shadow">
                <div className="card-body">
                    {/* Login From Header */}
                    <div className='mb-8'>
                        <h3 className='text-xl font-normal text-[#000000] text-center'>Forget Password</h3>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(handleResetPassword)} className="space-y-5">
                        {/* email field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label text-sm font-normal">Email</label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: 'Enter a valid email'
                                    }
                                })}
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                            />

                            {
                                errors.email?.type === 'required' &&
                                <label className="label text-sm font-normal">{errors.email?.message}</label>
                            }
                            {
                                errors.email?.type === 'pattern' &&
                                <label className="label text-sm font-normal">{errors.email?.message}</label>
                            }

                        </div>
                        {errorMessage}
                        {/* Submit button */}
                        <div className="form-control w-full max-w-xs">
                            <input type="submit" value="RESET" className="btn bg-accent text-neutral text-base w-full max-w-xs" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;