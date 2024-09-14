import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className='min-h-screen flex justify-center items-center '>
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dailog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Sign Up!</h3>

                            {/* Full Name */}
                            <div className='mt-4 space-y-1'>
                                <label className='text-bold'>Full Name</label><br />
                                <input type='text' className='w-64 px-3 py-1 border rounded-md outline-none' placeholder='Enter your full name' {...register("name", { required: true })} />
                                {errors.name && <span className='text-sm text-red-500'>Full Name is required</span>}
                            </div>

                            {/* Phone Number */}
                            <div className='mt-4 space-y-1'>
                                <label className='text-bold'>Phone<span className='text-base-300'>(optional)</span></label><br />
                                <input type='number' className='w-64 px-3 py-1 border rounded-md outline-none'
                                    placeholder='Enter your number' {...register("number", { required: false })} />
                            </div>

                            {/* Email */}
                            <div className='mt-4 space-y-1'>
                                <label className='text-bold'>Email</label><br />
                                <input type='email' className='w-64 px-3 py-1 border rounded-md outline-none' placeholder='Enter your email' {...register("email", { required: true })} />
                                {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-8 space-y-1'>
                                <label className='text-bold'>Password</label><br />
                                <input type='password' className='w-64 px-3 py-1 border rounded-md outline-none' placeholder='Enter your password' {...register("password", { required: true })} />
                                {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
                            </div>

                            {/* Login and Signup  */}
                            <div className='mt-4 flex justify-between'>
                                <button type='submit' className='px-2 py-1 rounded-md bg-secondary text-white'>Signup</button>
                                <p>Already have an account? <button className='text-blue-400 hover:cursor-pointer underline' onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup