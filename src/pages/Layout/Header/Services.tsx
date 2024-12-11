import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ServiceCard from '../../../Components/ServiceCard';
import illustration from '../../../assets/illustration.jpg';

const Services = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      bgcolor: '#f9f9f9',
    }}
  >
    <Box sx={{ maxWidth: 1200, width: '100%' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'text.primary',
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            Empower Your Journey with Expert Guidance
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem' },
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Explore a wide range of services crafted for your success.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem' },
              color: 'text.secondary',
              mb: 4,
            }}
          >
            From personalized mentorship to cutting-edge courses, job opportunities, and community
            support, we’re here to help you grow, connect, and achieve your goals. Start your
            journey today!
          </Typography>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 4 }}>
            <img
              src={illustration}
              alt="Empowerment Illustration"
              style={{
                width: '100%',
                maxWidth: 500,
                borderRadius: 8,
                justifyContent: 'center',
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <ServiceCard />
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default Services;
