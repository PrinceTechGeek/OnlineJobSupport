import React, { useMemo, useCallback, useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  Divider,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from '@mui/material';
import { map } from 'lodash/fp';
import article from '../../../assets/illustration.jpg';

const BlogContent = () => {
  const sampleComments = useMemo(() => [
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      comment: 'This blog is incredibly insightful and well-written. Keep up the great work!',
      timestamp: '2024-12-01, 10:30 AM',
    },
    {
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      comment: 'I really appreciate how detailed this guide is. It helped me a lot. Thanks!',
      timestamp: '2024-12-01, 02:15 PM',
    },
    {
      name: 'Clara Adams',
      email: 'clara.adams@example.com',
      comment: 'Can you elaborate more on the pricing plans? That part was a bit confusing for me.',
      timestamp: '2024-12-02, 09:00 AM',
    },
    {
      name: 'David Brown',
      email: 'david.brown@example.com',
      comment: 'Zoho Cliq seems like a game-changer for small businesses. Thanks for sharing this!',
      timestamp: '2024-12-02, 11:45 AM',
    },
    {
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      comment: 'The section on streamlining communication is really helpful. Great article!',
      timestamp: '2024-12-03, 07:20 PM',
    },
  ], []);

  const [comments, setComments] = useState(sampleComments);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleAddComment = useCallback(() => {
    if (name.trim() && email.trim() && newComment.trim()) {
      const timestamp = new Date().toLocaleString();
      setComments((prevComments) => [
        ...prevComments,
        {
          name, email, comment: newComment, timestamp,
        },
      ]);
      setName('');
      setEmail('');
      setNewComment('');
    }
  }, [name, email, newComment]);

  const blog = useMemo(() => ({
    id: 1,
    title: 'A small business’s guide to making the most of Zoho Cliq',
    fullContent: `
      Are you a running business in its nascent stages and trying to find your way around? Perhaps you've already run through the many resources available online. During this overwhelming process, 
      it's common to overlook some must-haves that might not really sound crucial in the beginning. One such example is a business communication tool.
      Today, we have thousands of apps that enable businesses to connect with people from the comfort of a phone. But do they really solve your business requirements in the long run? Business communication is not just about exchanging information; it's about bringing your employees together, streamlining everyday processes, and connecting with customers and external stakeholders securely. Zoho Cliq helps businesses across the world communicate through various messaging channels like chat, audio, and video meetings. You can also build your entire collaboration ecosystem through file sharing and storage, project management, contact center management, scheduling, and more inside Zoho Cliq itself.
      Zoho Cliq also offers an enterprise-centered plan for businesses to leverage the maximum power of internal communication. To know more about Zoho Cliq's plans and their features, refer to the pricing and plan comparison. 
      Businesses can explore Zoho Cliq's paid features for free by signing up for a 14-day free trial—no need for credit card information. Sign up today to start exploring Zoho Cliq for your business. If you'd like to schedule a tailored demo with us, fill out your details and submit the application, and we'll assist you further.
      Note: Zoho also offers a dedicated Zoho for Startups program to help small businesses quickstart their journey with access to Zoho's wide range of applications. 
    `,
    author: 'Sheryl',
    authorAvatar: 'https://source.unsplash.com/random/200x200?face',
    image: article,
    tags: ['Small Business', 'Communication', 'Productivity'],
    date: '2024-12-03',
    readTime: '3 mins',
  }), []);

  const popularPosts = useMemo(() => [
    'Strengthen your internal security with Zoho Cliq’s DLP',
    'Zoho Cliq 6.0: Simplifying work for greater productivity',
    'Stay ahead with mobile features that elevate enterprise communication | Zoho Cliq 6.0',
    'Introducing a faster, leaner Zoho Cliq 6.0',
    'Diving deeper into the world of automation | Zoho Cliq 6.0',
  ], []);

  const renderComments = useMemo(() => (
    map((comment) => (
      <ListItem
        key={comment.email}
        sx={{
          mb: 3,
          padding: 2,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          '&:hover': { backgroundColor: '#f1f1f1' },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs>
            <ListItemText
              primary={(
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {comment.name}
                </Typography>
              )}
              secondary={(
                <>
                  <Typography variant="body2" color="text.secondary">
                    {comment.timestamp}
                  </Typography>
                  <Typography variant="body1" sx={{ marginTop: 1 }}>
                    {comment.comment}
                  </Typography>
                </>
              )}
            />
          </Grid>
        </Grid>
      </ListItem>
    ), comments)
  ), [comments]);

  return (
    <Box sx={{ backgroundColor: '#fff', py: 5, mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box>
              <Typography
                variant="h4"
                sx={{ fontWeight: 'bold', mb: 2 }}
              >
                {blog.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar src={blog.authorAvatar} sx={{ mr: 2, width: 48, height: 48 }} />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    By
                    {blog.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Posted On
                    {' '}
                    {blog.date}
                    {' '}
                    •
                    {' '}
                    {blog.readTime}
                  </Typography>
                </Box>
              </Box>
              <img
                src={blog.image}
                alt={blog.title}
                style={{ width: '100%', borderRadius: 8, marginBottom: 24 }}
              />
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4 }} component="div">
                {map((paragraph: string) => (
                  <Typography key={paragraph} variant="body1" paragraph>
                    {paragraph}
                  </Typography>
                ), blog.fullContent.split('\n'))}
              </Typography>

              <Divider sx={{ my: 4 }} />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Comments
                </Typography>
                <Paper sx={{
                  p: 3, mb: 4, border: '1px solid #ddd', borderRadius: '4px',
                }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                      label="Write a comment..."
                      variant="outlined"
                      multiline
                      rows={3}
                      required
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <TextField
                      label="Name"
                      variant="outlined"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      label="Email"
                      variant="outlined"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleAddComment}>Submit</Button>
                  </Box>
                </Paper>

                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  All Comments
                </Typography>

                <Divider sx={{ mb: 2 }} />

                <List sx={{ backgroundColor: '#f9f9f9', padding: 2, borderRadius: 2 }}>
                  {renderComments}
                </List>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Popular Posts</Typography>
              <List>
                {map((post) => (
                  <ListItem key={post} disablePadding>
                    <ListItemText primary={post} sx={{ mb: 1 }} />
                  </ListItem>
                ), popularPosts)}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogContent;
