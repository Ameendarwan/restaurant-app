import { Button, MenuItem, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { FormValues } from './Reservation.types';
import React from 'react';
import SectionHeader from '@app/components/SectionHeader';
import reservationImage from '@app/assets/reservation/reservation.png';
import { validationSchema } from './Reservation.utils';
import { yupResolver } from '@hookform/resolvers/yup';

const Reservation = () => {
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
    <section className="flex h-full w-full flex-col items-stretch max-sm:pb-24 md:flex-row" id="reservation">
      <img src={reservationImage} alt="Reservation" className="object-cover lg:w-1/2" />
      <div className="flex h-auto w-full items-center justify-start bg-text p-6 text-white md:px-8 lg:w-1/2">
        <div className="h-full w-full py-16 md:max-w-[80%]">
          <SectionHeader title="Reservation" hideLeftDivider className="!justify-start" />
          <span className="text-[40px] font-bold">Book A Table Online</span>
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
            <div className="flex flex-row flex-wrap gap-4">
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Date & Time"
                    className="md:flex-1"
                    fullWidth
                    margin="normal"
                    error={!!errors.date}
                    helperText={errors.date?.message}
                  />
                )}
              />
              <Controller
                name="people"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="No Of People"
                    className="md:flex-1"
                    fullWidth
                    margin="normal"
                    error={!!errors.people}
                    helperText={errors.people?.message}>
                    {[1, 2, 3, 4, 5].map(num => (
                      <MenuItem key={num} value={num}>{`People ${num}`}</MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </div>
            <Controller
              name="specialRequest"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Special Request"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={3}
                  error={!!errors.specialRequest}
                  helperText={errors.specialRequest?.message}
                />
              )}
            />
            <Button type="submit" variant="contained" size="large" fullWidth className="!mt-2 uppercase">
              Book Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
