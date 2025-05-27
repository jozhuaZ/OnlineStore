import { useState, useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import default_profile_img from '../assets/default_profile.png';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { openMenu } = useContext(MenuContext);
    
    return (
        <>
        { openMenu && (
            <aside id='sidebar' className={`fixed left-0 z-40 w-64 h-screen bg-white shadow transition-transform duration-300 ease-in-out ${
                openMenu ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className='max-h-[90%] px-3 py-4 overflow-y-auto bg-white'>
                    {/* ACCOUNT PROFILE */}
                    {/* TO BE DYNAMIC */}
                    <a href='#' className='flex justify-between items-center flex-row hover:bg-gray-50 cursor-pointer py-3'>
                        <img 
                            className='h-13 w-13 rounded-full'
                            src={default_profile_img}
                            alt='your profile pic'
                        />
                        <div className="font-poppins text-right">
                            {/* full name */}
                            <p>Sample, User</p>

                            {/* email with ellipsis and tooltip on hover */}
                            <div className="relative group w-fit mx-auto">
                                <p className="text-xs max-w-[150px] truncate overflow-hidden whitespace-nowrap">
                                sampleuser@gmail.com
                                </p>
                                <div className="absolute left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-lg z-10 whitespace-normal max-w-xs">
                                    sampleuser@gmail.com
                                </div>
                            </div>
                        </div>
                    </a>   
                        
                    <hr />
                    <ul className='space-y-2 font-medium font-poppins'> 
                        {/* STORE */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                    <path fillRule='evenodd' d='M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z' clipRule='evenodd'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>Store</span>
                            </a>
                        </li>
                        {/* CATEGORY */}
                        <button
                            type='button'
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-link-hover flex items-center w-full p-2 text-base transition duration-75 rounded-lg group'
                        >
                            <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                <path fillRule='evenodd' d='M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z' clipRule='evenodd'/>
                            </svg>
                            <span className='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>Category</span>
                            <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill='none' viewBox='0 0 10 6'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4'/>
                            </svg>
                        </button>

                        {isOpen && (
                            // TO BE DYNAMIC 
                            <ul className='py-2 space-y-2'>
                            <li className='text-link-hover max-w-fit hover:bg-gray-50'>
                                <a href='#' className='flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group'>-&gt; Electronics</a>
                            </li>
                            <li className='text-link-hover max-w-fit hover:bg-gray-50'>
                                <a href='#' className='flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group'>-&gt; Clothes</a>
                            </li>
                            <li className='text-link-hover max-w-fit hover:bg-gray-50'>
                                <a href='#' className='flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group'>-&gt; Shoes</a>
                            </li>
                            </ul>
                        )}
                        {/* VIEW CART */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                    <path fillRule='evenodd' d='M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z' clipRule='evenodd'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>View Cart</span>
                                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-100 bg-blue-900 rounded-full'>3</span>
                            </a>
                        </li>
                        {/* ORDERS */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>Orders</span>
                            </a>
                        </li>
                        {/* WISHLIST */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>Wishlist</span>
                            </a>
                        </li>
                        <hr />
                        {/* INBOX */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                    <path fillRule='evenodd' d='M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Zm5-7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Z' clipRule='evenodd'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>Inbox</span>
                                {/* TO BE DYNAMIC */}
                                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-red-100 bg-red-900 rounded-full'>3</span>
                            </a>
                        </li>
                        {/* FEEDBACK */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>Feedback</span>
                            </a>
                        </li>
                        {/* HELP CENTER */}
                        <li className='text-link-hover hover:bg-gray-50'>
                            <a href='#' className='flex items-center p-2 rounded-lg group'>
                                <svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                                    <path fillRule='evenodd' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z' clipRule='evenodd'/>
                                </svg>
                                <span className='flex-1 ms-3 whitespace-nowrap'>Help Center</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            )
        }
        </>
    );
};

export default SideBar;