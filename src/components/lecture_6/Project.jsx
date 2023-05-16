import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Project= () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
            <div className='container w-50 border'>
                <div className='row text-center rounded-2 mt-2'>
                    <div className='col-12'>
                        <h2 className='my-2 mb-4'>Please Login To Continue</h2>
                    </div>
                    <div className="col-6 g-0">
                        <button className='btn btn-lg w-100 text-dark border border-1 rounded-0 border-start-0' style={isSignIn ? { background: 'white' } : { background: 'gray' }} onClick={() => setIsSignIn(true)}>Sign In</button>
                    </div>
                    <div className="col-6 g-0">
                        <button className='btn btn-lg w-100 text-dark border-1 rounded-0 border-end-0' style={isSignIn ? { background: 'gray' } : { background: 'white' }} onClick={() => setIsSignIn(false)}>Sign Up</button>
                    </div>
                </div>
                <div className='row'>

                    {isSignIn ?
                        <div className='col'>
                            <form onSubmit={handleSubmit(onSubmit)} className="signinform m-4">
                                <label className='form-label'>Email</label>
                                <input type="email" className="form-control signin" placeholder='emailid'{...register("email", { required: 'Enter your e-mail', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter a valid e-mail address' } })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.email && <p role="alert">{errors.email.message}</p>}

                                <label className='form-label mt-3'>Password</label>
                                <input type="password" className="form-control signin" placeholder='Password'{...register("password", { required: 'Enter your e-mail', minLength: { value: 4, message: "Password must be more than 4 characters", }, maxLength: { value: 10, message: "Password must be less than 10 characters", }, })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.password && <p role="alert">{errors.password.message}</p>}

                                <input type="checkbox" className="signin" value="Remember_Me" {...register("remember_me")} />
                                <label className='form-label mt-3 mx-2'> Remember Me</label>
                                <button className='btn bg-success px-5 my-3 d-block'>Login</button>
                            </form>
                        </div>
                        :
                        <div className='col'>
                            <form onSubmit={handleSubmit(onSubmit)} className="signinform m-4">
                            <label className='form-label'>Email</label>
                                <input type="email" className="form-control signin" placeholder='emailid'{...register("email", { required: 'Enter your e-mail', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter a valid e-mail address' } })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.email && <p role="alert">{errors.email.message}</p>}

                                <label className='form-label mt-3'>Password</label>
                                <input type="password" className="form-control signin" placeholder='Password'{...register("password", { required: 'Enter your e-mail', minLength: { value: 4, message: "Password must be more than 4 characters", }, maxLength: { value: 10, message: "Password must be less than 10 characters", }, })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.password && <p role="alert">{errors.password.message}</p>}

                                <input type="checkbox" className="signin" value="Remember_Me" {...register("remember_me")} />
                                <label className='form-label mt-3 mx-2'> Remember Me</label>
                                <button className='btn bg-primary px-5 my-3 d-block'>Register</button>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Project;