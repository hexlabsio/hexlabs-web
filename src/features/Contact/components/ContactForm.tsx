import {Field, FormErrors, InjectedFormProps, reduxForm} from 'redux-form';
import * as React from 'react';
import {default as initialState} from '../index-state';
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

const validate = (values: ContactFormData): FormErrors<ContactFormData> => {
  return {
    ...(!values.name ? {name: "Required"} : {}),
    ...(!values.telephone ? {telephone: "Required"} : {}),
    ...(!values.email ? {email: "Required"} : {}),
    ...(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ? {email: "Invalid email address"} : {}),
    ...(!values.message ? {message: "Required"} : {})
  };
};

export default reduxForm<ContactFormData, ContactFormProps>({
  form: 'contact',
  initialValues: initialState,
  validate: validate
})(contactForm);
