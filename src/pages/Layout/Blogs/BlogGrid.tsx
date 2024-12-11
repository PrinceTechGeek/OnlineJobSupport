import React, { useMemo, useCallback } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  CardContent,
  Card,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { map } from 'lodash/fp';
import AIImage from '../../../assets/NetflixImage.png';
import Quantum from '../../../assets/newsBlog.png';
import BlogCard from './BlogCard';

const mockBlogs = [
  {
    id: 1,
    title: 'AI Revolution: Beyond the Hype',
    description: `Exploring groundbreaking AI technologies that are reshaping industries
    and challenging our understanding of intelligence.`,
    category: 'AI',
    tags: ['Machine Learning', 'Deep Learning', 'Ethics'],
    date: '2024-12-01',
    readTime: '8 min',
    author: 'Dr. Elena Rodriguez',
    image: AIImage,
    authorAvatar: 'https://source.unsplash.com/random/200x200?face',
    highlight: true,
  },
  {
    id: 2,
    title: 'Quantum Computing: The Next Frontier',
    description: `Demystifying quantum technologies and their potential to solve complex
    problems beyond classical computing limits.`,
    category: 'Cloud Computing',
    tags: ['Quantum Tech', 'Innovation', 'Future'],
    date: '2024-11-25',
    readTime: '7 min',
    author: 'Prof. Marcus Chen',
    image: Quantum,
    authorAvatar: 'https://source.unsplash.com/random/200x200?men',
    highlight: false,
  },
  {
    id: 3,
    title: 'AI Revolution: Beyond the Hype',
    description: `Exploring groundbreaking AI technologies that are reshaping industries
    and challenging our understanding of intelligence.`,
    category: 'AI',
    tags: ['Machine Learning', 'Deep Learning', 'Ethics'],
    date: '2024-12-01',
    readTime: '8 min',
    author: 'Dr. Elena Rodriguez',
    image: AIImage,
    authorAvatar: 'https://source.unsplash.com/random/200x200?face',
    highlight: true,
  },
  {
    id: 4,
    title: 'Quantum Computing: The Next Frontier',
    description: `Demystifying quantum technologies and their potential to solve complex
    problems beyond classical computing limits.`,
    category: 'Cloud Computing',
    tags: ['Quantum Tech', 'Innovation', 'Future'],
    date: '2024-11-25',
    readTime: '7 min',
    author: 'Prof. Marcus Chen',
    image: Quantum,
    authorAvatar: 'https://source.unsplash.com/random/200x200?men',
    highlight: false,
  },
  {
    id: 5,
    title: 'AI Revolution: Beyond the Hype',
    description: `Exploring groundbreaking AI technologies that are reshaping industries
    and challenging our understanding of intelligence.`,
    category: 'AI',
    tags: ['Machine Learning', 'Deep Learning', 'Ethics'],
    date: '2024-12-01',
    readTime: '8 min',
    author: 'Dr. Elena Rodriguez',
    image: AIImage,
    authorAvatar: 'https://source.unsplash.com/random/200x200?face',
    highlight: true,
  },
  {
    id: 6,
    title: 'Quantum Computing: The Next Frontier',
    description: `Demystifying quantum technologies and their potential to solve complex
    problems beyond classical computing limits.`,
    category: 'Cloud Computing',
    tags: ['Quantum Tech', 'Innovation', 'Future'],
    date: '2024-11-25',
    readTime: '7 min',
    author: 'Prof. Marcus Chen',
    image: Quantum,
    authorAvatar: 'https://source.unsplash.com/random/200x200?men',
    highlight: false,
  },
];

const BlogGrid = () => {
  const navigate = useNavigate();

  const handleCreateBlogClick = useCallback(() => {
    navigate('/create-blog');
  }, [navigate]);

  const blogCards = useMemo(() => map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
    />
  ), mockBlogs), []);

  return (
    <Box sx={{
      background: '#f4f7fb', minHeight: '100vh', py: 6, mb: 6,
    }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 8, mb: 6,
        }}
        >
          <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2, color: '#333' }}>
            Tech Insights Hub
          </Typography>

          <Button
            variant="contained"
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px',
              borderRadius: 2,
              backgroundColor: '#f9f9f9',
              color: 'black',
              fontWeight: '600',
            }}
            onClick={handleCreateBlogClick}
          >
            <FontAwesomeIcon icon={faAdd} style={{ marginRight: '8px' }} />
            Create a Blog
          </Button>
        </Box>

        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mb: 6 }}>
          Welcome to the Tech Insights Hub. Stay updated with the latest trends, innovations,
          and research in the world of technology. From Artificial Intelligence to Quantum
          Computing, our blog provides deep insights and expert perspectives on the most
          exciting topics in tech.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {blogCards.length > 0 ? blogCards : (
                <Grid item xs={12}>
                  <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="h6" color="text.secondary">
                      No blogs found matching your search
                    </Typography>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Recent Blog Posts
                </Typography>
                <Box>
                  {mockBlogs.slice(0, 10).map((blog) => (
                    <Box key={blog.id} sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.primary">
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          style={{ marginRight: '8px' }}
                        />
                        {' '}
                        {blog.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogGrid;
