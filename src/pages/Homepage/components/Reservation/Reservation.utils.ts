import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z\s-]+$/, 'Only alphabets, spaces, and hyphens are allowed')
    .max(50, 'Maximum 50 characters allowed')
    .required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  date: yup
    .string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Format should be DD/MM/YYYY')
    .test('valid-month', 'Month cannot be greater than 12', value => {
      if (!value) return false; // Required field check
      const parts = value.split('/');
      if (parts.length !== 3) return false;
      const month = parseInt(parts[1], 10);
      return month >= 1 && month <= 12;
    })
    .required('Date is required'),
  people: yup.number().required('Please select number of people'),
  specialRequest: yup
    .string()
    .matches(/^[A-Za-z\s-]*$/, 'Only alphabets, spaces, and hyphens are allowed')
    .max(250, 'Maximum 250 characters allowed'),
});
