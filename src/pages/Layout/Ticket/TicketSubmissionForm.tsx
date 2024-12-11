import React, { useState, useMemo, useCallback } from 'react';
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  CircularProgress,
  Alert,
  IconButton,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { map } from 'lodash/fp'; // Importing map from lodash/fp
import type { TicketSubmission } from '#domain/Obudle/TicketSubmissionForm';

type TicketSubmissionFormProps = {
  handleClose: () => void;
};

const TicketSubmissionForm = ({ handleClose }: TicketSubmissionFormProps) => {
  const [formData, setFormData] = useState<TicketSubmission>({
    name: '',
    email: '',
    subject: '',
    category: '',
    description: '',
    priority: '',
    attachment: null,
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const categories = useMemo(() => ['Bug', 'Feature Request', 'Query', 'Other'], []);
  const priorities = useMemo(() => ['Low', 'Medium', 'High'], []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement
  | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, attachment: e.target.files[0] });
    }
  }, [formData]);

  const validateForm = useCallback(() => {
    if (!formData.name || !formData.email || !formData.subject
    || !formData.description || !formData.category || !formData.priority) {
      setError('Please fill in all required fields.');
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    setError('');
    return true;
  }, [formData.category,
    formData.description,
    formData.email,
    formData.name,
    formData.priority,
    formData.subject,
  ]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setMessage('Ticket submitted successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        description: '',
        priority: '',
        attachment: null,
      });
    }, 2000);
  }, [validateForm]);

  return (
    <Box
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        position: 'relative',
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        textAlign="center"
        sx={{ color: '#333' }}
      >
        Raise a Ticket
      </Typography>
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: '#555',
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </IconButton>
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          margin="normal"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          margin="normal"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <TextField
          fullWidth
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          margin="normal"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <TextField
          fullWidth
          select
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        >
          {map((category: string) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))(categories)}
        </TextField>
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          margin="normal"
          multiline
          rows={4}
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        />
        <TextField
          fullWidth
          select
          label="Priority"
          name="priority"
          value={formData.priority}
          onChange={handleInputChange}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
            },
          }}
        >
          {map((priority: string) => (
            <MenuItem key={priority} value={priority}>
              {priority}
            </MenuItem>
          ))(priorities)}
        </TextField>
        <Button
          variant="outlined"
          component="label"
          sx={{
            marginTop: 2,
            display: 'block',
            textTransform: 'none',
            borderRadius: '8px',
          }}
        >
          Upload Attachment
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {formData.attachment && (
          <Typography variant="body2" mt={1}>
            Attached:
            {' '}
            <strong>{formData.attachment.name}</strong>
          </Typography>
        )}
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            sx={{
              padding: '12px',
              textTransform: 'none',
              fontSize: '16px',
              borderRadius: '8px',
            }}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit Ticket'}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TicketSubmissionForm;
