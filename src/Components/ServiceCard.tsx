import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faUser,
  faMailReply,
  faBook,
  faProjectDiagram,
  faLightbulb,
  faRefresh,
} from '@fortawesome/free-solid-svg-icons';
import {
  Box, Typography, Grid, Card,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { map } from 'lodash/fp';
import type { Service } from '../domain/Obudle/Service';

const services: Service[] = [
  {
    title: 'Personalized Mentorship',
    description: 'Connect with industry experts to achieve your goals.',
    icon: (
      <FontAwesomeIcon
        icon={faUser}
        style={{ fontSize: 20, color: '#4caf50', marginRight: 16 }}
      />
    ),
    link: '/mentorship',
  },
  {
    title: 'Job Opportunities & Referrals',
    description: 'Find jobs in top companies tailored to your skills.',
    icon: (
      <FontAwesomeIcon
        icon={faMailReply}
        style={{ fontSize: 20, color: '#ff9800', marginRight: 16 }}
      />
    ),
    link: '/jobs',
  },
  {
    title: 'Advanced Courses',
    description: 'Learn cutting-edge technologies with expert trainers.',
    icon: (
      <FontAwesomeIcon
        icon={faBook}
        style={{ fontSize: 20, color: '#2196f3', marginRight: 16 }}
      />
    ),
    link: '/courses',
  },
  {
    title: 'College Projects & Guidance',
    description: 'Ace your academic projects with mentorship.',
    icon: (
      <FontAwesomeIcon
        icon={faProjectDiagram}
        style={{ fontSize: 20, color: '#9c27b0', marginRight: 16 }}
      />
    ),
    link: '/projects',
  },
  {
    title: 'Tech Community',
    description: 'Engage with like-minded tech enthusiasts.',
    icon: (
      <FontAwesomeIcon
        icon={faLightbulb}
        style={{ fontSize: 20, color: '#ffeb3b', marginRight: 16 }}
      />
    ),
    link: '/community',
  },
  {
    title: 'Blogs and Tech News',
    description: 'Stay updated with the latest tech news.',
    icon: (
      <FontAwesomeIcon
        icon={faUser}
        style={{ fontSize: 20, color: '#f44336', marginRight: 16 }}
      />
    ),
    link: '/blog',
  },
  {
    title: 'Referral',
    description: 'Get recommendations to land your dream job.',
    icon: (
      <FontAwesomeIcon
        icon={faRefresh}
        style={{ fontSize: 20, color: '#3f51b5', marginRight: 16 }}
      />
    ),
    link: '/referrals',
  },
];

const ServiceCard = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      px: 2,
    }}
  >
    <Box sx={{ maxWidth: '800px', width: '100%' }}>
      <Grid container spacing={6} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: 4,
              padding: 3,
              boxShadow: 3,
              backgroundColor: '#ffffff',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', color: '#0369a1', mb: 3 }}
            >
              Our Services
            </Typography>
            <Box>
              {map(
                (service: Service, index: number) => (
                  <Link
                    to={service.link}
                    key={service.title}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        py: 2,
                        borderBottom: index < services.length - 1 ? '1px solid #e0e0e0' : 'none',
                        '&:hover': { backgroundColor: '#f9f9f9' },
                        cursor: 'pointer',
                      }}
                    >
                      {service.icon}
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontSize: '1.125rem',
                            fontWeight: 'bold',
                            color: '#333',
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: '0.875rem', color: '#666' }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{ color: '#0369a1', fontSize: 16 }}
                      />
                    </Box>
                  </Link>
                ),
                services,
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default ServiceCard;
