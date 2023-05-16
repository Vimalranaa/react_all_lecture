import React from 'react'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc';


const Gmail = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container '>
            <form className='p-5 border border-primary w-75 ' onSubmit={handleSubmit(onSubmit)}>
                <span className='fs-1'><FcGoogle /></span>
                <label className='fs-2 mb-3'>Create your Google Account</label>

                <br></br>
                <input className='fname' {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" aria-invalid={errors.firstName ? "true" : "false"} />
                {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                <input className='mb-3 ' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} placeholder="Last Name" aria-invalid={errors.lastName ? "true" : "false"} />
                {errors.lastName && <p role="alert">Last name is required</p>}
                <br></br>

                <input className='mb-2 mail' {...register("email", {
                    required: 'Enter your e-mail', pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Enter a valid e-mail address'
                    }
                })} placeholder="Username@gmail.com" aria-invalid={errors.email ? "true" : "false"} />
                {errors.email && <p role="alert">{errors.email.message}</p>}
                <br></br>
                <label className='text-capitalize text-primary fw-semibold mb-5'>Use my current email address instead</label>

                <br></br>

                <input name="password " type="password" placeholder="Password" {...register('password')} className={`form-control password ${errors.password ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback ">{errors.password?.message}</div>

                <input name="confirmPwd" type="password" placeholder="Confirm Password" {...register('confirmPwd')} className={`form-control password ${errors.confirmPwd ? 'is-invalid' : ''}`} />
                {errors.confirmPwd?.message}

                <br></br>
                <input className='my-3' type="submit"></input>

            </form>
        </div>
    );
}

export default Gmail