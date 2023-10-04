import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const {signIn}=useContext(AuthContext)
    const location=useLocation();
    console.log(location)
    const navigate=useNavigate();
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=form.get('email')
        const password=form.get('password')
        signIn(email,password)
        .then(result=>{
            console.log('login')
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.log('error')
        })
    }
    return (
        <div>
            <Navbar />
            <div className='text-center mx-auto'>
                <h1 className="text-4xl my-10">Login now!</h1>

                <form className='md:w-3/4 lg:w-1/2 mx-auto' onSubmit={handleLogin}>

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
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>Dont have an account <Link className='text-blue-500' to="/register">Register</Link></p>
            </div>


           
        </div>
    );
};

export default Login;