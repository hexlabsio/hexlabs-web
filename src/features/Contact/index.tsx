import * as React from 'react';
import { RootState } from '../../index-state';
import { connect } from 'react-redux';
import { IndexState } from './index-state';
import ContactForm from './components/ContactForm';
import './index-styles.sass';

interface ActionProps {
}

export interface Props extends IndexState, ActionProps {
}

class Index extends React.Component<Props> {
  public render(): React.ReactNode {
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
                    <ContactForm />
                </div>
            </div>
    );
  }
}

export const mapStateToProps: (state: RootState) => IndexState = state => ({
  ...state.contact,
});

const mapDispatchToProps: ActionProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Index);
