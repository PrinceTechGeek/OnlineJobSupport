import React from 'react';
import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
  TextField,
  Grid,
} from '@mui/material';

interface CourseServicesProps {
  tabIndex: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  course: {
    nextSession: {
      date: string;
      time: string;
      amount: number;
    };
    selfPacedLearning: {
      amount: number,
      description: string,
    },
  };
}

const CourseServices: React.FC<CourseServicesProps> = ({ tabIndex, handleTabChange, course }) => {
  const reasonsToLearn = [
    'Master the most in-demand DevOps tools and methodologies.',
    'Achieve a globally recognized certification.',
    'Hands-on experience with real-world projects.',
    'Access to a 60-day free Cloud Lab worth ₹4000.',
    'Live instructor-led classes for personalized guidance.',
  ];

  const renderForm = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField label="Name" fullWidth variant="outlined" size="small" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField label="Email" fullWidth variant="outlined" size="small" />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Phone Number"
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Company Name"
          fullWidth
          variant="outlined"
          size="small"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Requirements (Optional)"
          fullWidth
          variant="outlined"
          multiline
          rows={3}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth>
          Submit Request
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <Box mt={5}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered>
        <Tab label="Self-paced Learning" />
        <Tab label="Corporate Training" />
        <Tab label="Online Classroom" />
      </Tabs>

      <Box mt={3}>
        {tabIndex === 0 && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              mt: 3,
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, #ffffff, #eaf4ff)',
              maxWidth: 400,
              mx: 'auto',
            }}
          >
            <Typography
              variant="h5"
              color="textPrimary"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              Self-paced Learning
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              textAlign="center"
              mb={2}
            >
              {course.selfPacedLearning.description}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              fontWeight="bold"
              fontSize="1.5rem"
              mb={3}
            >
              Price: ₹
              {course.selfPacedLearning.amount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 4,
                borderRadius: '50px',
                fontWeight: 'bold',
              }}
            >
              Purchase Access
            </Button>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography variant="h6">Corporate Training</Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Fill out the form below to connect with our corporate trainers.
            </Typography>
            {renderForm()}
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Online Classroom
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                mt: 3,
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                maxWidth: 400,
                mx: 'auto',
              }}
            >
              <Typography variant="h5" color="textPrimary" fontWeight="bold" mb={2}>
                Next Batch
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={1}>
                <strong>Date:</strong>
                {' '}
                {course.nextSession.date}
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={1}>
                <strong>Days:</strong>
                {' '}
                Saturday & Sunday
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={2}>
                <strong>Timings:</strong>
                {' '}
                {course.nextSession.time}
              </Typography>
              <Typography variant="body2" color="textSecondary" mb={2}>
                Note: This batch is only available on weekends.
              </Typography>
              <Typography
                variant="h6"
                color="primary"
                fontWeight="bold"
                fontSize="1.5rem"
                mb={3}
              >
                ₹
                {course.nextSession.amount}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  borderRadius: '50px',
                  fontWeight: 'bold',
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      <Box mt={6} py={4} sx={{ bgcolor: '#f9fafb', borderRadius: '16px' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          sx={{ color: '#1e293b' }}
        >
          Why Learn This Course?
        </Typography>
        <Box sx={{ position: 'relative', paddingLeft: '40px' }}>
          <Box
            sx={{
              position: 'absolute',
              height: '100%',
              left: '20px',
              borderLeft: '2px solid #0078d4',
            }}
          />
          {reasonsToLearn.map((reason, index) => (
            <Box
              key={reason}
              sx={{
                position: 'relative',
                mb: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '8px',
                  top: '4px',
                  width: '24px',
                  height: '24px',
                  bgcolor: '#0078d4',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="body2"
                  color="#ffffff"
                  fontWeight="bold"
                  sx={{ fontSize: '14px' }}
                >
                  {index + 1}
                </Typography>
              </Box>
              <Box
                sx={{
                  ml: 6,
                  bgcolor: '#ffffff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  padding: '16px',
                  flex: 1,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="#1e293b"
                  gutterBottom
                >
                  {reason}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseServices;
