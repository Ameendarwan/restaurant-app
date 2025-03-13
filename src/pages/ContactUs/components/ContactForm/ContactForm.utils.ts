import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s-]+$/, 'Only alphabets, spaces, and hyphens are allowed')
    .max(50, 'Maximum 50 characters allowed')
    .required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  subject: yup
    .string()
    .matches(/^[A-Za-z\s-]+$/, 'Only alphabets, spaces, and hyphens are allowed')
    .max(100, 'Maximum 100 characters allowed')
    .required('Subject is required'),
  message: yup
    .string()
    .matches(/^[A-Za-z\s-]*$/, 'Only alphabets, spaces, and hyphens are allowed')
    .max(250, 'Maximum 250 characters allowed'),
});
