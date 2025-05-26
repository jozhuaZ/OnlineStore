
export default function MaxWidthCard ({ children, className = '', ...rest }) {
    return (
        <div className={`max-w-full bg-[#f5f5f5] 
                    mx-5 my-9 sm:mx-9 sm:my-16 rounded-2xl shadow-2xl px-5 sm:py-5  ${className}`} {...rest}>
            { children }
        </div>
    );
};