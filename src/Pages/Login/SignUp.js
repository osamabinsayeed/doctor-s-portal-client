import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text text-red-500'>{error?.message || gError?.message || updateError.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser);
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('updated');

        navigate('/appointment');

    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/*this is name field */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },

                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text text-red-500' role="alert">{errors.name.message}</p>}
                                {errors.name?.type === 'pattern' && <p className='text text-red-500' role="alert">{errors.name.message}</p>}

                            </label>
                        </div>


                        {/* this is email filed */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text text-red-500' role="alert">{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text text-red-500' role="alert">{errors.email.message}</p>}

                            </label>
                        </div>


                        {/* this is password filed */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text text-red-500' role="alert">{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text text-red-500' role="alert">{errors.password.message}</p>}

                            </label>
                        </div>




                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already have an account in Doctors portal? <Link className='text-secondary' to="/login">Log in</Link></small></p>
                    <div className='divider'>OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;