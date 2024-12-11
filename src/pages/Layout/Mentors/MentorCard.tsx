import React from 'react';
import {
  Paper, Typography, Button, Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaLocationArrow } from 'react-icons/fa';

interface MentorCardProps {
  mentor: any;
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        p: 3,
        borderRadius: '16px',
        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        minHeight: '450px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '16px',
      }}
      >
        <img
          src={mentor.image}
          alt={mentor.name}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #E5E7EB',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: '#1F2937',
          textAlign: 'center',
          marginBottom: '8px',
        }}
      >
        {mentor.name}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#6B7280',
          textAlign: 'center',
          marginBottom: '12px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FaBuilding style={{ marginRight: '4px' }} />
        {mentor.position}
        <span style={{ margin: '0 4px' }}>at</span>
        <span style={{ fontWeight: 'bold', color: '#0369A1' }}>{mentor.company}</span>
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#6B7280',
          textAlign: 'center',
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FaLocationArrow style={{ marginRight: '4px' }} />
        {mentor.location}
      </Typography>

      <Typography
        sx={{
          fontSize: '16px',
          color: '#4b5563',
          marginBottom: '16px',
          lineHeight: '1.6',
          fontFamily: 'Roboto, sans-serif',
          flexGrow: 1,
        }}
      >
        {mentor.about.length > 150 ? `${mentor.about.slice(0, 150)}...` : mentor.about}
        {mentor.about.length > 150 && (
          <Button
            sx={{
              color: '#0369A1',
              padding: '0',
              fontSize: '14px',
              textTransform: 'none',
              fontWeight: 'bold',
            }}
            onClick={() => navigate(`/mentors/${mentor.id}`)}
          >
            Read more
          </Button>
        )}
      </Typography>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 'auto',
        }}
      >
        {mentor.skills.map((skill: string) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              margin: '2px',
              backgroundColor: '#E0F2FE',
              color: '#0284C7',
              fontWeight: '500',
            }}
          />
        ))}
      </div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#0369A1',
          color: 'white',
          textTransform: 'none',
          borderRadius: '8px',
          padding: '6px 12px',
          '&:hover': {
            backgroundColor: '#075985',
          },
          alignSelf: 'center',
          marginTop: '12px',
        }}
        onClick={() => navigate(`/mentors/${mentor.id}`)}
      >
        View Profile
      </Button>
    </Paper>
  );
};

export default MentorCard;
