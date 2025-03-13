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

  return (
    <div className="flex h-full w-full items-center justify-start bg-white text-white">
      <div className="h-full w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row flex-wrap gap-4">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Your Name"
                  margin="normal"
                  fullWidth
                  className="md:flex-1"
                  error={!!errors.name}
                  helperText={errors.name?.message}
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
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email?.message}
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
                margin="normal"
                fullWidth
                className="md:flex-1"
                error={!!errors.subject}
                helperText={errors.subject?.message}
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
                margin="normal"
                multiline
                rows={3}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />
          <Button type="submit" variant="contained" fullWidth className="!mt-2 uppercase">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
