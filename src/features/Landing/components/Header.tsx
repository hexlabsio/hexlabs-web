import React from 'react';
import './Header-styles.sass';
import {NavHashLink as NavLink} from 'react-router-hash-link';

export interface HeaderProps {
    showStickyHeader: boolean;
    navigationOpen: boolean;
    toggleNavigation: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = (
    {
        showStickyHeader,
        toggleNavigation,
        navigationOpen
    }: HeaderProps): JSX.Element =>
    <header className={showStickyHeader ? 'sticky' : ''}>
        <div className="container">
            <div className="title">
                <NavLink className="brand" smooth to="#introduction">
                    <div>
                        <i className="icon-hexlabs-logo"/>
                    </div>
                    <div className="name">HexLabs</div>
                </NavLink>
                <div className="menu" onClick={toggleNavigation}>
                    <i className="fa fa-bars"/>
                </div>
            </div>
            <div
                className={'navigation' + (navigationOpen ? '' : ' closed')}
            >
                <div className="links">
                    <NavLink
                        to="#introduction"
                        smooth
                        isActive={() =>
                            window.location.hash === '#introduction'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="#services"
                        smooth
                        isActive={() =>
                            window.location.hash === '#services'
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="#about"
                        smooth
                        isActive={() => window.location.hash === '#about'}
                    >
                        About
                    </NavLink>
                </div>
                <NavLink className="action" smooth to="#contact">
                    Contact us
                </NavLink>
            </div>
        </div>
    </header>;

export default Header