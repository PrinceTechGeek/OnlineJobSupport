import React, { useState, useCallback, useMemo } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Grid,
  Rating,
} from '@mui/material';
import { jsPDF as JsPdf } from 'jspdf';
import CourseServices from './CourseServices';
import ReviewsandDemand from './ReviewsandDemand';
import EnrollDialog from '../../../Components/EnrollDialog';

const CourseContent = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const course = useMemo(() => ({
    title: 'DevOps Training Course with Certificate',
    learners: 180426,
    ratings: 5,
    totalRatings: 79900,
    previewVideoId: 'dQw4w9WgXcQ',
    description:
        `Obudle DevOps training Course will provide you with in-depth knowledge of various DevOps
        tools, including Git, Jenkins, Docker, Ansible, Terraform, Kubernetes, Prometheus, and
        Grafana. This course is entirely hands-on and designed to help you become a certified
        practitioner through best practices in Continuous Development, Configuration Management,
        and Integration.`,
    freeCourseOffer: 'Python Scripting, SQL & Linux Course',
    liveClassDate: '14th Dec 2024',
    cloudAccessOffer: '60 days of free Cloud Lab access worth ₹4000.',
    reviews: {
      google: 4.5,
      g2: 4.6,
      sitejabber: 4.7,
    },
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
  }), []);

  const lessons = useMemo(
    () => [
      'Introduction to DevOps',
      'Version Control with Git',
      'Continuous Integration & Jenkins',
      'Docker & Containers',
      'Infrastructure Automation with Ansible',
      'Cloud Computing and Kubernetes',
      'Monitoring with Prometheus & Grafana',
    ],
    [],
  );

  const handleTabChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => setTabIndex(newValue),
    [],
  );

  const handleDialogOpen = useCallback(() => setOpenDialog(true), []);
  const handleDialogClose = useCallback(() => setOpenDialog(false), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDownloadCurriculum = useCallback(() => {
    const doc = new JsPdf();
    doc.text('Course Curriculum', 20, 20);
    lessons.forEach((lesson, index) => {
      doc.text(`${index + 1}. ${lesson}`, 20, 30 + index * 10);
    });
    doc.save('devops_curriculum.pdf');
  }, [lessons]);

  return (
    <Box p={3} maxWidth="lg" mx="auto" mt={8}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {course.title}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="h6" sx={{ mr: 2 }}>
              <strong>{course.learners.toLocaleString()}</strong>
              {' '}
              Learners
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={course.ratings} readOnly />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                (
                {course.totalRatings.toLocaleString()}
                {' '}
                Ratings)
              </Typography>
            </Typography>
          </Box>

          <Card elevation={3} sx={{ mb: 3 }}>
            <CardMedia
              component="iframe"
              height="300"
              src={`https://www.youtube.com/embed/${course.previewVideoId}`}
              title="Course Preview Video"
            />
          </Card>

          <Typography variant="subtitle1" color="primary" gutterBottom fontWeight="bold">
            Free:
            {' '}
            {course.freeCourseOffer}
          </Typography>

          <Typography variant="body1" color="textSecondary" paragraph>
            {course.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph fontStyle="italic">
            {course.cloudAccessOffer}
          </Typography>
          <Typography variant="body2" color="error" paragraph>
            Live Online Classes starting on
            {' '}
            <strong>{course.liveClassDate}</strong>
            .
          </Typography>

          <Box display="flex" gap={2} mt={2}>
            <Button variant="contained" color="primary" size="large" onClick={handleDialogOpen}>
              Enroll Now
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={handleDownloadCurriculum}
            >
              Download Lessons
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <ReviewsandDemand reviews={course.reviews} />
        </Grid>
      </Grid>

      <Box mt={5}>
        <CourseServices tabIndex={tabIndex} handleTabChange={handleTabChange} course={course} />
      </Box>

      <EnrollDialog
        dialogTitle="Apply for a New Course"
        open={openDialog}
        onClose={handleDialogClose}
        formData={formData}
        onInputChange={handleInputChange}
      />
    </Box>
  );
};

export default CourseContent;
