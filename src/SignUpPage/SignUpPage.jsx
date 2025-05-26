import sign_up from '../assets/SignUpPage/right_side_image.png';
import logo from '../assets/josh_dev_logo.png';

export default function SignUpPage () {
    return (
        <section className='h-screen flex justify-between items-center'>
            {/* LEFT SIDE CONTAINER */}
            <div className='flex-center flex-1/2 flex-col'>
                <a href='/' className='font-poppins flex items-center mb-6 text-3xl sm:text-4xl font-semibold text-gray-900 text-white text-shadow-md/50'>
                    <img className='w-12 h-12 mr-2' src={logo} alt='JoshDev logo' />
                    JoshDev Store   
                </a>
                <form className='font-poppins max-w-md mx-auto flex-center flex-col bg-[#f5f5f5] p-8 sm:p-10 md:p-11 rounded-2xl outline-1 shadow-lg/85'>
                    <h1 className='font-poppins mb-8 text-xl font-bold text-center leading-tight tracking-tight md:text-2xl'>
                        Create your account!
                    </h1>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='email' name='floating_email' id='floating_email' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='floating_email' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Email address
                        
                            </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='password' name='floating_password' id='floating_password' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='floating_password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Password
                        </label>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='password' name='repeat_password' id='floating_repeat_password' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='floating_repeat_password' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Confirm password
                        </label>
                    </div>
                    <div className='flex flex-col w-full md:grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-5 group'>
                            <input type='text' name='floating_first_name' id='floating_first_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                            <label htmlFor='floating_first_name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                First name
                            </label>
                        </div>
                        <div className='relative z-0 w-full mb-5 group'>
                            <input type='text' name='floating_last_name' id='floating_last_name' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                            <label htmlFor='floating_last_name' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                                Last name
                            </label>
                        </div>
                    </div>
                    <div className='relative z-0 w-full mb-5 group'>
                        <input type='tel' pattern='[0]{1}-[9]{1}[0-9]{9}' name='floating_phone' id='floating_phone' className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder=' ' required />
                        <label htmlFor='floating_phone' className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Phone number
                        </label>
                    </div>
                    <button type='submit' className='text-[16px] w-full bg-blue-900 hover:outline-1 cursor-pointer text-white bg-primary-600 hover:bg-blue-800 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
                    <p className='font-poppins text-center text-sm font-light pt-5'>
                        Already registered?   <a href='/LoginPage/LoginPage' className='text-[16px] font-medium hover:underline hover:text-blue-300'> Login</a> instead
                    </p>
                </form>
            </div>

            {/* RIGHT SIDE CONTAINER */}
            <div className='hidden md:h-full md:flex md:flex-1/2 md:bg-[#3d5a80] md:shadow-lg/40'>
                <img 
                    className='object-contain'
                    src={sign_up}
                    alt='Sign Up Image'
                />
            </div>
        </section>
    );
};