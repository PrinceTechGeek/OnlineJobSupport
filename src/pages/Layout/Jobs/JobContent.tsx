import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Divider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faIndianRupee,
  faClock,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import JobApplicationForm from './JobApplicationForm';
import PlatformInsights from './PlatformInsights';

const JobContent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const job = {
    title: 'Software Developer',
    company: 'Aurus',
    location: 'Pune',
    experience: '1-4 years',
    salary: 'Not Disclosed',
    jobType: 'Hybrid',
    description: `As a Software Developer, you’ll be responsible for building scalable and
    efficient software solutions, collaborating with teams, ensuring quality, and more.`,
    responsibilities: [
      'Provide technical leadership and guidance to a team of developers.',
      'Collaborate with cross-functional teams to define, design, and ship new features.',
      'Conduct regular code reviews to ensure code quality and adherence to coding standards.',
      'Stay updated on industry trends and emerging technologies.',
    ],
    qualifications: [
      '1-3 years of experience as a Full Stack Developer',
      'Proficiency in JavaScript, Node.js, React, and Angular',
      'Experience with SQL/NoSQL databases',
      'Excellent communication and problem-solving skills',
    ],
    skills: ['JavaScript', 'Node.js', 'React', 'SQL', 'CSS', 'HTML'],
    companyProfile: `Aurus is a leading IT services company, providing consulting, development,
    and maintenance solutions to clients in FinTech and other industries.`,
    postedAt: 'Just Now',
    applicants: 128,
    openings: 1,
  };

  const statistics = {
    totalUsers: 5000,
    totalApplications: 350,
    successfulHires: 150,
  };

  const upcomingEvents = [
    {
      title: 'Software Developer Hiring Drive',
      date: '2024-12-10',
      description: 'Join us for exclusive hiring opportunities in tech.',
    },
    {
      title: 'Tech Career Fair',
      date: '2024-12-15',
      description: 'Network with top companies and explore career options.',
    },
  ];

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleFormSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: 'auto',
        padding: 2,
        marginTop: 10,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: isMobile ? '100%' : '35%',
          marginBottom: isMobile ? 2 : 0,
        }}
      >
        <PlatformInsights statistics={statistics} upcomingEvents={upcomingEvents} />
      </Box>

      <Box sx={{ width: isMobile ? '100%' : '60%' }}>
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            borderRadius: '16px',
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: 1 }}>
            {job.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: '500', color: '#4A5568', marginBottom: 1 }}
          >
            {job.company}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              marginBottom: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faClock} style={{ color: '#4A5568', marginRight: '8px' }} />
              <Typography variant="body2" sx={{ fontWeight: '500', color: '#4A5568' }}>
                {job.experience || 'Not Specified'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon
                icon={faIndianRupee}
                style={{ color: '#4A5568', marginRight: '8px' }}
              />
              <Typography variant="body2" sx={{ fontWeight: '500', color: '#4A5568' }}>
                {job.salary}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                style={{ color: '#4A5568', marginRight: '8px' }}
              />
              <Typography variant="body2" sx={{ fontWeight: '500', color: '#4A5568' }}>
                {job.location}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FontAwesomeIcon icon={faTag} style={{ color: '#4A5568', marginRight: '8px' }} />
              <Typography variant="body2" sx={{ fontWeight: '500', color: '#4A5568' }}>
                {job.jobType}
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ fontWeight: '600', marginBottom: 1 }}>
            Job Description
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 3, color: '#4A5568' }}>
            {job.description}
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: 1 }}>
            Responsibilities:
          </Typography>
          <ul>
            {job.responsibilities.map((resp) => (
              <li key={resp}>
                <Typography variant="body2">{resp}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: 1, marginTop: 2 }}>
            Qualifications:
          </Typography>
          <ul>
            {job.qualifications.map((qual) => (
              <li key={qual}>
                <Typography variant="body2">{qual}</Typography>
              </li>
            ))}
          </ul>

          <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: 2, marginTop: 2 }}>
            Required Skills:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {job.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  backgroundColor: '#E0F2FE',
                  color: '#0369A1',
                  fontWeight: '500',
                }}
              />
            ))}
          </Box>

          <Typography
            variant="body1"
            sx={{ fontWeight: '600', marginBottom: 1, marginTop: 3 }}
          >
            About the Company
          </Typography>
          <Typography variant="body2">{job.companyProfile}</Typography>

          <Box sx={{ marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{
                fontWeight: '600',
                padding: '7px 12px',
                background: '#075985',
              }}
              onClick={handleOpenDialog}
            >
              Apply Now
            </Button>
          </Box>

          <Divider sx={{ marginTop: 3 }} />
        </Paper>
        <JobApplicationForm
          open={openDialog}
          handleClose={handleCloseDialog}
          handleSubmit={handleFormSubmit}
        />
      </Box>
    </Box>
  );
};

export default JobContent;
