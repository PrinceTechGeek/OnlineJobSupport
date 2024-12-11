import React from 'react';
import {
  Paper, Typography, Box, Chip, Button,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import type { Job } from '#domain/Obudle/Jobs';

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: '16px',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'translateY(-5px)' },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: 1 }}>
        {job.title}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: '500', color: '#555', marginBottom: 1 }}>
        {job.company}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <Typography variant="body2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {' '}
          {job.location}
        </Typography>
        <Typography variant="body2">
          <FontAwesomeIcon icon={faIndianRupee} />
          {' '}
          {job.salary}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        {job.description.slice(0, 100)}
        ...
      </Typography>
      <Box sx={{
        display: 'flex', gap: 1, flexWrap: 'wrap', marginBottom: 2,
      }}
      >
        {job.skills.map((skill) => (
          <Chip key={skill} label={skill} sx={{ backgroundColor: '#e0f2fe', color: '#0369a1' }} />
        ))}
      </Box>
      <Button variant="contained" onClick={() => navigate(`/jobs/${job.id}`)}>
        View Details
      </Button>
    </Paper>
  );
};

export default JobCard;
