import { Alert, Snackbar } from '@mui/material';

import { FC } from 'react';
import { SnackbarAlertProps } from './SnackbarAlert.types';

const SnackbarAlert: FC<SnackbarAlertProps> = ({ open, onClose, message, severity = 'success', duration = 6000 }) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <Alert variant="filled" className="!text-white" onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
