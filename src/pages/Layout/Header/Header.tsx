import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Box, Typography } from '@mui/material';
import MentorShip from '../../../assets/pexels-cottonbro-6830372.jpg';

const Header = () => (
  <Box
    sx={{
      display: 'grid',
      paddingX: 4,
      paddingY: 5,
      gap: 12,
      alignItems: 'center',
      maxWidth: '1900px',
      minHeight: '100vh',
      width: '100%',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr', lg: '2fr 2fr' },
        gap: 12,
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '1500px',
        width: '100%',
      }}
    >
      <Box>
        <Box sx={{ maxWidth: '2xl', paddingRight: { lg: 6 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'customColors.sky800',
            }}
          >
            Transform Your Career Path
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              lineHeight: 1,
              marginTop: 2,
              fontSize: { xs: '2rem', sm: '3rem', lg: '4rem' },
            }}
          >
            Mentorship for Tomorrow&apos;s Success
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              marginTop: 4,
              fontSize: '1.125rem',
            }}
          >
            Unlock your potential with personalized guidance, career development, and freelancing
            opportunities. Connect with experienced mentors and shape your professional journey
            today.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          <Link
            to="/mentorship"
            className="inline-flex mt-3 items-center gap-2 bg-gray-900
            text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Find a Mentor
            <FaArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/courses"
            className="inline-flex mt-3 items-center gap-2 bg-sky-700
             text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition-colors"
          >
            Explore Courses
          </Link>
        </Box>

        <Box sx={{ marginTop: 8 }}>
          <Box sx={{ display: 'flex', gap: 8 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                500+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Active Mentors
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                10k+
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Success Stories
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                95%
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Satisfaction Rate
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
          }}
        >
          <img
            src={MentorShip}
            alt="Mentorship"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '90%',
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: -21,
              bottom: 50,
              width: 96,
              height: 96,
              backgroundColor: 'primary.light',
              borderRadius: '16px',
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: -24,
              top: -24,
              width: 128,
              height: 128,
              backgroundColor: 'secondary.light',
              borderRadius: '16px',
              zIndex: -1,
            }}
          />
        </Box>
      </Box>
    </Box>
  </Box>
);

export default Header;
