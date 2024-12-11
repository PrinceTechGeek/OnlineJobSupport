import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Grid,
  Typography,
  Alert,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import type { MentorForm } from '#domain/Obudle/MentorForm';

type MentorRegistrationFormProps = {
  open: boolean;
  handleSubmit: (formData: any) => void;
  handleClose: () => void;
};

const MentorRegistrationForm = ({
  open, handleClose, handleSubmit,
}: MentorRegistrationFormProps) => {
  const [mentorForm, setJobForm] = useState<MentorForm>({
    name: '',
    position: '',
    email: '',
    companyName: '',
    whatsappNumber: '',
    alternativeMobileNumber: '',
    experience: '',
    skills: [],
    location: '',
    linkedIn: '',
    tellabout: '',
    availableTime: '',
    referral: false,
    profile: null,
  });

  const [formError, setFormError] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onSubmit = useCallback(() => {
    if (!mentorForm.position || !mentorForm.companyName
      || !mentorForm.location || !mentorForm.email) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    handleSubmit(mentorForm);
    handleClose();
  }, [mentorForm, handleSubmit, handleClose]);

  const handleReferralChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setJobForm((prevState) => ({
      ...prevState,
      referral: e.target.checked,
    }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const isValid = /\.(jpg|jpeg|png)$/i.test(file.name);
      if (isValid) {
        setFormError('');
        setJobForm((prevState) => ({
          ...prevState,
          profile: file,
        }));
      } else {
        setFormError('Please upload a valid image file (JPG, JPEG, or PNG)');
      }
    }
  }, []);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{ borderRadius: '10px' }} fullWidth>
      <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
        Register as a Mentor
      </DialogTitle>

      <DialogContent sx={{ padding: '20px' }}>
        <Typography variant="body2" color="textSecondary" margin={1} marginBottom={2} gutterBottom>
          Please fill out the form below to post a new job.
        </Typography>

        {formError && <Alert severity="error">{formError}</Alert>}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.name}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="position"
              label="Current Position"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.position}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="companyName"
              label="Company Name"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.companyName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="whatsappNumber"
              label="Whatsapp Number"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.whatsappNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="alternativeMobileNumber"
              label="Alternative Mobile Number"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.alternativeMobileNumber}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="experience"
              label="Experience"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.experience}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="location"
              label="Location"
              variant="outlined"
              fullWidth
              required
              value={mentorForm.location}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="skills"
              label="Skills"
              variant="outlined"
              fullWidth
              value={mentorForm.skills}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="linkedIn"
              label="LinkedIn Url"
              variant="outlined"
              fullWidth
              value={mentorForm.linkedIn}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="availableTime"
              label="Available Time"
              variant="outlined"
              fullWidth
              value={mentorForm.availableTime}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={(
                <Checkbox
                  name="referral"
                  checked={mentorForm.referral}
                  onChange={handleReferralChange}
                  color="primary"
                />
              )}
              label="Would you like to refer someone to your company"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Upload Profile Image
            </Typography>
            <Button
              variant="outlined"
              component="label"
              sx={{
                borderColor: '#075985',
                color: '#075985',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  borderColor: '#063c52',
                  backgroundColor: '#f1f5f9',
                },
              }}
            >
              Choose File
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                hidden
                onChange={handleFileChange}
              />

            </Button>
            <FormHelperText>Please upload jpg, jpeg and png format file</FormHelperText>

            {mentorForm.profile && (
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ mt: 1, fontStyle: 'italic' }}
              >
                Selected File:
                {' '}
                {mentorForm.profile?.name}
              </Typography>
            )}

          </Grid>

          <Grid item xs={12}>
            <TextField
              name="tellAbout"
              label="Tell Me about Yourself within 300 Words"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={mentorForm.tellabout}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

      </DialogContent>

      <DialogActions sx={{ paddingBottom: 3, paddingRight: 2 }}>
        <Button onClick={handleClose} sx={{ color: '#075985', fontWeight: 'bold' }}>
          Cancel
        </Button>
        <Button
          onClick={onSubmit}
          sx={{
            backgroundColor: '#075985',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#063c52',
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MentorRegistrationForm;
