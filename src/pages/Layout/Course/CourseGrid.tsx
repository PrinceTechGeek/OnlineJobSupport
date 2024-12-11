import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import CourseCard from './CourseCard';
import CategoryTabs from './CourseCategoryTabs';
import Course1 from '../../../assets/course1.jpg';
import Course2 from '../../../assets/course2.jpg';

const CourseList = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: 'ChatGPT Complete Guide',
      instructor: 'Julian Melanson, Benza Marman',
      rating: 4.6,
      learners: '3M+ learners',
      description:
            `Master ChatGPT with this comprehensive guide covering everything from the basics to
            advanced use cases, helping you harness AI in your daily tasks effectively.`,
      thumbnail: Course1,
      category: 'Data Science',
      whatYouWillLearn: [
        'Build scalable React applications',
        'Understand React hooks and state management',
        'Integrate APIs effectively',
        'Optimize performance and scalability',
      ],
      videoId: 'mnULGqkVONI',
      curriculum: [
        'Introduction to React',
        'Understanding JSX and Components',
        'State and Props Management',
        'React Router',
        'Hooks Deep Dive',
      ],
      nextSession: {
        date: '2024-12-05',
        time: '6:00 PM IST',
        amount: 1499,
      },
      selfPacedLearning: {
        amount: 999,
        description:
            'Access pre-recorded video sessions anytime, anywhere. Learn at your own pace!',
      },
      reviews: [
        {
          user: 'John Doe',
          rating: 5,
          comment: 'This course is phenomenal! It helped me leverage ChatGPT in my daily tasks.',
        },
        {
          user: 'Jane Smith',
          rating: 4,
          comment: 'Very insightful, but I would have liked more hands-on examples.',
        },
      ],
    },
    {
      id: 2,
      title: 'The Complete AI-Powered Copywriting',
      instructor: 'Ing. Tomas Moravek',
      rating: 4.5,
      learners: '1.6K learners',
      description:
            `Learn how to use AI tools to enhance your copywriting skills and create impactful,
            engaging content for marketing, websites, and social media.`,
      thumbnail: Course2,
      category: 'IT Certifications',
      whatYouWillLearn: [
        'AI tools for creating content',
        'How to write compelling copy using AI',
        'Improving engagement through AI-generated content',
      ],
      videoId: '_rV5HoK04qo',
      lessons: [
        { title: 'Introduction to AI in Copywriting', duration: '8m' },
        { title: 'Using AI for Content Creation', duration: '10m' },
        { title: 'Creating Engaging Copy', duration: '12m' },
        { title: 'Advanced AI Copywriting Tools', duration: '15m' },
      ],
      reviews: [
        {
          user: 'Samuel Green',
          rating: 4,
          comment: 'The AI tools demonstrated are amazing! Very practical course.',
        },
        {
          user: 'Emily Clark',
          rating: 5,
          comment: 'This course revolutionized my approach to copywriting.',
        },
      ],
      instructorDetails: {
        name: 'Ing. Tomas Moravek',
        profileImage: '../../assets/instructors/tomas.jpg',
        bio: `An expert in AI-powered marketing and copywriting tools,
        with a passion for teaching digital strategies.`,
        company: 'Digital Innovations Agency',
      },
    },
    {
      id: 3,
      title: 'Mastering Leadership Skills',
      instructor: 'Dr. Susan Watts',
      rating: 4.7,
      learners: '2.5K learners',
      description:
            `Develop essential leadership skills with actionable insights and strategies to
            lead teams, manage conflicts, and drive success in any organization.`,
      thumbnail: Course1,
      category: 'Leadership',
      whatYouWillLearn: [
        'Leadership strategies for diverse teams',
        'How to manage conflicts effectively',
        'How to drive success through leadership',
      ],
      videoId: 'Or3i7MNgUzY',
      lessons: [
        { title: 'Introduction to Leadership', duration: '14m' },
        { title: 'Leading Diverse Teams', duration: '16m' },
        { title: 'Conflict Management Techniques', duration: '20m' },
        { title: 'Driving Success in Organizations', duration: '18m' },
      ],
      reviews: [
        {
          user: 'Alice Johnson',
          rating: 5,
          comment: 'Dr. Watts provides excellent, real-world leadership examples.',
        },
        {
          user: 'Michael Brown',
          rating: 4,
          comment: 'A great course for new managers. Could use more case studies.',
        },
      ],
      instructorDetails: {
        name: 'Dr. Susan Watts',
        profileImage: '../../assets/instructors/susan.jpg',
        bio: `A seasoned leadership consultant and author, helping executives and
         teams thrive in complex environments.`,
        company: 'Global Leadership Institute',
      },
    },
  ];

  const categories = [
    'All',
    'Data Science',
    'IT Certifications',
    'Leadership',
    'Web Development',
    'Communication',
    'Business Analytics & Intelligence',
    'Sql',
    'Data Visualization',
    'Business Analysis',
  ];

  const filteredCourses = selectedTab === 0
    ? courses
    : courses.filter((course) => course.category === categories[selectedTab]);

  const handleTabChange = (newValue: number) => {
    setSelectedTab(newValue);
  };

  const handleCardClick = (id: number) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="bg-gray-50 p-6 mt-16 max-w-7xl mx-auto">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.8rem', sm: '2.2rem' },
          color: '#003580',
          marginBottom: '1rem',
        }}
      >
        All the Skills You Need in One Place
      </Typography>
      <Typography
        variant="body1"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem' },
          color: '#495057',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}
      >
        From critical skills to technical topics, Udemy supports your
        professional development.
      </Typography>

      <CategoryTabs
        categories={categories}
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />

      <Grid container spacing={3} mt={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard course={course} onClick={() => handleCardClick(course.id)} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CourseList;
