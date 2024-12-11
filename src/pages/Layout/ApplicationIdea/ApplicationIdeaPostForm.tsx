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
} from '@mui/material';
import type { ApplicationForm } from '#domain/Obudle/ApplicationForm';

type ApplicationIdeaFormProps = {
  open: boolean;
  handleClose: () => void;
};

const ApplicationIdeaForm = ({ open, handleClose }: ApplicationIdeaFormProps) => {
  const [ideaForm, setIdeaForm] = useState<ApplicationForm>({
    title: '',
    description: '',
    category: '',
    image: null,
  });

  const [formError, setFormError] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setIdeaForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [],
  );

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && !['pdf', 'ppt', 'doc'].includes(file.type)) {
      setImageError('Please upload an architecture in PDF/PPT/WORD Document format only.');
      setIdeaForm((prevState) => ({
        ...prevState,
        image: null,
      }));
    }
  }, []);

  const onSubmit = useCallback(() => {
    if (!ideaForm.title || !ideaForm.description || !ideaForm.category) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setFormError('');
    handleClose();
  }, [ideaForm, handleClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
        Share Your Application Idea
      </DialogTitle>

      <DialogContent sx={{ padding: '20px' }}>
        <Typography variant="body2" color="textSecondary" marginBottom={2}>
          Please provide the details below to share your application idea.
        </Typography>

        {formError && <Alert severity="error">{formError}</Alert>}

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              required
              value={ideaForm.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={ideaForm.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="category"
              label="Category (e.g., Web, Mobile, Game)"
              variant="outlined"
              fullWidth
              required
              value={ideaForm.category}
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
              Upload Architecture
              <input type="file" hidden onChange={handleImageUpload} />
            </Button>
            {imageError && <Typography color="error" variant="body2">{imageError}</Typography>}
            {ideaForm.image && (
              <Typography variant="body2" mt={1}>
                Attached:
                {' '}
                <strong>{ideaForm.image?.name}</strong>
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

export default ApplicationIdeaForm;
