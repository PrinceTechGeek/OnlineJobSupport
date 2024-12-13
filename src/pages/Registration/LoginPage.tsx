import React, { useCallback, useState } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  TextField,
  Typography,
  Box,
  Slide,
  IconButton,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock, faEnvelope, faUser, faTimes,
} from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [open, setOpen] = useState(true);
  const [animate, setAnimate] = useState(false);

  const toggleForm = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      setIsSignIn(!isSignIn);
      setAnimate(false);
    }, 200);
  }, [isSignIn]);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          background: '#075985',
          backgroundSize: 'fill',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          borderRadius: '20px',
        },
      }}
    >
      <DialogContent style={{ position: 'relative', padding: 0 }}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: 'black',
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>

        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          overflow="hidden"
          borderRadius="20px"
        >
          <Slide
            direction={isSignIn ? 'left' : 'right'}
            in={!animate}
            timeout={300}
          >
            <Box
              width={{ xs: '100%', md: '50%' }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding={4}
              color="white"
              textAlign="center"
              order={{ md: isSignIn ? 1 : 2 }}
            >
              <Typography variant="h4" fontWeight="bold" sx={{ color: 'white' }} gutterBottom>
                {isSignIn ? 'Welcome Back to SkillSync!' : 'Hello, Friend!'}
              </Typography>
              <Typography
                variant="body1"
                marginBottom={4}
                sx={{ fontSize: '16px', lineHeight: 1.5, color: 'white' }}
              >
                {isSignIn
                  ? 'Log in to continue your journey with us.'
                  : 'Register to explore more features and connect with us.'}
              </Typography>
              <Button
                variant="outlined"
                onClick={toggleForm}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  padding: '8px 24px',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#075985',
                  },
                }}
              >
                {isSignIn ? 'Sign Up' : 'Log In'}
              </Button>
            </Box>
          </Slide>

          <Box
            width={{ xs: '100%', md: '50%' }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="white"
            overflow="hidden"
            order={{ md: isSignIn ? 1 : 2 }}
          >
            <Slide
              direction={isSignIn ? 'right' : 'left'}
              in={!animate}
              timeout={300}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                padding={4}
                sx={{
                  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
                  borderRadius: '10px',
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    color: 'black',
                  }}
                  gutterBottom
                >
                  {isSignIn ? 'Log In' : 'Sign Up'}
                </Typography>
                <Box component="form" width="100%" maxWidth="400px">
                  {!isSignIn && (
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      margin="normal"
                      required
                      InputProps={{
                        startAdornment: (
                          <FontAwesomeIcon
                            icon={faUser}
                            style={{ marginRight: '8px', color: '#6b7280' }}
                          />
                        ),
                      }}
                    />
                  )}
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ marginRight: '8px', color: '#6b7280' }}
                        />
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                    InputProps={{
                      startAdornment: (
                        <FontAwesomeIcon
                          icon={faLock}
                          style={{ marginRight: '8px', color: '#6b7280' }}
                        />
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      marginTop: 2,
                      backgroundColor: '#075985',
                      color: 'white',
                      borderRadius: '50px',
                      padding: '10px',
                      fontWeight: 'bold',
                      '&:hover': {
                        backgroundColor: '#063c52',
                      },
                    }}
                  >
                    {isSignIn ? 'Log In' : 'Sign Up'}
                  </Button>
                </Box>
                <Typography
                  variant="body2"
                  marginTop={2}
                  sx={{ fontSize: '14px' }}
                >
                  {isSignIn
                    ? 'Don\'t have an account? '
                    : 'Already have an account? '}
                  <Button onClick={toggleForm} sx={{ color: '#075985' }}>
                    {isSignIn ? 'Sign Up' : 'Log In'}
                  </Button>
                </Typography>
              </Box>
            </Slide>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginPage;
