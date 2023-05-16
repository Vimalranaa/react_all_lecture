import React from 'react'
import { useForm } from 'react-hook-form'

const Form_Hook_SelectOption = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <form className='p-3' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-3' {...register("firstName", { required: true, maxLength: 20 })} aria-invalid={errors.firstName ? "true" : "false"} />
            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
            <br></br>

            <input className='mb-3' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.lastName ? "true" : "false"} />
            {errors.lastName && <p role="alert">Please check last name</p>}
            <br></br>

            <input className='mb-3' {...register("email", {
                required: 'Enter your e-mail', pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter a valid e-mail address'
                }
            })} aria-invalid={errors.email ? "true" : "false"} />
            {errors.email && <p role="alert">{errors.email.message}</p>}
            <br></br>


            <input className='mb-3' type="number" {...register("age", { min: 18, max: 99 })} />

            <br></br>

            <select className='mt-3' {...register('city')}>
                <option value="chandigarh">chandigarh</option>
                <option value="delhi">delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Punjab">Punjab</option>
                <option value="Haryana">Haryana</option>
            </select>

            <br></br>

            <label>Gender : </label>

            <input type="radio" value="Male" {...register("gender")} />
            Male
            
            <input type="radio" value="Female" {...register("gender")} />
            Female
            
            <input type="radio" value="Others" {...register("gender")} />
            Other

            <br></br>




            <textarea type="text" placeholder="Message" name="content"/>

            <br></br>
            <input className='my-3' type="submit" />

        </form>
    );
}

export default Form_Hook_SelectOption