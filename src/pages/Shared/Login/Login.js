import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';
import { useToken } from '../../../Hooks/UseToken';
const Login = () => {
    const [error, setError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const { loginByEmailPassword, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true })
    }
    useTitle('login')
    const loginHandle = data => {
        setError('')
        loginByEmailPassword(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(data.email)
                console.log(user)
                if (user?.uid) {
                    toast('successfully login')
                    reset()
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    };
    const googleLoginHandler = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                if (user?.uid) {
                    toast('successfully login')
                    reset()
                }
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero my-40">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card w-full shadow-2xl bg-base-100 px-5 py-3">
                    <h2 className='text-3xl font-bold text-center pb-5'>Login</h2>
                    <form onSubmit={handleSubmit(loginHandle)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: 'Email Address is required' })} type="text" className="input input-bordered w-full"
                                aria-invalid={errors.email ? "true" : "false"} />
                        </div>
                        {
                            errors.email && <p className='text-red-600'>{errors.email?.message}</p>
                        }
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: 'password is required', minLength: { value: 6, message: 'password must be at least 6 characters' } })} type="password" className="input input-bordered w-full"
                                aria-invalid={errors.password ? "true" : "false"} />
                        </div>
                        {
                            errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                        }
                        <button type='submit' className="btn btn-warning mt-4 w-full">Login</button>
                        {
                            error && <p className='text-center text-red-600 py-3'>{error}</p>
                        }
                    </form>
                    <p className='text-center my-4'>New to T Phone Reseller? <Link className='text-primary' to={'/register'}>Create new account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={googleLoginHandler} className="btn btn-outline btn-success my-3">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;