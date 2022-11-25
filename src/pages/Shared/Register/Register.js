import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useTitle } from '../../../Hooks/UseTitle';
import { useToken } from '../../../Hooks/UseToken';

const Register = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const { createUser, google, updateName } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate()
    useTitle('register')
    if (token) {
        navigate('/')
    }
    const handleLogin = data => {
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                const name = data.name;
                const email = data.email;
                const role = data.role;
                console.log(name, email, role)
                saveUser(name, email, role)
                toast('successfully login')
                if (user?.uid) {
                    navigate('/')
                    reset()
                }
                console.log(user)
                const userName = {
                    displayName: data.name
                }
                console.log(data.name)
                updateName(userName)
                    .then(() => { })
                    .catch(err => console.error(err))
            })
            .catch(error => console.error(error))
    };

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch(`https://doctors-portal-server-gray.vercel.app/users`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }

    const googleLogIn = () => {
        google()
            .then(result => {
                const user = result.user;
                toast('successfully login')
                console.log(user);
            })
            .catch(error => {
                setRegisterError(error.message)
                console.error(error)
            })
    }
    return (
        <div className="hero my-40">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 px-5 py-3">
                <h2 className='text-3xl text-center pb-5'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: "Name is required" })} type="name" className="input input-bordered w-full" />
                    </div>
                    {
                        errors.name && <p className='text-red-600'>{errors.name?.message}</p>
                    }
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
                        <input {...register("password", { required: 'password is required', minLength: { value: 6, message: 'password must be at least 6 characters' }, pattern: { value: /[A-Z]/, message: 'password must be strong' } })} type="password" className="input input-bordered w-full"
                            aria-invalid={errors.password ? "true" : "false"} />
                    </div>
                    {
                        errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                    }
                    <button type='submit' className="btn btn-warning mt-4 w-full">Login</button>
                    {
                        registerError && <p className='text-center text-red-500'>{registerError}</p>
                    }
                    <select {...register("role")} className="select select-bordered my-5">
                        <option value="seller">Seller</option>
                        <option value="user" disabled selected>User</option>
                    </select>
                </form>
                <p className='text-center'>Already have an account? <Link className='text-primary' to={'/login'}>Please! login</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleLogIn} className="btn btn-outline btn-success my-3">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;