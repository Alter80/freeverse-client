import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
import './Register.css';


const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { user, isLoading, authError, loginWithGoogle, registerUser, loginUser, logout } = useAuth();

    // register
    const onSubmit = (data, e) => {
        e.target.reset();
        console.log(data);

        const { name, email, password, rePassword } = data;

        if (password !== rePassword) {
            // console.log('not matched')
            alert('Your password did not match');

        }
        else {
            console.log('matched');
            registerUser(name, email, password, history);
        }


    };
    console.log(errors);

    console.log(user);

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home"

    // Google login
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log('google login done')
                history.push(redirect_uri)
            })
    }

    return (
        <div className="container">

            <div className="row">

                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                            <h5 className="card-title text-white text-center">Sign In</h5>

                            <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Name" {...register("name", { required: true, maxLength: 80 })} />
                                </div>

                                <div className="form-label-group">
                                    <input type="text" className="text-center form-control p-2" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                </div>

                                <div className="form-label-group">
                                    <input type='password' className="text-center form-control p-2" placeholder="Password" {...register("password", { required: true, maxLength: 6 })} />
                                </div>

                                <div className="form-label-group">
                                    <input type='password' className="text-center form-control p-2" placeholder="Retype_Password" {...register("rePassword", { required: true, maxLength: 6 })} />
                                </div>


                                <Button className="btn btn-lg mt-3 text-uppercase" type="submit" variant="outline-light" >Sign in</Button>

                                <p className='text-white'><Button onClick={handleGoogleLogin} className="btn btn-lg  mt-3 text-uppercase" variant="outline-light" >Login in Using Google</Button></p>



                                <hr className="my-4 text-white " />
                                <p className='text-white'>Already a User? <Link className='register-link ' to='/login'><span className='text-decoration-none fs-6 text-white '>Login Here</span></Link></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;