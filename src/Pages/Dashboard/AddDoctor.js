import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { isLoading, error, data: serviceNames } = useQuery(["serviceName"], () => {
        return axios.get("http://localhost:5000/service");

    })
    if (isLoading) {
        return <p>Loading...</p>
    }
    const imageStorageKey = '44017b27a9d0fb3bf73842bf8c91cbb7';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const { name, email, speciality } = data;
        axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then(res => {
            if (res.data.success) {
                const imageUrl = res.data.data.url;
                const doctor = {
                    name: name,
                    email: email,
                    speciality: speciality,
                    imageUrl: imageUrl,
                }
                axios.post("http://localhost:5000/doctor", doctor, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success("Doctor added successfully");
                        } else {
                            toast.error("Error adding doctor");
                        }
                    })
            }
        });
    }

    /*
    3 wayw to store image
    1. Third party storage
    2. Your own storage in your server(file system))
    3. Database : Mongodb 
     */



    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-64px)]'>
            <div className="card w-96 bg-base-100 shadow">
                <div className="card-body">
                    {/* Login From Header */}
                    <div className='mb-8'>
                        <h3 className='text-xl font-normal text-[#000000] text-center'>Add A Doctor</h3>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Name field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label text-sm font-normal">Name</label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    }
                                })}
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                            />

                            {
                                errors.name?.type === 'required' &&
                                <label className="label text-sm font-normal">{errors.name?.message}</label>
                            }

                        </div>
                        {/* Email field */}
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

                        {/* Speciality field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label text-sm font-normal">Speciality</label>
                            <select
                                {...register("speciality", {
                                    required: {
                                        value: true,
                                        message: "speciality is required"
                                    },
                                })}
                                className="select select-bordered w-full max-w-xs">
                                {
                                    serviceNames?.data.map((serviceName) => <option key={serviceName._id}>{serviceName.name}</option>)
                                }
                            </select>

                            <label className="label text-sm font-normal">
                                {errors.speciality?.type === 'required' && <span>{errors.speciality?.message}</span>}
                            </label>
                        </div>

                        {/* Email field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label text-sm font-normal">Image</label>
                            <input
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    },
                                })}
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                            />

                            {
                                errors.image?.type === 'required' &&
                                <label className="label text-sm font-normal">{errors.email?.message}</label>
                            }

                        </div>
                        {/* Add button */}
                        <div className="form-control w-full max-w-xs">
                            <input type="submit" value="ADD" className="btn bg-accent text-neutral text-base w-full max-w-xs" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;