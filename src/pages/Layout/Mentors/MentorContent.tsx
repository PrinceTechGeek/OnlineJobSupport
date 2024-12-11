import React, { useState } from 'react';
import {
  Box, Button, Avatar, Typography, Rating, Card, Chip, Grid,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import sudeep from '../../../assets/subesh.jpg';
import BookASessionSidePanel from './BookaSessionSidePanel';

const MentorContent = () => {
  const [openSidePanel, setOpenSidePanel] = useState(false);

  const mentor = {
    profileImage: sudeep,
    name: 'Abhishek Jakhar',
    title: 'Software Engineer & Career Coach',
    rating: 4.8,
    bio: `I help people navigate their tech careers and grow their skills. With 5+ years
    of experience, I specialize in full-stack development, career coaching, and mentoring
    for aspiring tech professionals.`,
    skills: ['JavaScript', 'React', 'Node.js', 'Career Coaching', 'Leadership'],
    location: 'San Francisco, CA',
    reviews: [
      {
        mentee: 'Alice',
        feedback: 'Abhishek helped me land my first job as a front-end developer',
        rating: 5,
      },
      {
        mentee: 'Bob',
        feedback: 'Great insights into tech careers and job interviews',
        rating: 4.5,
      },
    ],
    sessionPlans: [
      {
        name: 'Task-Based',
        price: '30',
        description: 'Short, focused task-oriented sessions.',
      },
      {
        name: 'Monthly',
        price: '100',
        description: 'Ongoing sessions over the course of a month.',
      },
      {
        name: 'Full-Time',
        price: '500',
        description: 'Complete immersion with full-time mentorship.',
      },
      {
        name: 'Standard',
        price: '80',
        description: 'Regular sessions at a fixed price.',
      },
    ],
  };

  const suggestedMentors = [
    {
      id: 1,
      profileImage: sudeep,
      name: 'John Doe',
      title: 'Frontend Developer',
      rating: 4.6,
      skills: ['React', 'JavaScript', 'CSS'],
      about: `I help people navigate their tech careers and grow their skills. With 5+
      years of experience, I specialize in full-stack development, career coaching, and
      mentoring for aspiring tech professionals.`,
    },
    {
      id: 2,
      profileImage: sudeep,
      name: 'Jane Smith',
      title: 'Full-Stack Developer & Coach',
      rating: 4.7,
      skills: ['Node.js', 'Express', 'MongoDB'],
      about: `I help people navigate their tech careers and grow their skills. With
      5+ years of experience, I specialize in full-stack development, career coaching,
      and mentoring for aspiring tech professionals.`,
    },
  ];

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <Box sx={{
      maxWidth: 1200, margin: 'auto', padding: 4, marginTop: 7, backgroundColor: 'white',
    }}
    >
      <Button
        variant="outlined"
        color="primary"
        onClick={handleBackButtonClick}
        sx={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
      >
        <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: 8 }} />
        Previous Page
      </Button>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 4,
        borderRadius: 3,
        marginBottom: 4,
        boxShadow: 3,
      }}
      >
        <Avatar
          alt={mentor.name}
          src={mentor.profileImage}
          sx={{
            width: 130,
            height: 130,
            marginBottom: 2,
            border: '4px solid #fff',
            boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s',
            '&:hover': { transform: 'scale(1.1)' },
          }}
        />
        <Box sx={{ marginLeft: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: 'text-sky-700', marginBottom: 1 }}>
            {mentor.name}
          </Typography>
          <Typography variant="h6" sx={{ color: '#9b9b9b', marginBottom: 1, opacity: 0.8 }}>
            {mentor.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
            <FontAwesomeIcon icon={faLocationPin} style={{ marginRight: 8, color: '#0369A1' }} />
            <Typography variant="h6" sx={{ color: '#555' }}>
              {mentor.location}
            </Typography>
          </Box>
          <Box display="flex" sx={{ marginBottom: 2 }}>
            <Rating
              value={mentor.rating}
              readOnly
              precision={0.1}
              sx={{ color: 'text-orange-700', marginRight: 2 }}
            />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              (
              {mentor.rating}
              )
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#0369A1',
              '&:hover': { backgroundColor: '#075985' },
              borderRadius: 2,
              padding: '10px 20px',
            }}
            onClick={() => setOpenSidePanel(true)}
          >
            Book a Session
          </Button>
        </Box>
      </Box>

      <Card sx={{
        boxShadow: 3,
        borderRadius: 3,
        padding: 3,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        marginBottom: 4,
      }}
      >
        <Box flex={1}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'text-sky-700', marginBottom: 2 }}>
            About
            {' '}
            {mentor.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#555', marginBottom: 4 }}
          >
            {mentor.bio}
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: 'text-sky-700', marginBottom: 2 }}
          >
            Skills & Expertise
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {mentor.skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  backgroundColor: '#f0f8ff',
                  color: 'text-sky-700',
                  fontWeight: 500,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              />
            ))}
          </Box>
        </Box>
      </Card>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: 'text-sky-700', marginBottom: 2 }}
      >
        Suggested Mentor
      </Typography>
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        {suggestedMentors.map((suggestedMentor) => (
          <Grid item xs={12} sm={6} md={4} key={suggestedMentor.id}>
            <Card
              sx={{
                padding: 2,
                textAlign: 'center',
                boxShadow: 3,
                borderRadius: 3,
                transition: 'transform 0.3s',
                cursor: 'pointer',
              }}
            >
              <Avatar
                alt={suggestedMentor.name}
                src={suggestedMentor.profileImage}
                sx={{
                  width: 120,
                  height: 120,
                  margin: 'auto',
                  marginBottom: 2,
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: 'text-sky-700', marginBottom: 1 }}
              >
                {suggestedMentor.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#9b9b9b', marginBottom: 1 }}>
                {suggestedMentor.title}
              </Typography>

              <Typography variant="body2" sx={{ color: '#9b9b9b', marginBottom: 1 }}>
                {suggestedMentor.about.length > 150
                  ? `${suggestedMentor.about.slice(0, 150)}...`
                  : suggestedMentor.about }
                {suggestedMentor.about.length > 150 && (
                  <span
                    style={{
                      color: '#0369A1',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    Read More
                  </span>
                )}
              </Typography>

              <Rating
                value={suggestedMentor.rating}
                readOnly
                precision={0.1}
                sx={{ color: 'text-orange-700' }}
              />
              <Box sx={{ marginTop: 2 }}>
                {suggestedMentor.skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    sx={{
                      margin: '4px', backgroundColor: '#0369A1', color: 'white', fontSize: 12,
                    }}
                  />
                ))}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <BookASessionSidePanel
        open={openSidePanel}
        onClose={() => setOpenSidePanel(false)}
        mentor={mentor}
      />
    </Box>
  );
};

export default MentorContent;
