import React, { useState, useCallback } from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Grid, Typography, Alert,
} from '@mui/material';
import type { ProjectForm } from '#domain/Obudle/ProjectForm';

type ProjectPostFormProps = {
  open: boolean;
  handleClose: () => void;
};

const ProjectPostForm = ({ open, handleClose }: ProjectPostFormProps) => {
  const [projectForm, setProjectForm] = useState<ProjectForm>({
    title: '',
    technologies: [],
    image: null,
    stack: '',
    fulldetails: '',
    description: '',
  });

  const [formError, setFormError] = useState<string>('');
  const [resumeError, setResumeError] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && !['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      setResumeError('Please upload your resume in png/jpg/jpeg format only.');
      setProjectForm((prevState) => ({
        ...prevState,
        image: null,
      }));
    } else {
      setResumeError('');
      setProjectForm((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  }, []);

  const onSubmit = useCallback(() => {
    if (!projectForm.title || !projectForm.technologies
        || !projectForm.stack || !projectForm.description || !projectForm.image) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setFormError('');
    handleClose();
  }, [projectForm, handleClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" sx={{ borderRadius: '10px' }} fullWidth>
      <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
        Post a Project
      </DialogTitle>

      <DialogContent sx={{ padding: '20px' }}>
        <Typography variant="body2" color="textSecondary" margin={1} marginBottom={2} gutterBottom>
          Please fill out the form below to post a new Project.
        </Typography>

        {formError && <Alert severity="error">{formError}</Alert>}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              required
              value={projectForm.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="stack"
              label="Stack (ex: Mern stack, Java Full stack)"
              variant="outlined"
              fullWidth
              required
              value={projectForm.stack}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description about Project"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={projectForm.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="technologies"
              label="Technologies Used"
              variant="outlined"
              fullWidth
              required
              value={projectForm.technologies}
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
              Upload Image
              <input
                type="file"
                hidden
                onChange={handleImageUpload}
                required
              />
            </Button>
            {resumeError && <Typography color="error" variant="body2">{resumeError}</Typography>}
            {projectForm.image && (
              <Typography variant="body2" mt={1}>
                Attached:
                {' '}
                <strong>{projectForm.image.name}</strong>
              </Typography>
            )}
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

export default ProjectPostForm;
