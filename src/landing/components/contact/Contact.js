import React from 'react';
import './styles.sass';

export default props => {
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="prose">
                    <div className="statement">Get in Touch</div>
                    <div className="core">
                        We are available 24/7 by e-mail and phone. You can also
                        ask a question about our services through our contact
                        form.
                    </div>
                </div>
                <div className="form">
                    <div className="detail">
                        <input placeholder="Your Name:" />
                        <input placeholder="Telephone:" />
                        <input placeholder="Email:" />
                    </div>
                    <div className="message">
                        <textarea
                            placeholder="Message:"
                            name="message"
                            rows="8"
                        />
                    </div>
                    <div className="action">Submit message</div>
                </div>
            </div>
        </div>
    );
};
