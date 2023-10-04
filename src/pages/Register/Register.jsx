import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import {  Link } from 'react-router-dom';
import { useContext } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password')
        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }
    return (
        <div>
            <Navbar />
            <div className='text-center mx-auto'>
                <h1 className="text-4xl my-10">Register now!</h1>

                <form className='md:w-3/4 lg:w-1/2 mx-auto' onSubmit={handleRegister}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="url" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>Already have an account <Link className='text-blue-500' to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;