import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  CardActions,
  Chip,
  Box,
  Divider,
  Container,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython, faJs, faDartLang, faCodepen,
  faCloudflare, faReact,
} from '@fortawesome/free-brands-svg-icons';

const communities = [
  {
    id: 1,
    name: 'Java Community',
    icon: faCodepen,
    color: '#007396',
    category: 'Programming Languages',
    details: `A community for Java developers to collaborate and share knowledge.
    Join us to improve your skills and share your experiences.`,
    features: ['Object-Oriented', 'Platform Independence', 'Secure', 'Multithreaded'],
    link: 'https://t.me/javacommunity',
    articles: ['Java 17 Features', 'Top 5 Java Frameworks', 'Clean Java Code'],
  },
  {
    id: 2,
    name: '.NET Community',
    icon: faCloudflare,
    color: '#512BD4',
    category: 'Web Development',
    details: `Join the .NET developers to explore Microsoft technologies and stay
    up-to-date with the latest trends and tools.`,
    features: ['Cross-Platform', 'Rich Libraries', 'Integration', 'Secure'],
    link: 'https://t.me/dotnetcommunity',
    articles: ['.NET MAUI vs Xamarin', 'Microservices with .NET', 'Blazor in 2024'],
  },
  {
    id: 3,
    name: 'Python Community',
    icon: faPython,
    color: '#3776AB',
    category: 'Programming Languages',
    details: `A thriving community for Python enthusiasts. Discuss Python’s role in data
    science, machine learning, and beyond.`,
    features: ['Dynamic Typing', 'Extensive Libraries', 'Easy to Learn', 'Open Source'],
    link: 'https://t.me/pythoncommunity',
    articles: ['Python for Data Science', 'Top Python Libraries', 'Async Programming'],
  },
  {
    id: 4,
    name: 'Web Development',
    icon: faJs,
    color: '#F7DF1E',
    category: 'Web Development',
    details: `For developers working on modern web technologies, with a focus on building
    interactive user interfaces and web apps.`,
    features: ['Responsive Design', 'Interactive UI', 'Full Stack', 'Cross-Browser Compatibility'],
    link: 'https://t.me/webdevcommunity',
    articles: ['React vs Vue', 'Web Accessibility', 'CSS Trends 2024'],
  },
  {
    id: 5,
    name: 'AI Community',
    icon: faDartLang,
    color: '#00C4B3',
    category: 'AI and Machine Learning',
    details: `Dive into Artificial Intelligence, explore machine learning frameworks,
    and discuss the latest breakthroughs in AI.`,
    features: ['Neural Networks', 'Deep Learning', 'NLP', 'AI Ethics'],
    link: 'https://t.me/aicommunity',
    articles: ['AI in Healthcare', 'ML Frameworks', 'Transformers Explained'],
  },
  {
    id: 6,
    name: 'React Community',
    icon: faReact,
    color: '#61DBFB',
    category: 'Web Development',
    details: `Join React developers to learn, share, and improve your React skills.
    Discuss best practices, patterns, and more.`,
    features: ['Component-Based', 'Declarative UI', 'Virtual DOM', 'Fast Rendering'],
    link: 'https://t.me/reactcommunity',
    articles: ['React Best Practices', 'State Management in React', 'React in 2024'],
  },
];

const CommunityCard = () => (
  <Box sx={{
    p: 4, backgroundColor: '#f7f7f7', minHeight: '100vh',
  }}
  >
    <Container maxWidth="xl">
      <div id="community-page">
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontWeight: 540,
            mb: 5,
            lineHeight: 1.6,
          }}
        >
          Unlock your potential and elevate your skills by joining our thriving tech communities.
          Whether you&apos;re a coding enthusiast, a seasoned developer, or someone passionate about
          learning, our communities offer a platform to collaborate, innovate, and grow. Here,
          you&apos;ll find a space to connect with like-minded individuals, share knowledge, and
          stay updated on the latest tech trends. From deep dives into programming languages to
          discussions about cutting-edge technologies, our communities offer something for everyone.
          Join us to shape the future of tech, one conversation at a time.
        </Typography>

        {['Programming Languages', 'Web Development', 'AI and Machine Learning']
          .map((category) => (
            <Box key={category} sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: '#333' }}>
                {category}
              </Typography>
              <Grid container spacing={3}>
                {communities
                  .filter((community) => community.category === category)
                  .map((community) => (
                    <Grid item xs={12} sm={6} md={4} key={community.id}>
                      <Card
                        sx={{
                          boxShadow: 5,
                          borderRadius: 4,
                          backgroundColor: '#fff',
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: 8,
                          },
                          padding: 2,
                          border: '1px solid #ddd',
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          minHeight: 500,
                        }}
                      >
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 3,
                            gap: 2,
                          }}
                          >
                            <Avatar
                              sx={{
                                backgroundColor: community.color,
                                width: 70,
                                height: 70,
                              }}
                            >
                              <FontAwesomeIcon
                                icon={community.icon}
                                size="lg"
                                style={{ color: '#ffffff' }}
                              />
                            </Avatar>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 'bold',
                                color: '#333',
                                letterSpacing: 0.5,
                              }}
                            >
                              {community.name}
                            </Typography>
                          </Box>

                          <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                              mb: 2,
                              lineHeight: 1.6,
                              color: '#555',
                            }}
                          >
                            {community.details}
                          </Typography>

                          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                            Key Features:
                          </Typography>
                          <Box sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                            mb: 2,
                          }}
                          >
                            {community.features.map((feature) => (
                              <Chip
                                key={feature}
                                label={feature}
                                color="primary"
                                variant="outlined"
                                size="small"
                                sx={{
                                  fontSize: '0.8rem',
                                }}
                              />
                            ))}
                          </Box>

                          <Divider sx={{ my: 2 }} />
                          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                            Recent Articles:
                          </Typography>
                          {community.articles.map((article) => (
                            <Typography
                              key={article}
                              variant="body2"
                              sx={{
                                color: '#6b6b6b',
                                mb: 1,
                              }}
                            >
                              •
                              {' '}
                              {article}
                            </Typography>
                          ))}
                        </CardContent>

                        <CardActions
                          sx={{
                            justifyContent: 'center',
                            padding: 2,
                            backgroundColor: '#f9f9f9',
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                          }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            href={community.link}
                            target="_blank"
                            sx={{
                              textTransform: 'none',
                              borderRadius: 5,
                              px: 3,
                            }}
                          >
                            Join Community
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Box>
          ))}
      </div>
    </Container>
  </Box>
);

export default CommunityCard;
