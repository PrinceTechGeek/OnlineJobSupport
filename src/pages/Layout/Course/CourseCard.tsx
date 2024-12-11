import React from 'react';
import {
  Card, CardContent, CardMedia, Typography, Box, Button,
} from '@mui/material';
import type { Course } from '#domain/Obudle/Course';

type CourseCardProps = {
  course: Course;
  onClick: () => void;
};

const CourseCard = ({ course, onClick }: CourseCardProps) => (
  <Card
    elevation={4}
    onClick={onClick}
    sx={{
      borderRadius: 2,
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      },
    }}
  >
    <CardMedia
      component="img"
      image={course.thumbnail}
      alt={course.title}
      sx={{
        height: 200,
        objectFit: 'cover',
      }}
    />
    <CardContent>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: '#212529',
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {course.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {course.instructor}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
        }}
      >
        {course.description.slice(0, 100)}
        ...
        <Button variant="text" size="small" color="primary">
          Read More
        </Button>
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        <Typography variant="body2" color="textSecondary" fontWeight={600}>
          ⭐
          {' '}
          {course.rating}
        </Typography>
        <Typography variant="body2" color="textSecondary" fontWeight={600}>
          {course.learners}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default CourseCard;
