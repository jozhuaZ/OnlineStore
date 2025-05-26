import logo from '../assets/josh_dev_logo.png';

const FooterNav = () => {
    return (
        <footer className='w-full bg-white shadow-sm'>

            <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
                {/* LIST OF OTHER PAGES CONTAINER */}
                <div className='sm:flex-row sm:items-center sm:justify-between flex flex-col items-center'>
                    <a href='#' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
                        <img src={logo} className='h-12' alt='JoshDev Logo' />
                        <span className='self-center text-2xl font-semibold whitespace-nowrap text-black'>JoshDev Store</span>
                    </a>
                    <ul className='flex flex-wrap items-center mb-6 text-[16px] text-black font-medium sm:mb-0'>
                        <li>
                            <a href='#' className='hover:underline me-4 md:me-6'>About</a>
                        </li>
                        <li>
                            <a href='#' className='hover:underline me-4 md:me-6'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='#' className='hover:underline'>Contact</a>
                        </li>
                    </ul>
                </div>
                {/* BOTTOM PART CONTAINER */}
                <hr className='my-2 sm:mx-auto border-black lg:my-5' />
                <span className='text-sm block text-black text-center'>© 2025 JoshDev. All Rights Reserved.</span>
            </div>

        </footer>
    );
};

export default FooterNav;