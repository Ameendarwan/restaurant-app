import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { FormValues } from './ContactForm.types';
import React from 'react';
import { validationSchema } from './ContactForm.utils';
import { yupResolver } from '@hookform/resolvers/yup';

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form Data:', data);
  };

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      padding: 0,
      margin: 0,
    },
    '& .MuiOutlinedInput-input': {
      backgroundColor: 'white',
      border: '1px solid #CED4DA',
      borderRadius: '2px',
    },
  };
  return (
    <div className="flex h-full w-full justify-start bg-white text-white">
      <div className="h-full w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row flex-wrap gap-4">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Your Name"
                    fullWidth
                    className="md:flex-1"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={inputStyle}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="md:flex-1"
                    label="Your Email"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={inputStyle}
                  />
                )}
              />
            </div>

            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Subject"
                  fullWidth
                  className="md:flex-1"
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
                  sx={inputStyle}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  fullWidth
                  className="bg-none"
                  multiline
                  rows={5}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  sx={inputStyle}
                />
              )}
            />
          </div>
          <Button type="submit" variant="contained" size="large" fullWidth className="!mt-3 !uppercase">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
