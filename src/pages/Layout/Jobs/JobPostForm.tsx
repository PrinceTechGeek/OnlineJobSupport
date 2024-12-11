import React, { useState, useCallback, useMemo } from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Grid, Typography, Alert,
} from '@mui/material';

interface JobPostFormProps {
  open: boolean;
  handleClose: () => void;
}

const JobPostForm = ({ open, handleClose }: JobPostFormProps) => {
  const [jobForm, setJobForm] = useState({
    jobTitle: '',
    companyName: '',
    experience: '',
    location: '',
    jobDescription: '',
    responsibilities: '',
    salaryRange: '',
    jobType: '',
    aboutCompany: '',
    skills: [],
    qualification: '',
  });

  const [formError, setFormError] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const errorMessage = useMemo(() => formError, [formError]);

  const onSubmit = () => {
    if (!jobForm.jobTitle || !jobForm.companyName || !jobForm.location || !jobForm.jobDescription) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setFormError('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" sx={{ borderRadius: '10px' }} fullWidth>
      <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
        Post a New Job
      </DialogTitle>

      <DialogContent sx={{ padding: '20px' }}>
        <Typography variant="body2" color="textSecondary" margin={1} marginBottom={2} gutterBottom>
          Please fill out the form below to post a new job.
        </Typography>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="jobTitle"
              label="Job Role"
              variant="outlined"
              fullWidth
              required
              value={jobForm.jobTitle}
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
              value={jobForm.companyName}
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
              value={jobForm.experience}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="jobType"
              label="Job Type"
              variant="outlined"
              fullWidth
              value={jobForm.jobType}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="salaryRange"
              label="Salary Range"
              variant="outlined"
              fullWidth
              value={jobForm.salaryRange}
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
              value={jobForm.location}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="jobDescription"
              label="Job Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={jobForm.jobDescription}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="responsibilities"
              label="Responsibilities"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={jobForm.responsibilities}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="skills"
              label="Skills"
              variant="outlined"
              fullWidth
              value={jobForm.skills}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="qualification"
              label="Qualification"
              variant="outlined"
              fullWidth
              value={jobForm.qualification}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="aboutCompany"
              label="About the Company"
              variant="outlined"
              fullWidth
              value={jobForm.aboutCompany}
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

export default JobPostForm;
