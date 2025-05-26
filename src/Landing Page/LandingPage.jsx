import store_card_image from '../assets/LandingPage/store_card.jpg';
import HeaderNav from "../Header Navigation/HeaderNav";
import MaxWidthCard from '../Components/MaxWidthCard/MaxWidthCard';
import { NavButton } from "../Components/Button/NavButton";
import { Star } from '../Components/StarRating/Star';
import FooterNav from '../Footer Navigation/FooterNav';
import { useNavigate } from 'react-router-dom';

export default function LandingPage () {
    const navigate = useNavigate();

    return (
        <div className='h-full bg-linear-to-b from-blue-900 to-blue-100'>
            <HeaderNav />

            <main>
                {/* CONTAINER TO HOLD GREETING AND BUTTONS */}
                <div className='flex items-center justify-evenly mt-10 sm:mt-15 flex-col-reverse gap-5 sm:flex-row-reverse'>
                    {/* LOGIN AND SIGN-UP BUTTON */}
                    <section className='sm:flex sm:items-center sm:gap-5'>
                        <NavButton title='Login' color='pink-to-orange' 
                            onClick={() => {navigate('/LoginPage/LoginPage')}} 
                        />
                        <NavButton title='Sign Up' color='teal-to-lime' />
                    </section>

                    {/* GREETING TEXT */}
                    <section className='font-montserrat sm:flex sm:items-end sm:gap-6 text-white'>
                        <h2 className='font-bold sm:text-7xl text-5xl text-shadow-lg/50'>
                            Welcome!
                        </h2>
                        <p className="uppercase sm:text-2xl font-medium text-shadow-md/50">
                            To the most trusted store.
                        </p>
                    </section>

                </div>  

                {/* ABOUT THE WEBSITE CONTAINER */}
                <MaxWidthCard className='sm:flex sm:justify-evenly sm:items-center justify-center sm:gap-6'>
                    {/* SHORT INFO OF THE WEBSITE CONTAINER */}
                    <div className='flex-center flex-col gap-6 sm:gap-10 py-5 sm:max-w-[50%] relative font-poppins'>
                        <p className='sm:text-justify sm:text-xl/relaxed text-[18px]'>
                            We are your go-to destination for safe, seamless, and reliable online shopping. With a wide 
                            selection of authentic products, secure payment options, fast delivery, and 24/7 customer 
                            support, Our Store has earned the trust of millions worldwide. Whether you're shopping for 
                            electronics, fashion, or daily essentials, We guarantee a quality and satisfaction—every time.
                        </p>
                        <NavButton title='Shop Now!' />
                    </div>

                    {/* IMAGE CONTAINER  */}
                    <div className='hidden sm:block'>
                        <img
                            className='rounded-2xl'
                            src={store_card_image}
                            alt='Store Image'
                        />
                    </div>
                </MaxWidthCard>
                
                {/* HUGE DISCOUNT CONTAINER */}
                <MaxWidthCard className='flex flex-col py-8 sm:py-12'>
                        <h1 className='text-center mb-4 text-4xl font-poppins font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
                            Huge Discounts up to
                            <span className='text-5xl sm:text-6xl text-blue-600 dark:text-blue-500'><br/> 30% OFF!<br /></span> on various items
                        </h1>
                        <p className='font-poppins sm:text-center text-left text-xl'>
                            <span className='text-2xl'>🎉 Big Savings Alert!🎉</span><br />
                            Enjoy a massive 30% OFF on a wide range of items — from fashion and electronics to home 
                            essentials! Don't miss your chance to grab your favorites at unbeatable prices. Hurry, 
                            while stocks last!
                        </p>
                </MaxWidthCard>

                {/* RATINGS CONTAINER */}
                <MaxWidthCard className='flex flex-col sm:gap-3.5'>
                    {/* STARS CONTAINER */}
                    <div className='flex justify-center items-center sm:gap-6 py-6 sm:py-4'>
                        <Star className='sm:w-21 sm:h-21 w-13 h-13 text-yellow-300'/>
                        <Star className='sm:w-21 sm:h-21 w-13 h-13 text-yellow-300'/>
                        <Star className='sm:w-21 sm:h-21 w-13 h-13 text-yellow-300'/>
                        <Star className='sm:w-21 sm:h-21 w-13 h-13 text-yellow-300'/>
                        <Star className='sm:w-21 sm:h-21 w-13 h-13 text-yellow-300'/>
                    </div>
                    <p className='font-poppins text-2xl text-center'>🥇Top-Rated by Customers!🥇</p>
                    <p className='font-poppins sm:text-center text-xl pb-7 sm:pb-0'>
                        Our products consistently earn high ratings for quality, value, and satisfaction. 
                        Shop with confidence — trusted by thousands of happy customers!
                    </p>
                </MaxWidthCard>

                <FooterNav />
            </main>
        </div>
    );
};