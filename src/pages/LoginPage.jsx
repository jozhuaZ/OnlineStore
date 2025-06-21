import logo from '../assets/josh_dev_logo.png';

export default function LoginPage () {
    return (
        <section className='h-screen bg-linear-to-b from-blue-100 to-blue-900'>
            <div className='flex-center flex-col px-6 py-8 mx-auto h-full lg:py-0 shadow-lg/50'>
                <a href='/' className='font-poppins flex items-center mb-6 text-3xl sm:text-4xl font-semibold text-gray-900 text-white text-shadow-md/50'>
                    <img className='w-12 h-12 mr-2' src={logo} alt='JoshDev logo' />
                    JoshDev Store   
                </a>
                <div className='w-full bg-[#3d5a80] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0'>
                    <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                        <h1 className='font-poppins mb-8 text-xl font-bold text-center leading-tight tracking-tight md:text-2xl text-white'>
                            Sign in to your account
                        </h1>
                        <form className='font-poppins space-y-4 md:space-y-6' action='#'>
                            <div>
                                <label for='email' className='block mb-2 text-sm font-medium text-white'>Email</label>
                                <input type='email' name='email' id='email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                                    placeholder='your@email.com' 
                                    required=''
                                />
                            </div>
                            <div>
                                <label for='password' className='block mb-2 text-sm font-medium text-white'>Password</label>
                                <input type='password' name='password' id='password' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' required='' />
                            </div>
                            <button type='submit' className='text-[16px] w-full bg-blue-900 hover:outline-1 cursor-pointer text-white bg-primary-600 hover:bg-blue-800 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                Sign in
                            </button>
                            <p className='font-poppins text-center text-sm font-light text-[#f5f5f5]'>
                                Don't have an account yet?   <a href='/pages/SignUpPage' className='text-[16px] font-medium hover:underline text-white hover:text-blue-300'> Sign up</a> now!
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};