import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import * as React from 'react';
import { default as initialState } from '../index-state';
import './ContactForm-styles.sass';

export interface ContactFormData {
  name: string;
  telephone: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  submitContactForm: (values: ContactFormData, {}, props: ContactFormProps) => void;
}

const contactForm: React.FunctionComponent<ContactFormProps & InjectedFormProps<ContactFormData, ContactFormProps>> = ({
   handleSubmit,
   submitContactForm,
   pristine,
   submitting,
}) => (
  <form className="contact-form" onSubmit={handleSubmit(submitContactForm)}>
    <div className="detail">
      <Field name="name" component="input" placeholder="Your Name:" type="text" />
      <Field name="telephone" component="input" placeholder="Telephone:" type="text" />
      <Field name="email" component="input" placeholder="Email:" type="text" />
    </div>
    <div className="message">
      <Field name="message" component="textarea" rows={8} placeholder="Message:" type="text" />
    </div>
    <button className="action" type="submit" disabled={pristine || submitting}>Submit message</button>
  </form>
);

export default reduxForm<ContactFormData, ContactFormProps>({
  form: 'contact',
  initialValues: initialState,
})(contactForm);
