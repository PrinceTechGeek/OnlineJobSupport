import React, { useState, useMemo, useCallback } from 'react';
import {
  Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Grid, Typography, Alert,
} from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { map } from 'lodash/fp';
import type { CourseForm } from '#domain/Obudle/CourseForm';

type CoursePostFormProps = {
  open: boolean;
  handleClose: () => void;
};

const CoursePostForm = ({ open, handleClose }: CoursePostFormProps) => {
  const [courseForm, setCourseForm] = useState<CourseForm>({
    title: '',
    instructors: [''],
    category: '',
    description: '',
    rating: 0,
    learners: '',
    image: null,
    nextSessionDate: null,
    nextSessionTime: '',
    selfPacedPrice: 0,
    selfPacedDescription: '',
    technologies: [],
    curriculum: [],
  });

  const [formError, setFormError] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  const today = useMemo(() => new Date(), []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement
  | { name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement;
    let newValue: string | string[] = value;

    if (name === 'instructors' || name === 'technologies' || name === 'curriculum') {
      newValue = map((item: string) => item.trim(), (value as string).split(','));
    }

    setCourseForm((prevState) => ({
      ...prevState,
      [name as string]: newValue,
    }));
  }, []);

  const handleDateChange = useCallback((date: Date | null) => {
    setCourseForm((prevState) => ({
      ...prevState,
      nextSessionDate: date,
    }));
  }, []);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file && !['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
      setImageError('Please upload your image in png/jpg/jpeg format only.');
      setCourseForm((prevState) => ({
        ...prevState,
        image: null,
      }));
    } else {
      setImageError('');
      setCourseForm((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  }, []);

  const onSubmit = useCallback(() => {
    if (!courseForm.title || !courseForm.instructors.length
        || !courseForm.category || !courseForm.description || !courseForm.image) {
      setFormError('Please fill in all required fields.');
      return;
    }

    setFormError('');
    handleClose();
  }, [courseForm, handleClose]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: 600, color: '#075985' }}>
        Post a Course
      </DialogTitle>

      <DialogContent sx={{ padding: '20px' }}>
        <Typography variant="body2" color="textSecondary" marginBottom={2} gutterBottom>
          Please fill out the form below to post a new course.
        </Typography>

        {formError && <Alert severity="error">{formError}</Alert>}

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="title"
              label="Course Title"
              variant="outlined"
              fullWidth
              required
              value={courseForm.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="instructors"
              label="Instructor(s)"
              variant="outlined"
              fullWidth
              required
              value={courseForm.instructors.join(', ')}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="description"
              label="Course Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              value={courseForm.description}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="rating"
              label="Rating"
              variant="outlined"
              fullWidth
              inputProps={{ min: 1, max: 5 }}
              type="number"
              value={courseForm.rating}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="learners"
              label="Number of Learners"
              variant="outlined"
              fullWidth
              value={courseForm.learners}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="category"
              label="Category (e.g. Web Development, Data Science)"
              variant="outlined"
              fullWidth
              value={courseForm.category}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="technologies"
              label="Technologies/Skills Learned"
              variant="outlined"
              fullWidth
              value={courseForm.technologies.join(', ')}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="curriculum"
              label="Course Curriculum"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={courseForm.curriculum.join(', ')}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Select Date and Time"
                value={courseForm.nextSessionDate}
                onChange={handleDateChange}
                minDate={today}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              name="selfPacedPrice"
              label="Self-paced Learning Price"
              variant="outlined"
              type="number"
              fullWidth
              value={courseForm.selfPacedPrice}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="selfPacedDescription"
              label="Self-paced Learning Description"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={courseForm.selfPacedDescription}
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
                backgroundColor: '#075985',
                color: 'white',
                '&:hover': { backgroundColor: '#063c52' },
                fontWeight: 'bold',
                borderRadius: '8px',
              }}
            >
              Upload Course Thumbnail
              <input
                type="file"
                hidden
                onChange={handleImageUpload}
                required
              />
            </Button>
            {imageError && <Typography color="error" variant="body2">{imageError}</Typography>}
            {courseForm.image && (
              <Typography variant="body2" mt={1}>
                Attached:
                {' '}
                <strong>{courseForm.image.name}</strong>
              </Typography>
            )}
          </Grid>

        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit} sx={{ backgroundColor: '#075985', color: 'white' }}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CoursePostForm;
