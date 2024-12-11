import React from 'react';
import {
  Drawer, Typography, Box, TextField, Button, Chip,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import type { Project } from '#domain/Obudle/Project';
import { map } from 'lodash/fp';

type ProjectContentSidePanelProps = {
  open: boolean;
  selectedProject: Project | null;
  onClose: () => void;
};

const ProjectContentSidePanel = (
  {
    open,
    selectedProject,
    onClose,
  }: ProjectContentSidePanelProps,
) => {
  if (!selectedProject) {
    return null;
  }

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '450px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderTopLeftRadius: '16px',
          borderBottomLeftRadius: '16px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.8s ease-out',
          transform: open ? 'translateX(70%)' : 'translateX(100%)',
        },
      }}
    >
      <div>
        <Typography
          variant="h5"
          sx={{ fontWeight: '800', color: '#2c3e50', marginBottom: '20px' }}
        >
          {selectedProject.title}
        </Typography>

        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              objectFit: 'cover',
            }}
          />
        </div>

        <Typography
          variant="h6"
          sx={{
            fontWeight: '700', color: '#34495e', marginBottom: '12px',
          }}
        >
          Project Details
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#7f8c8d', marginBottom: '20px', lineHeight: '1.6' }}
        >
          {selectedProject.description}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: '600',
            color: '#2c3e50',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon icon={faCircleNotch} style={{ marginRight: '8px', color: '#3498db' }} />
          Technologies Used:
        </Typography>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px',
        }}
        >
          {map((tech: string) => (
            <Chip
              key={tech}
              label={tech}
              color="primary"
              size="small"
              sx={{
                backgroundColor: '#0369a1',
                color: 'white',
                borderRadius: '16px',
                padding: '6px 14px',
              }}
            />
          ))(selectedProject.technologies)}
        </div>

        <Typography
          variant="h6"
          sx={{ fontWeight: '700', color: '#34495e', marginBottom: '12px' }}
        >
          Book an Enquiry Call
        </Typography>
        <Typography variant="body2" sx={{ color: '#7f8c8d', marginBottom: '20px' }}>
          Interested in this project? Book a call to discuss more details with our team.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TextField
            label="Your Name"
            variant="outlined"
            required
            fullWidth
            sx={{
              borderRadius: '8px',
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              padding: '12px',
              fontWeight: '600',
              borderRadius: '8px',
              backgroundColor: '#0369a1',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </Drawer>
  );
};

export default ProjectContentSidePanel;
