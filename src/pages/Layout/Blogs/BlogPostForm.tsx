import React, { useState, useCallback } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Alert,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  Box,
  Avatar,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import type { BlogForm } from '#domain/Obudle/BlogForm';
import ServiceCard from '../../../Components/ServiceCard';

const BlogPostForm = () => {
  const [blogForm, setBlogForm] = useState<BlogForm>({
    title: '',
    author: '',
    content: '',
    tags: [],
    category: '',
    images: [],
    publishDate: new Date(),
  });

  const [formError, setFormError] = useState<string>('');
  const [imageError, setImageError] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement
  | { name?: string; value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement;

    setBlogForm((prevState) => ({
      ...prevState,
      [name as string]: name === 'tags'
        ? (value as string).split(',').map((tag) => tag.trim())
        : value,
    }));
  }, []);

  const handleSelectChange = useCallback((e: SelectChangeEvent<string>) => {
    setBlogForm((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  }, []);

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const validFiles = files.filter(
      (file) => ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type),
    );
    if (validFiles.length !== files.length) {
      setImageError('Please upload images in png/jpg/jpeg format only.');
    } else {
      setImageError('');
      setBlogForm((prevState) => ({
        ...prevState,
        images: [...prevState.images, ...validFiles],
      }));
    }
  }, []);

  const removeImage = useCallback((imageName: string) => {
    setBlogForm((prevState) => ({
      ...prevState,
      images: prevState.images.filter((image) => image.name !== imageName),
    }));
  }, []);

  const onSubmit = useCallback(() => {
    if (!blogForm.title || !blogForm.content
      || !blogForm.category || blogForm.images.length === 0) {
      setFormError('Please fill in all required fields and upload at least one image.');
      return;
    }

    setFormError('');
  }, [blogForm]);

  return (
    <Box sx={{
      maxWidth: '1200px',
      margin: 'auto',
    }}
    >
      <Grid container spacing={8} alignItems="center" justifyContent="space-around">
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#075985', marginBottom: 2 }}>
            Post a Blog
          </Typography>
          <Typography variant="body2" color="textSecondary" marginBottom={2}>
            Please fill out the form below to post a new blog.
          </Typography>

          {formError && <Alert severity="error">{formError}</Alert>}

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="title"
                label="Blog Title"
                variant="outlined"
                fullWidth
                required
                value={blogForm.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="author"
                label="Author Name"
                variant="outlined"
                fullWidth
                required
                value={blogForm.author}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="content"
                label="Blog Content"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
                value={blogForm.content}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="tags"
                label="Tags (Comma separated)"
                variant="outlined"
                fullWidth
                required
                value={blogForm.tags.join(', ')}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={blogForm.category}
                  onChange={handleSelectChange}
                  label="Category"
                  required
                >
                  <MenuItem value="Technology">Technology</MenuItem>
                  <MenuItem value="Lifestyle">Lifestyle</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="Health">Health</MenuItem>
                </Select>
                <FormHelperText>Choose a category for your blog post</FormHelperText>
              </FormControl>
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
                Upload Blog Image(s)
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={handleImageUpload}
                  required
                />
              </Button>
              {imageError && <Typography color="error" variant="body2">{imageError}</Typography>}
              {blogForm.images.length > 0 && (
                <Box sx={{ marginTop: 2 }}>
                  <Typography variant="body2" color="textSecondary" mb={1}>
                    Preview of uploaded images:
                  </Typography>
                  <Grid container spacing={2}>
                    {blogForm.images.map((image) => (
                      <Grid item key={image.name}>
                        <Box sx={{ position: 'relative' }}>
                          <Avatar
                            src={URL.createObjectURL(image)}
                            sx={{ width: 120, height: 120 }}
                            alt="Uploaded Image"
                          />
                          <Button
                            onClick={() => removeImage(image.name)}
                            sx={{
                              position: 'absolute',
                              top: 0,
                              right: -5,
                              minWidth: '25px',
                              height: '25px',
                              padding: 0,
                              borderRadius: '50%',
                              backgroundColor: 'black',
                              color: 'white',
                              fontSize: '15px',
                              '&:hover': { backgroundColor: 'black' },
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Grid>
          </Grid>

          <Box sx={{ marginTop: 3 }}>
            <Button
              onClick={onSubmit}
              sx={{
                backgroundColor: '#075985',
                color: 'white',
                '&:hover': { backgroundColor: '#063c52' },
                fontWeight: 'bold',
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              Publish Blog
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <ServiceCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogPostForm;
