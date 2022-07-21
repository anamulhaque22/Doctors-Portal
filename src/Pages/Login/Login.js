import React from 'react';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage;
    if (gError || error) {
        errorMessage = <p>{error?.message}{gError?.message}</p>
    }
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.passsword);
    }
    return (
        <div className='flex justify-center items-center container-area min-h-[calc(100vh-64px)]'>
            <div className="card w-96 bg-base-100 shadow">
                <div className="card-body">
                    {/* Login From Header */}
                    <div className='mb-8'>
                        <h3 className='text-xl font-normal text-[#000000] text-center'>Login</h3>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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

                        {/* password field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label text-sm font-normal">Password</label>
                            <input
                                {...register("passsword", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 chareecter or longer'
                                    }
                                })}
                                type="password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label text-sm font-normal">
                                {errors.passsword?.type === 'required' && <span>{errors.passsword?.message}</span>}
                                {errors.passsword?.type === 'minLength' && <span>{errors.passsword?.message}</span>}
                            </label>
                            <label className="label text-[10px] font-normal">Froget Password?</label>
                        </div>
                        {errorMessage}
                        {/* Submit button */}
                        <div className="form-control w-full max-w-xs">
                            <input type="submit" value="LOGIN" className="btn bg-accent text-neutral text-base w-full max-w-xs" />
                        </div>
                    </form>
                    <div>
                        <p className='text-sm text-black text-center'>New to Doctors Portal? <Link to='/register' className='text-secondary'>Create new account</Link></p>
                    </div>
                    <div className="divider text-xl">OR</div>
                    <div className='w-full max-w-xs flex'>
                        <button onClick={() => signInWithGoogle()} className='btn border-solid border-2 text-accent border-0 font-bold w-full btn-outline hover:bg-transparent hover:text-accent'>CONTINUE WITH GOOGLE</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;