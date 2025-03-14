import { Button, MenuItem, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { FormValues } from '../../Reservation.types';
import SectionHeader from '@app/components/SectionHeader';
import SnackbarAlert from '@app/components/SnackbarAlert';
import { useState } from 'react';
import { validationSchema } from '../../Reservation.utils';
import { yupResolver } from '@hookform/resolvers/yup';

const ReservationForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      date: '',
      people: 1,
      specialRequest: '',
    },
  });

  const [open, setOpen] = useState(false);

  const handleSucess = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (_data: FormValues) => {
    reset();

    handleSucess();
  };

  const inputStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
    },
  };
  return (
    <div className="flex h-auto w-full items-center justify-start bg-text p-6 text-white md:px-8 lg:w-1/2">
      <div className="h-full w-full py-16 lg:max-w-[80%]">
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
                  sx={inputStyle}
                  variant="outlined"
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
                  sx={inputStyle}
                  variant="outlined"
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
                  sx={inputStyle}
                  variant="outlined"
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
                  helperText={errors.people?.message}
                  sx={inputStyle}
                  variant="outlined">
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
                sx={inputStyle}
                variant="outlined"
              />
            )}
          />
          <Button type="submit" variant="contained" size="large" fullWidth className="!mt-2 uppercase">
            Book Now
          </Button>
          {/* Success Alert */}
          <SnackbarAlert open={open} message="Booking confirmed!" onClose={handleClose} />
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
