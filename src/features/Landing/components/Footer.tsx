import React from 'react';
import './Footer-styles.sass';

export interface FooterProps {
}

const Footer: React.FunctionComponent<FooterProps> = ({}: FooterProps): JSX.Element =>
    <footer>
        <div className="details">
            <div className="detail">
                <div className="type">
                    <span>Phone</span>
                </div>
                <div className="value">(+44) 07592 799635</div>
            </div>
            <div className="detail">
                <div className="type">
                    <span>Email</span>
                </div>
                <div className="value">admin@hexlabs.io</div>
            </div>
            <div className="detail">
                <div className="type">
                    <span>Location</span>
                </div>
                <div className="value">
                    30 Owenvarragh Park, Belfast, BT11 9BD
                </div>
            </div>
        </div>
        <div className="social">
            <div className="links">
                <i className="fab fa-twitter"/>
                <i className="fab fa-linkedin"/>
            </div>
        </div>
        <div className="copyright">© 2019 HexLabs Limited</div>
    </footer>;

export default Footer
