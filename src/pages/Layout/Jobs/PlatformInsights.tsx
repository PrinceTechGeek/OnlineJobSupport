import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Divider,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faNetworkWired,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { map } from 'lodash/fp'; // Import map from lodash/fp

type PlatformInsightsProps = {
  statistics: {
    totalUsers: number;
    totalApplications: number;
    successfulHires: number;
  };
  upcomingEvents: { title: string; date: string; description: string }[];
};

const PlatformInsights: React.FC<PlatformInsightsProps> = ({
  statistics,
  upcomingEvents,
}) => {
  // Mapping stats data with lodash/fp's map
  const statsData = map((stat: { icon: React.ReactNode, value: number, label: string }) => (
    <Grid item xs={4} key={stat.label}>
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '12px',
          height: '150px',
          width: '100px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.12)',
          },
        }}
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            margin: '0 auto 10px',
            width: 56,
            height: 56,
          }}
        >
          {stat.icon}
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#34495e',
            fontSize: '1.2rem',
          }}
        >
          {stat.value}
          +
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: '500',
            color: '#7f8c8d',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    </Grid>
  ), [
    {
      icon: <FontAwesomeIcon icon={faUserGroup} style={{ color: '#4A5568', marginRight: '8px' }} />,
      value: statistics.totalUsers,
      label: 'Total Users',
    },
    {
      icon: <FontAwesomeIcon
        icon={faNetworkWired}
        style={{ color: '#4A5568', marginRight: '8px' }}
      />,
      value: statistics.totalApplications,
      label: 'Applications',
    },
    {
      icon: <FontAwesomeIcon
        icon={faCheckCircle}
        style={{ color: '#4A5568', marginRight: '8px' }}
      />,
      value: statistics.successfulHires,
      label: 'Successful Hires',
    },
  ]);

  const eventList = map((event:
  { title: string; date: string; description: string }, index: number) => (
    <Typography key={event.title}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          padding: 2,
          borderRadius: '12px',
          backgroundColor: '#f8f9fa',
          marginBottom: 2,
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#e9ecef',
          },
        }}
      >
        <Avatar
          sx={{
            backgroundColor: '#3498db',
            width: 48,
            height: 48,
            fontWeight: 'bold',
          }}
        >
          {index + 1}
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '600',
              color: '#2c3e50',
              marginBottom: 0.5,
            }}
          >
            {event.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#7f8c8d',
              marginBottom: 0.5,
            }}
          >
            {event.date}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#34495e',
              fontSize: '0.8rem',
            }}
          >
            {event.description}
          </Typography>
        </Box>
      </Box>
      {index < upcomingEvents.length - 1 && <Divider sx={{ my: 1 }} />}
    </Typography>
  ), upcomingEvents);

  return (
    <Box
      sx={{
        width: '380px',
        backgroundColor: '#f4f6f9',
        borderRadius: '16px',
        padding: 3,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Card
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          marginBottom: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              textAlign: 'center',
              marginBottom: 3,
              letterSpacing: '0.5px',
            }}
          >
            Platform Insights
          </Typography>

          <Grid container spacing={2}>
            {statsData}
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#2c3e50',
              textAlign: 'center',
              marginBottom: 3,
              letterSpacing: '0.5px',
            }}
          >
            Upcoming Job Events
          </Typography>

          {eventList}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PlatformInsights;
