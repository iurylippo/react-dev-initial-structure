import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavigationBar, Nav, NavItem, NavLink } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

import items from './items';
import styles from './styles.module.scss';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const handleShowSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <NavigationBar className={styles.nav_bar}>
                    <NavLink to="/#" className={styles.menu_bars}>
                        <FaIcons.FaBars onClick={handleShowSidebar} />
                    </NavLink>
                </NavigationBar>
                <Nav vertical onClick={handleShowSidebar} className={`${styles.nav_menu} ${sidebar && styles.active}`}>
                    {/* <NavItem>
                        <NavLink to="/#" className={styles.menu_bars}>
                            <AiIcons.AiOutlineClose />
                        </NavLink>
                    </NavItem> */}
                    {items.map((item) => {
                        return (
                            <NavItem key={item.title} className={styles.nav_text}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </NavItem>
                        );
                    })}
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
