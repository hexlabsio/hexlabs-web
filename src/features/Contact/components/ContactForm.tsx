import * as React from 'react';
import './Footer-styles.sass';

export interface ContactFormProps {
}

const contactForm: React.FunctionComponent<ContactFormProps> = ({}: ContactFormProps): JSX.Element => (
    <div className="contact-form">
        <div className="detail">
            <input placeholder="Your Name:"/>
            <input placeholder="Telephone:"/>
            <input placeholder="Email:"/>
        </div>
        <div className="message">
            <textarea
                placeholder="Message:"
                name="message"
                rows={8}
            />
        </div>
        <div className="action">Submit message</div>
    </div>
);

export default contactForm;
