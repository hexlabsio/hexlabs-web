import { ContactFormData, ContactFormProps } from './components/ContactForm';

export const SUBMIT_CONTACT_FORM_REQUEST = '@@Contact/SUBMIT_CONTACT_FORM_REQUEST';
export const SUBMIT_CONTACT_FORM_SUCCESS = '@@orders/SUBMIT_CONTACT_FORM_SUCCESS';
export const SUBMIT_CONTACT_FORM_ERROR = '@@orders/SUBMIT_CONTACT_FORM_ERROR';

export type SUBMIT_CONTACT_FORM_REQUEST = { type: typeof SUBMIT_CONTACT_FORM_REQUEST; contact: ContactFormData, props: ContactFormProps};
export type SUBMIT_CONTACT_FORM_SUCCESS = { type: typeof SUBMIT_CONTACT_FORM_SUCCESS };
export type SUBMIT_CONTACT_FORM_ERROR = { type: typeof SUBMIT_CONTACT_FORM_ERROR };

export const submitContactForm: (contact: ContactFormData, {}, props: ContactFormProps) => SUBMIT_CONTACT_FORM_REQUEST = (contact: ContactFormData, {}, props: ContactFormProps) => {
  return { contact, props, type: SUBMIT_CONTACT_FORM_REQUEST };
};

export type ACTIONS = SUBMIT_CONTACT_FORM_REQUEST | SUBMIT_CONTACT_FORM_SUCCESS | SUBMIT_CONTACT_FORM_ERROR;
