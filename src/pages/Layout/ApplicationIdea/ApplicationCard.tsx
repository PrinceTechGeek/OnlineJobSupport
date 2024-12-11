import React from 'react';
import {
  Paper,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  join, map, slice, split,
} from 'lodash/fp';
import { useNavigate } from 'react-router-dom';

type ApplicationCardProps = {
  ideas: any;
};

const ApplicationCard = ({ ideas }: ApplicationCardProps) => {
  const navigate = useNavigate();
  return (
    <Paper
      elevation={6}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        },
        maxWidth: '100%',
      }}
    >
      <img
        src={ideas.image}
        alt={ideas.title}
        style={{
          borderRadius: '12px',
          marginBottom: '16px',
          width: '100%',
          height: '200px',
          objectFit: 'cover',
        }}
      />

      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#0369a1',
          cursor: 'pointer',
          '&:hover': {
            color: '#0284c7',
          },
          transition: 'color 0.3s ease',
        }}
      >
        <FontAwesomeIcon
          icon={ideas.icon}
          style={{ marginRight: '8px', color: '#0284c7' }}
        />
        {ideas.title}
      </Typography>

      <Typography
        sx={{
          fontSize: '16px',
          color: '#4b5563',
          marginTop: '12px',
          lineHeight: '1.6',
          flexGrow: 1,
        }}
      >
        {ideas.description.length > 120
          ? `${join('')(slice(0, 120)(split('')(ideas.description)))}...`
          : ideas.description}
      </Typography>

      <div className="flex gap-2 mt-3 flex-wrap">
        {map(
          (tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                fontWeight: '500',
                borderRadius: '12px',
                padding: '6px 12px',
                fontSize: '14px',
                marginBottom: '5px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#bce0fd',
                  transform: 'scale(1.1)',
                },
              }}
            />
          ),
          ideas.tags,
        )}
      </div>

      <Typography
        sx={{
          fontSize: '17px',
          color: '#0369a1',
          marginTop: '16px',
          fontWeight: '600',
        }}
      >
        Architecture:
        {' '}
        <span
          style={{
            color: 'black',
            fontWeight: '500',
            fontSize: 'xl',
          }}
        >
          {ideas.architectureType}
        </span>
      </Typography>

      <div style={{
        marginTop: '20px',
        display: 'flex',
        gap: '16px',
        justifyContent: 'space-around',
      }}
      >
        <Button
          variant="outlined"
          sx={{
            fontWeight: '500',
            borderRadius: '12px',
            borderColor: '#0369a1',
            color: '#0369a1',
            '&:hover': {
              backgroundColor: '#0369a1',
              color: '#fff',
              borderColor: '#0369a1',
            },
          }}
          onClick={() => navigate(`/ApplicationIdeas/${ideas.id}`)}
        >
          View Details
        </Button>

        <Button
          variant="contained"
          sx={{
            fontWeight: '500',
            borderRadius: '12px',
            backgroundColor: '#0284c7',
            '&:hover': {
              backgroundColor: '#0369a1',
            },
          }}
        >
          Get Access
        </Button>
      </div>
    </Paper>
  );
};

export default ApplicationCard;
