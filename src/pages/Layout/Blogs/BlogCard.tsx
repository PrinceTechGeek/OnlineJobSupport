import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { BlogCardProps } from '#domain/Obudle/BlogCard';

const BlogCard = ({ blog }: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        marginBottom: 5,
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
        },
      }}
      onClick={() => navigate(`/blog/${blog.id}`)}
    >
      <CardMedia
        component="img"
        height="240"
        image={blog.image}
        alt={blog.title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {blog.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            posted by
            {' '}
            {blog.author}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            posted on
            {' '}
            {blog.date}
            {' '}
            |
            {' '}
            {blog.readTime}
            {' '}
            read
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
