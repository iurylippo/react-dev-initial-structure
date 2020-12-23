import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar as NavigationBar, Nav, NavItem, NavLink, Button } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

import items from './items';
import styles from './styles.module.scss';
import { logoutRequest } from '../../store/modules/auth/actions';
import Loading from '../Loading';
import { StoreState } from '../../store/createStore';

export function withNavBar<P>(WrappedComponent: React.ComponentType<P>) {
    const ComponentWithExtraInfo = (props: P) => {
        return (
            <>
                <Navbar />
                <WrappedComponent {...props} />
            </>
        );
    };
    return ComponentWithExtraInfo;
}

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const dispacth = useDispatch();
    const { loadingSigninRequest } = useSelector((state: StoreState) => state.auth);

    const handleShowSidebar = () => setSidebar(!sidebar);

    const handleLogout = () => {
        dispacth(logoutRequest());
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <NavigationBar className={styles.nav_bar}>
                    <NavLink to="/#" className={styles.menu_bars}>
                        <FaIcons.FaBars onClick={handleShowSidebar} />
                    </NavLink>
                    <Button onClick={handleLogout}>Logout</Button>
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
                <Loading loading={loadingSigninRequest} />
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
