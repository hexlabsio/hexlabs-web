import * as React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './Header-styles.sass';
import { TOGGLE_NAVIGATION } from '../index-actions';

export interface HeaderProps {
  showStickyHeader: boolean;
  navigationOpen: boolean;
  toggleNavigation: () => TOGGLE_NAVIGATION;
}

const header = (
    {
        showStickyHeader,
        toggleNavigation,
        navigationOpen,
    }: HeaderProps) => (
    <header className={showStickyHeader ? 'sticky' : ''}>
        <div className="container">
            <div className="title">
                <NavLink className="brand" smooth={true} to="#introduction">
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
                className={`navigation ${navigationOpen ? '' : ' closed'}`}
            >
                <div className="links">
                    <NavLink
                        to="#introduction"
                        smooth={true}
                        isActive={() => window.location.hash === '#introduction'}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="#services"
                        smooth={true}
                        isActive={() => window.location.hash === '#services'}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="#about"
                        smooth={true}
                        isActive={() => window.location.hash === '#about'}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="#projects"
                        smooth={true}
                        isActive={() => window.location.hash === '#projects'}
                    >
                        Projects
                    </NavLink>
                </div>
                <NavLink className="action" smooth={true} to="#contact">
                    Contact us
                </NavLink>
            </div>
        </div>
    </header>
);

export default header;
