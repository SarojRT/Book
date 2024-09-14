import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
                            <h3 className="font-bold text-lg">Login!</h3>

                            {/* Email */}
                            <div className='mt-4 space-y-1'>
                                <label className='text-bold'>Email</label><br />
                                <input type='email' className='w-64 px-3 py-1 border rounded-md outline-none' placeholder='Enter your email' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>Email is required</span>}
                            </div>

                            {/* Password */}
                            <div className='mt-8 space-y-1'>
                                <label className='text-bold'>Password</label><br />
                                <input type='password' className='w-64 px-3 py-1 border rounded-md outline-none' placeholder='Enter your password' {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>Password is required</span>}
                            </div>

                            {/* Login and Signup  */}
                            <div className='mt-4 flex justify-between'>
                                <button type='submit' className='px-2 py-1 rounded-md bg-secondary text-white'>Login</button>
                                <p>Not registered yet? <Link to="/signup" className='text-blue-400 hover:cursor-pointer underline'>
                                    Signup
                                </Link>{""}
                                </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login