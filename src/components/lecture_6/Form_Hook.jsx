import React from 'react'
import { useForm } from 'react-hook-form'

const Form_Hook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true, maxLength: 20 })} aria-invalid={errors.firstName ? "true" : "false"} />
            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

            <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.lastName ? "true" : "false"} />
            {errors.lastName && <p role="alert">Please check last name</p>}

            <input type="number" {...register("age", { min: 18, max: 99 })} />
            <input type="submit" />
            
        </form>
    );
}

export default Form_Hook
