import React, { useState, useCallback } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Alert,
  Paper,
  Box,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { ApplicationIdeaPostForm } from '#domain/Obudle/ApplicationIdeaPostForm';

const ApplicationIdeaForm = () => {
  const navigate = useNavigate();

  const [ideaForm, setIdeaForm] = useState<ApplicationIdeaPostForm>({
    title: '',
    description: '',
    tags: [],
    details: '',
    features: '',
    architectureType: '',
    contactInfo: '',
    companyProfile: '',
    appType: '',
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

  const handleTagsChange = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const newTag = e.currentTarget.value.trim();
        if (newTag && !ideaForm.tags.includes(newTag)) {
          setIdeaForm((prevState) => ({
            ...prevState,
            tags: [...prevState.tags, newTag],
          }));
        }
        e.currentTarget.value = '';
      }
    },
    [ideaForm.tags],
  );

  const removeTag = useCallback(
    (tag: string) => {
      setIdeaForm((prevState) => ({
        ...prevState,
        tags: prevState.tags.filter((t) => t !== tag),
      }));
    },
    [],
  );

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && ![
      'application/pdf',
      'application/vnd.ms-powerpoint',
      'application/msword'].includes(file.type)) {
      setImageError('Please upload an architecture in PDF, PPT, or WORD document format only.');
      setIdeaForm((prevState) => ({
        ...prevState,
        image: null,
      }));
    } else if (file) {
      setImageError('');
      setIdeaForm((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  }, []);

  const onSubmit = useCallback(() => {
    if (!ideaForm.title || !ideaForm.description
      || !ideaForm.details || !ideaForm.architectureType) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setFormError('');
  }, [ideaForm]);

  const handleCancel = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Box sx={{
      maxWidth: '800px',
      margin: 'auto',
      padding: 4,
      marginTop: 10,
    }}
    >
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#075985',
            textAlign: 'center',
            marginBottom: 3,
          }}
        >
          Share Your Application Idea
        </Typography>

        {formError && <Alert severity="error" sx={{ marginBottom: 2 }}>{formError}</Alert>}

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
              name="details"
              label="Details"
              variant="outlined"
              fullWidth
              required
              value={ideaForm.details}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="features"
              label="Features (comma-separated)"
              variant="outlined"
              fullWidth
              value={ideaForm.features}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="architectureType"
              label="Architecture Type"
              variant="outlined"
              fullWidth
              required
              value={ideaForm.architectureType}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="contactInfo"
              label="Contact Information"
              variant="outlined"
              fullWidth
              value={ideaForm.contactInfo}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="companyProfile"
              label="Company Profile"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={ideaForm.companyProfile}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="appType"
              label="Application Type (e.g., Mobile, Web)"
              variant="outlined"
              fullWidth
              value={ideaForm.appType}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Tags"
              variant="outlined"
              fullWidth
              placeholder="Add a tag and press Enter"
              onKeyDown={handleTagsChange}
            />
            <Box sx={{
              marginTop: 1,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
            }}
            >
              {ideaForm.tags.map((tag) => (
                <Chip key={tag} label={tag} onDelete={() => removeTag(tag)} />
              ))}
            </Box>
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

        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Button
            variant="outlined"
            sx={{
              color: '#075985',
              fontWeight: 'bold',
              marginRight: 2,
            }}
            onClick={handleCancel}
          >
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
        </Box>
      </Paper>
    </Box>
  );
};

export default ApplicationIdeaForm;
