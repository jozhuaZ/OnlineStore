import { useState } from 'react';
import sign_up from '../assets/SignUpPage/right_side_image.png';
import logo from '../assets/josh_dev_logo.png';
import { ClassicButton } from '../Components/Button/NavButton';

export default function SignUpPage () {
    const [showWindow, setShowWindow] = useState(false);
    
    return (
        <section className='h-screen flex justify-between items-center relative bg-linear-to-b from-blue-100 to-blue-900'>
            {/* LEFT SIDE CONTAINER */}
            <div className='h-full w-full flex-center flex-1/2 flex-col'>
                <a href='/' className='font-poppins flex items-center mb-6 text-3xl sm:text-4xl font-semibold text-gray-900 text-white text-shadow-md/50'>
                    <img className='w-12 h-12 mr-2' src={logo} alt='JoshDev logo' />
                    JoshDev Store   
                </a>
                <form className='font-poppins max-w-md mx-auto flex-center flex-col bg-[#f5f5f5] p-8 sm:p-10 md:p-11 rounded-2xl outline-1 shadow-lg/85'>
                    <h1 className='font-poppins mb-8 text-xl font-bold text-center leading-tight tracking-tight md:text-2xl'>
                        Create your account!
                    </h1>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='email' name='email' id='email' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='email' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Email address
                        
                            </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='password' name='password' id='password' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Password
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='password' name='repeat_password' id='repeat_password' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='repeat_password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Confirm password
                        </label>
                    </div>
                    <div className='flex flex-col w-full md:grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-5 group'>
                            <input type='text' name='first_name' id='first_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                            <label htmlFor='first_name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                First name
                            </label>
                        </div>
                        <div className='relative z-0 w-full mb-5 group'>
                            <input type='text' name='last_name' id='last_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                            <label htmlFor='last_name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                Last name
                            </label>
                        </div>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='tel' pattern='[0]{1}[9]{1}[0-9]{9}' name='phone' id='phone' maxLength={11} className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='phone' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Phone number
                        </label>
                    </div>

                    {/* TERMS AND CONDITION */}
                    <div className='flex-center md:gap-3 md:text-[16px] text-sm gap-1 pb-3'>
                        <input type='checkbox' id='terms_condition' name='terms_condition' required />
                        <label> I agree to the &nbsp;
                            <span onClick={() => setShowWindow(true)} className='cursor-pointer text-blue-500 hover:underline hover:text-blue-600'>
                                Terms and Conditions
                            </span>.
                        </label>
                    </div>

                    {/* BUTTON FOR SIGNUP */}
                    <button type='submit' className='text-[16px] w-full bg-blue-900 hover:outline-1 cursor-pointer text-white bg-primary-600 hover:bg-blue-800 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
                    
                    {/* LINK TO GO BACK TO LOGIN */}
                    <p className='text-center text-sm font-light pt-5'>
                        Already registered?   <a href='/LoginPage/LoginPage' className='text-[16px] font-medium hover:underline hover:text-blue-300'> Login</a> instead.
                    </p>
                </form>
            </div>

            {/* RIGHT SIDE CONTAINER / HIDDEN ON MOBILE */}
            <div className='hidden md:h-full md:flex md:flex-1/2 md:bg-[#3d5a80] md:shadow-lg/40'>
                <img 
                    className='object-contain'
                    src={sign_up}
                    alt='Sign Up Image'
                />
            </div>
            {/* TERMS AND CONDITION POP UP WINDOW */}
            { showWindow && (
                // BACKDROP FILTER
                <div className='absolute backdrop-blur-[2px] z-50 w-full h-full'>
                    {/* WINDOW CONTAINER */}
                    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='relative w-full max-w-2xl max-h-full shadow-lg/70 bg-[#98c1d9] p-3 rounded-lg font-poppins text-center '>
                            <div className='relative bg-[#98c1d9] p-3 rounded-lg font-poppins'>
                                <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t'>
                                    <h3 className='text-2xl font-semibold'>
                                        Terms and Condition
                                    </h3>
                                </div>
                                <div className='max-h-70 outline-1 overflow-y-auto p-4 md:p-5 space-y-4 text-justify text-sm md:text-base leading-relaxed'>
                                    <p><strong>1. Acceptance of Terms</strong><br />
                                        By creating an account on JoshDev Store, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                                    </p>

                                    <p><strong>2. User Responsibilities</strong><br />
                                        You are responsible for providing accurate and complete registration information. You must keep your login credentials confidential and are responsible for all activities under your account.
                                    </p>

                                    <p><strong>3. Use of Services</strong><br />
                                        Our services are provided for lawful purposes only. You agree not to use the platform to engage in any fraudulent, illegal, or harmful activity.
                                    </p>

                                    <p><strong>4. Data Collection</strong><br />
                                        We collect and process personal data as outlined in our Privacy Policy. By signing up, you consent to the collection, use, and storage of your personal information.
                                    </p>

                                    <p><strong>5. Intellectual Property</strong><br />
                                        All content on JoshDev Store, including text, graphics, logos, and images, is the property of JoshDev or its content suppliers and is protected by intellectual property laws.
                                    </p>

                                    <p><strong>6. Account Termination</strong><br />
                                        We reserve the right to suspend or terminate your account without notice if you violate any of these terms or engage in behavior that harms our platform or users.
                                    </p>

                                    <p><strong>7. Changes to Terms</strong><br />
                                        JoshDev Store reserves the right to modify these Terms and Conditions at any time. You are responsible for reviewing them periodically. Continued use of our services implies acceptance of the changes.
                                    </p>

                                    <p><strong>8. Contact</strong><br />
                                        If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@joshdevstore.com" className="text-blue-600 hover:underline">support@joshdevstore.com</a>.
                                    </p>
                                </div>

                                {/* BUTTONS CONTAINER */}
                                <div className='pt-3'>
                                    <ClassicButton 
                                        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2' 
                                        text='Close' 
                                        onClick={() => setShowWindow(false)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </section>
    );
};