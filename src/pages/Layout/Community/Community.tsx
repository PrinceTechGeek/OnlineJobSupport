import React, { useMemo, useState } from 'react';
import { faNewspaper, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { map } from 'lodash/fp';
import {
  Tabs, Tab, Box, Card, CardContent, Typography,
  Chip,
  Button,
} from '@mui/material';
import type { CommunityFeatures } from '#domain/Obudle/CommunityFeatures';
import EnrollDialog from '../../../Components/EnrollDialog';
import CommunityCard from './CommunityCard';
import community from '../../../assets/community.png';

const Community = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleTabChange = (event: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  const handleEnrollClick = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'ReactJS Workshop',
      date: '2024-12-15 10:00 AM',
      community: 'React Enthusiasts',
      description: 'Join us for an exciting workshop to dive deep into ReactJS!',
      isOnline: true,
    },
    {
      id: 2,
      title: 'Node.js Webinar',
      date: '2024-12-18 2:00 PM',
      community: 'Backend Devs',
      description: 'A comprehensive webinar on Node.js and server-side development.',
      isOnline: true,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Intro to TypeScript',
      date: '2024-11-30 5:00 PM',
      community: 'Frontend Developers',
      description: 'A beginner-friendly session on TypeScript basics.',
      isOnline: true,
    },
    {
      id: 2,
      title: 'DevOps for Beginners',
      date: '2024-11-25 3:00 PM',
      community: 'DevOps Enthusiasts',
      description: 'Explore the fundamentals of DevOps in this hands-on session.',
      isOnline: true,
    },
  ];

  const communityFeatures: CommunityFeatures[] = useMemo(() => [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faNewspaper} className="text-4xl text-red-600" />,
      title: 'Ask & Clarify Doubts',
      description: `Have any tech-related questions? Ask the community and get your
      doubts clarified by fellow developers.`,
      benefit: 'Get quick solutions to your tech queries and help others with their challenges.',
    },
    {
      id: 2,
      title: 'Provide Solutions',
      description: `If you know the answer to someone else's question,
      provide solutions and help others improve.`,
      benefit: 'Contribute to the community by sharing your knowledge and grow your expertise.',
      icon: <FontAwesomeIcon icon={faUsers} className="text-4xl text-purple-600" />,
    },
    {
      id: 3,
      title: 'Chit-Chat & Collaborate',
      description: `Engage in casual conversations and collaborate
      with other developers on exciting projects.`,
      benefit: `Build relationships, exchange ideas, and stay
      motivated through collaborative efforts.`,
      icon: <FontAwesomeIcon icon={faHandshake} className="text-4xl text-teal-600" />,
    },
  ], []);

  return (
    <div className="bg-gray-50 mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Join the Obudle Tech Community
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Connect, collaborate, and grow in a community of like-minded tech enthusiasts.
        </p>
      </div>

      <div className="mt-6 py-8 rounded-lg max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-sky-700 text-center">
          Activities You Can Do in the Community
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {map((feature: CommunityFeatures) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center bg-gradient-to-t
               from-gray-50 via-white to-gray-100 rounded-lg p-6 shadow-xl
               transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <p className="text-gray-500 mt-4 italic">{feature.benefit}</p>
            </div>
          ), communityFeatures)}
        </div>

        <div className="flex flex-col sm:flex-row mt-6 justify-center items-center">
          <div className="flex-1 sm:mr-6 mb-6 sm:mb-0 text-center sm:text-left">
            <p className="text-gray-800 font-semibold mt-4 text-lg">
              Whether you&apos;re looking to collaborate on exciting projects, solve coding
              challenges together, or simply grow your skills with like-minded developers,
              this community is here to help you develop, learn, and innovate.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img src={community} alt="Community" className="w-full h-auto" />
          </div>
        </div>

        <Box sx={{ width: '100%', marginTop: 4 }}>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            aria-label="event tabs"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Upcoming Events" />
            <Tab label="Past Events" />
          </Tabs>

          <Box sx={{ padding: 2 }}>
            {tabIndex === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} sx={{ maxWidth: 345, boxShadow: 3 }}>
                    <CardContent>

                      <Box>
                        <Chip label={event.community} color="default" />
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{ mt: 1, fontWeight: 600, color: 'black' }}
                        gutterBottom
                      >
                        {event.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {event.date}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {event.isOnline ? (
                          <Chip label="Online" color="primary" />
                        ) : (
                          <Chip label="Offline" color="secondary" />
                        )}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {event.description}
                      </Typography>

                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => handleEnrollClick()}
                      >
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {tabIndex === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} sx={{ maxWidth: 345, boxShadow: 3 }}>
                    <CardContent>
                      <Box sx={{ mb: 1 }}>
                        <Chip label={event.community} color="default" />
                      </Box>
                      <Typography variant="body1" gutterBottom>
                        {event.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {event.date}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {event.isOnline ? (
                          <Chip label="Online" color="primary" />
                        ) : (
                          <Chip label="Offline" color="secondary" />
                        )}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {event.description}
                      </Typography>

                      <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        disabled
                      >
                        Event Completed
                      </Button>

                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </Box>
        </Box>

        <EnrollDialog
          dialogTitle="Join the Event"
          open={openDialog}
          onClose={handleClose}
          formData={formData}
          onInputChange={handleInputChange}
        />
      </div>

      <CommunityCard />
    </div>
  );
};

export default Community;
