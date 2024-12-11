import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

type CourseDialogProps = {
  open: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dialogTitle: string,
};

const EnrollDialog = ({
  open,
  onClose,
  formData,
  onInputChange,
  dialogTitle,
}: CourseDialogProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth="xs"
    fullWidth
    sx={{
      borderRadius: '10px',
    }}
  >
    <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
      {dialogTitle}
    </DialogTitle>

    <DialogContent sx={{ padding: '20px' }}>
      <Typography
        variant="body2"
        color="textSecondary"
        margin={1}
        marginBottom={2}
        gutterBottom
      >
        Please fill out this form.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={onInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
            value={formData.phoneNumber}
            onChange={onInputChange}
          />
        </Grid>
      </Grid>
    </DialogContent>

    <DialogActions sx={{ paddingBottom: 3, paddingRight: 2 }}>
      <Button
        onClick={onClose}
        sx={{
          color: '#075985',
          fontWeight: 'bold',
        }}
      >
        Cancel
      </Button>
      <Button
        sx={{
          backgroundColor: '#075985',
          color: '#fff',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#063c52',
          },
        }}
      >
        Enroll Now
      </Button>
    </DialogActions>
  </Dialog>
);

export default EnrollDialog;
