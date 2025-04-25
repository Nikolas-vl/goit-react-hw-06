import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const contact = {
      ...values,
      id: nanoid(),
    };

    onAddContact(contact);
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string()
      .matches(/^[\d\s\-()+]+$/, 'Must be a number')
      .min(5, 'Too Short Number')
      .max(20, 'Too Long Number')
      .required('Required'),
  });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type='text' name='name' id={nameFieldId}></Field>
        <ErrorMessage className={s.error} name='name' component='span' />
        <label htmlFor={numberFieldId}>Phone</label>
        <Field type='text' name='number' id={numberFieldId}></Field>
        <ErrorMessage className={s.error} name='number' component='span' />
        <button className={s.btn} type='submit'>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
