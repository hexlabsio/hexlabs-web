import { Field, FormErrors, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form';
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

type InputProps =  {
  placeholder: string;
  rows: number;
} & WrappedFieldProps;

const contactForm = ({
   handleSubmit,
   submitContactForm,
   pristine,
   submitting,
   invalid,
}: ContactFormProps & InjectedFormProps<ContactFormData, ContactFormProps>) => (
  <form className="contact-form" onSubmit={handleSubmit(submitContactForm)}>
    <div className="detail">
      <Field name="name" component={renderInputField} placeholder="Your Name:" type="text" />
      <Field name="telephone" component={renderInputField} placeholder="Telephone:" type="text" />
      <Field name="email" component={renderInputField} placeholder="Email:" type="text" />
    </div>
    <div className="message">
      <Field name="message" component={renderTextAreaField} rows={8} placeholder="Message:" type="text" />
    </div>
    <button className="action" type="submit" disabled={pristine || submitting || invalid}>Submit message</button>
  </form>
);

const renderInputField = (props: InputProps) => {
  return (
    <div className="input-field">
      {props.meta.touched && props.meta.error && <div className="error">{props.meta.error}</div>}
      <input placeholder={props.placeholder} {...props.input}/>
    </div>
  );
};

const renderTextAreaField = (props: InputProps) => {
  return (
    <>
      {props.meta.touched && props.meta.error && <div className="error">{props.meta.error}</div>}
      <textarea placeholder={props.placeholder} rows={props.rows} {...props.input}/>
    </>
  );
};

const validate = (values: ContactFormData): FormErrors<ContactFormData> => {
  return {
    ...(!values.name ? { name: 'Required' } : {}),
    ...(!values.telephone ? { telephone: 'Required' } : {}),
    ...(!values.email ? { email: 'Required' } : {}),
    ...(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ? { email: 'Invalid email address' } : {}),
    ...(!values.message ? { message: 'Required' } : {}),
  };
};

export default reduxForm<ContactFormData, ContactFormProps>({
  validate,
  form: 'contact',
  initialValues: initialState,
})(contactForm);
