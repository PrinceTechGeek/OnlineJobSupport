import React from 'react';
import {
  Paper,
  Typography,
  Chip,
  Button,
} from '@mui/material';
import {
  join,
  map,
  slice,
  split,
} from 'lodash/fp';

type ProjectCardProps = {
  project: any;
  onClick: (project: any) => void;
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
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
    }}
    onClick={() => onClick(project)}
  >
    <img
      src={project.image}
      alt={project.title}
      className="rounded-lg w-full h-[200px] object-cover"
      style={{ borderRadius: '12px', marginBottom: '16px', objectFit: 'cover' }}
    />

    <Typography
      sx={{
        fontSize: '20px',
        fontWeight: '600',
        marginTop: '16px',
        marginBottom: '8px',
        color: '#0369a1',
        cursor: 'pointer',
        '&:hover': {
          color: '#0284c7',
        },
        transition: 'color 0.3s ease',
      }}
    >
      {project.title}
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
      {project.description.length > 120
        ? `${join('')(slice(0, 120)(split('')(project.description)))}...`
        : project.description}
      {project.description.length > 120 && (
        <Button
          sx={{
            color: '#0369A1',
            padding: '0',
            fontSize: '14px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
        >
          Read more
        </Button>
      )}
    </Typography>

    <div className="flex gap-2 mt-3 flex-wrap">
      {map((tech: string) => (
        <Chip
          label={tech}
          size="small"
          key={tech}
          sx={{
            fontWeight: '500',
            borderRadius: '12px',
            padding: '6px 12px',
            marginBottom: '5px',
            fontSize: '14px',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            '&:hover': {
              backgroundColor: '#bce0fd',
              transform: 'scale(1.1)',
            },
          }}
        />
      ), project.technologies)}
    </div>

    <Chip
      label={project.stack}
      sx={{
        backgroundColor: '#DEF3FD',
        color: '#0369A1',
        fontWeight: '500',
        padding: '5px 10px',
        fontSize: '14px',
        marginTop: '12px',
      }}
    />
  </Paper>
);

export default ProjectCard;
