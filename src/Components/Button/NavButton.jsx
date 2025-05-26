
export const NavButton = ({ title, color, ...rest }) => {
    let colorValue = '';
    if (color === 'teal-to-lime') {
        colorValue = 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
    } else {
        colorValue = 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2';
    }

    return (
        // NAVIGATE TO ANOTHER PAGE
        <button
            className={`${colorValue} cursor-pointer shadow-md/35 hover:scale-[1.03]`}
            {...rest}
        >
            <p className='font-poppins text-[18px]'>{title}</p>        
        </button>
    );
};