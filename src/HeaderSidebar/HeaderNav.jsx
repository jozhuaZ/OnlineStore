import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import logo from '../assets/josh_dev_logo.png';

const HeaderNav = ({ showSideBar = true }) => {
    const { openMenu, setOpenMenu } = showSideBar ? useContext(MenuContext) : false;

    return (
        <header className='flex justify-between w-full top-0 bg-white p-2 px-2 sm:px-6 shadow-xs/20 sm:shadow-md/20 sticky z-100'>
            {/* --- LEFT SIDE --- */}
            <div className='flex-center gap-1 sm:gap-8'>
                {/* THREE LINE MENU SIDEBAR NAVIGATION */}
                { showSideBar && (
                    <div className='md:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        <svg className='w-7 h-7 cursor-pointer hover:text-gray-900 hover:scale-[1.05] duration-300 ease-in-out' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                            <path stroke='currentColor' strokeLinecap='round' strokeWidth='2' d='M5 7h14M5 12h14M5 17h14'/>
                        </svg>
                    </div>
                ) }
                
                <img
                    className='h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]' 
                    src={logo}
                    alt='logo'
                />
                {/* TO BE A CLICKABLE LINK, THAT WOULD REDIRECT TO MY ABOUT */}
                <p className='hidden md:block font-poppins text-shadow-xs text-[17px] sm:text-2xl'>
                    JoshDev Store
                </p>
            </div>
            
            {/* --- RIGHT SIDE --- */}
            <nav className='flex-center'>
                <ul className='flex flex-row gap-2 sm:gap-12 font-poppins'>
                    <li className='text-link-hover'>
                        <a href='/' className='text-[14px] sm:text-[18px] text-shadow-xs'>Home</a> 
                    </li>
                    <li className='text-link-hover'>
                        <a href='/StorePage/StorePage' className='text-[14px] sm:text-[18px] text-shadow-xs'>Store</a> 
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;