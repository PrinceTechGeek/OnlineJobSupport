import React, { useState, useMemo, useCallback } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Typography, Alert,
} from '@mui/material';
import type { JobApplicantionForm } from '#domain/Obudle/JobApplicationForm';

type JobApplicationFormProps = {
  open: boolean;
  handleClose: () => void;
  handleSubmit: (formData: any) => void;
};

const JobApplicationForm = ({ open, handleClose, handleSubmit }: JobApplicationFormProps) => {
  const [applicantForm, setApplicantForm] = useState<JobApplicantionForm>({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null,
    coverLetter: '',
    message: '',
  });

  const [resumeError, setResumeError] = useState<string>('');
  const [formError, setFormError] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setApplicantForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleResumeUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type !== 'application/pdf') {
      setResumeError('Please upload your resume in PDF format only.');
      setApplicantForm((prevState) => ({
        ...prevState,
        resume: null,
      }));
    } else {
      setResumeError('');
      setApplicantForm((prevState) => ({
        ...prevState,
        resume: file,
      }));
    }
  }, []);

  const errorMessage = useMemo(() => formError, [formError]);
  const resumeErrorMessage = useMemo(() => resumeError, [resumeError]);

  const onSubmit = () => {
    if (!applicantForm.fullName || !applicantForm.email || !applicantForm.phone) {
      setFormError('Please fill in all required fields.');
      return;
    }

    if (!applicantForm.resume) {
      setFormError('Please upload a valid resume (PDF).');
      return;
    }

    setFormError('');
    handleSubmit(applicantForm);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" sx={{ borderRadius: '10px' }} fullWidth>
      <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
        Apply for Software Developer Position
      </DialogTitle>

      <DialogContent sx={{ padding: '20px' }}>
        <Typography variant="body2" color="textSecondary" margin={1} marginBottom={2} gutterBottom>
          Please fill out the form below to submit your application.
          We accept resumes in PDF format only.
        </Typography>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="fullName"
              label="Full Name"
              variant="outlined"
              fullWidth
              required
              value={applicantForm.fullName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={applicantForm.email}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              value={applicantForm.phone}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="linkedin"
              label="LinkedIn Profile"
              variant="outlined"
              fullWidth
              value={applicantForm.linkedin}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{
                marginBottom: '10px',
                marginTop: '10px',
                backgroundColor: '#075985',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#063c52',
                },
                fontWeight: 'bold',
                borderRadius: '8px',
                padding: '10px',
              }}
            >
              Upload Resume (PDF only)
              <input
                type="file"
                hidden
                onChange={handleResumeUpload}
                required
              />
            </Button>
            {resumeErrorMessage
            && (
              <Typography color="error" variant="body2">
                {resumeErrorMessage}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="coverLetter"
              label="Cover Letter"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={applicantForm.coverLetter}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="message"
              label="Tell us About Yourself"
              variant="outlined"
              fullWidth
              multiline
              required
              rows={4}
              value={applicantForm.message}
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
          Submit Application
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobApplicationForm;
