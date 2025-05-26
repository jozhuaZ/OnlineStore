import logo from '../assets/josh_dev_logo.png';

const HeaderNav = () => {
    return (
        <header className="flex justify-between w-full top-0 z-20 bg-white p-2 px-2 sm:px-6 shadow-xs/20 sm:shadow-md/20 sticky">
            {/* --- LEFT SIDE --- */}
            <div className='flex-center gap-2 sm:gap-10'>
                <img
                    className='h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]' 
                    src={logo}
                    alt='logo'
                />
                {/* TO BE A CLICKABLE LINK, THAT WOULD REDIRECT TO MY ABOUT */}
                <p className='font-poppins text-shadow-xs text-[17px] sm:text-2xl'>
                    JoshDev
                </p>
            </div>
            
            {/* --- RIGHT SIDE --- */}
            <nav className='flex-center'>
                <ul className='flex flex-row gap-2 sm:gap-12 font-poppins'>
                    <li className='text-link-hover'>
                        <a href='#' className='text-[14px] sm:text-[18px] text-shadow-xs'>Home</a> 
                    </li>
                    <li className='text-link-hover'>
                        <a href='#' className='text-[14px] sm:text-[18px] text-shadow-xs'>Store</a> 
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;