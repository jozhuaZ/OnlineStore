import { useState } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import SideBar from "./AsidePanel";
import HeaderNav from "./HeaderNav";

const HeaderSideBar = () => {
    const [openMenu, setOpenMenu] = useState(true);

    return (
        <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
            <HeaderNav />
            <SideBar />
        </MenuContext.Provider>
    );
}

export default HeaderSideBar;