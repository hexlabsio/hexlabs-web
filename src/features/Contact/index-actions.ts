import { ContactFormData, ContactFormProps } from './components/ContactForm';

export const SUBMIT_CONTACT_FORM_REQUEST = '@@Contact/SUBMIT_CONTACT_FORM_REQUEST';

export type SUBMIT_CONTACT_FORM_REQUEST = { type: typeof SUBMIT_CONTACT_FORM_REQUEST; values: ContactFormData, props: ContactFormProps};

export const submitContactForm: (values: ContactFormData, {}, props: ContactFormProps) => SUBMIT_CONTACT_FORM_REQUEST = (values: ContactFormData, {}, props: ContactFormProps) => {
  return { values, props, type: SUBMIT_CONTACT_FORM_REQUEST };
};

export type ACTIONS = SUBMIT_CONTACT_FORM_REQUEST;
