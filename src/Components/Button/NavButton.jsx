
export const NavButton = ({ title, className = '', ...rest }) => {

    return (
        // NAVIGATE TO ANOTHER PAGE
        <button
            className={`${className} bg-linear-to-br px-5 py-2.5 cursor-pointer shadow-md/35 hover:scale-[1.03] duration-300 ease-in-out rounded-lg text-sm font-medium text-center me-2 mb-2`}
            {...rest}
        >
            <p className='font-poppins text-[18px]'>{title}</p>        
        </button>
    );
};

export const ClassicButton = ({ className = '', text, ...rest }) => {
    return (
        <button
            className={`${className} cursor-pointer duration-300 ease-in-out`}
            {...rest}
        >
            <p className='font-poppins text-[16px]'>{text}</p>    
        </button>
    );
};