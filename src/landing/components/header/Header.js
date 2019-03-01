import React from 'react';
import './styles.sass';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default props => {
    const { stickyHeader, navigationOpen, handleToggleNavigation } = props;
    return (
        <header className={stickyHeader ? 'sticky' : ''}>
            <div className="container">
                <div className="title">
                    <NavLink className="brand" smooth to="#introduction">
                        <div>
                            <i className="icon-codeaim-logo" />
                        </div>
                        <div className="name">CodeAim</div>
                    </NavLink>
                    <div className="menu" onClick={handleToggleNavigation}>
                        <i className="fa fa-bars" />
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
        </header>
    );
};
