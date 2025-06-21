import HeaderSideBar from '../HeaderSidebar/HeaderSideBar';
import FooterNav from '../Footer Navigation/FooterNav';
import SearchBar from '../Components/SearchBar/SearchBar';
import MaxWidthCard from '../Components/MaxWidthCard/MaxWidthCard';
import ItemScrollX from '../Components/StorePage/ItemScrollX';

export default function StorePage () {

    return (
        <section className='h-screen'>
            <HeaderSideBar />

            {/* SEARCH BAR */}
            <div className='max-w-md m-3 mx-auto sm:right-0 sm:fixed sm:m-6'>
                <SearchBar />
            </div>

            {/* BANNER */}
            <MaxWidthCard className='bg-[url(/assets/banner.jpg)] bg-cover bg-center h-full' />

            {/* ITEMS */}
            <ItemScrollX />

            <FooterNav />
        </section>
    );
};