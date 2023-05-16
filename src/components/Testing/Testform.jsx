import { useForm } from 'react-hook-form'
import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { SiSkype } from "react-icons/si";
const Testform = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
                <div className="row">
                    <div className="col-md-5 col-lg-4 px-4">
                        <h4>Address</h4>
                        <a className="text-decoration-none" href="https://www.google.com/maps/@30.6494002,76.8061575,3a,72.1y,238.17h,92.3t/data=!3m6!1e1!3m4!1sR-wZpuAt1OdQ3jSwY6jSvg!2e0!7i13312!8i6656"># 14-A Shiva Enclave Patiala Road Zirkpur, SAS Nagar Mohali, Punjab Pincode-140603</a>

                        <h5 className='mt-3'><span><FiPhoneCall /></span> +91 7508972498</h5>
                        <h5 className='my-3'><span><SiGmail /></span> royalrana34@gmail.com</h5>
                        {/* <h5><span><SiGmail /></span> +91 7508972498</h5> */}

                        <h4>FOLLOW ME</h4>
                        <span className="fs-5"><FaTwitter /> <RiWhatsappFill /> <FaFacebook /> <FaLinkedinIn /> <SiSkype /></span>

                    </div>

                    <div className="col-md-7 col-lg-8 px-4">
                        <h3>Let's Keep In Touch</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='fname w-75' {...register("firstName", { required: true, maxLength: 20 })} placeholder="First Name" aria-invalid={errors.firstName ? "true" : "false"} />
                            {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}

                            <br/>

                            <input className='my-4 w-75' {...register("email", {
                                required: 'Enter your e-mail', pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi,
                                    message: 'Enter a valid e-mail address'
                                }
                            })} placeholder="Username@gmail.com" aria-invalid={errors.email ? "true" : "false"} />
                            {errors.email && <p role="alert">{errors.email.message}</p>}

                            <textarea className="feedback w-75" name="feedback" id="" placeholder=" Enter Your Feedback"></textarea>
                            <br/>
                            <input className='my-3' type="submit" />
                        </form>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Testform