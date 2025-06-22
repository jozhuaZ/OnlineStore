
const ItemCard = ({ children, image }) => {
    return (
        <a 
            href='#' 
            className='bg-[#f5f5f5] rounded-lg shadow-md p-10'
        >
            <img
                className='w-[250px]'
                src={image}
                alt='Photo of Product'
            />
            {children}
        </a>
    );
};

export default ItemCard;