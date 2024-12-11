import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Paper,
  Divider,
  Link,
  Grid,
} from '@mui/material';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceCard from '../../../Components/ServiceCard';
import expense from '../../../assets/expenseTracker.png';

const ApplicationIdeaContent = () => {
  const applicationIdea = {
    title: 'Budget Tracker',
    description: 'The Budget Tracker app helps individuals and businesses keep track of their income and expenses. It allows users to categorize their spending, set financial goals, and visualize their financial health through interactive reports and graphs. This app is perfect for anyone looking to gain more control over their finances and make smarter, data-driven decisions. Users can also set monthly budgets, track recurring payments, and generate detailed reports to monitor progress.',
    tags: ['Finance', 'React', 'Firebase', 'Budgeting'],
    details: 'This app helps users categorize their expenses, track recurring payments, and visualize their spending patterns.',
    features: [
      'Expense categorization by type (Food, Bills, Entertainment, etc.)',
      'Monthly budgeting with notifications for overspending',
      'Generate financial reports (pie charts, bar graphs)',
      'Track and manage recurring expenses',
      'Cloud storage for data security (via Firebase)',
    ],
    icon: faWallet,
    architectureType: 'Serverless with Firebase Backend',
    image: expense,
    designFile: '../../../assets/budget.png',
    contactInfo: 'For more info, contact us at support@techinnovators.com',
    companyProfile: 'Tech Innovators is a leading software company focused on creating innovative tech solutions for businesses and individuals. We specialize in building secure, scalable applications with a focus on user experience.',
    appType: 'Mobile & Web',
  };

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        margin: 'auto',
        padding: 2,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
      }}
    >
      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ padding: 3, borderRadius: '16px', backgroundColor: '#ffffff' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: '600',
                marginBottom: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon
                icon={applicationIdea.icon}
                style={{ marginRight: '12px', fontSize: '40px', color: '#075985' }}
              />
              {applicationIdea.title}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: '500', color: '#4A5568', marginBottom: 2 }}>
              {applicationIdea.description}
            </Typography>

            <Box sx={{
              display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 3,
            }}
            >
              <Typography variant="body1" sx={{ fontWeight: '500', color: '#4A5568' }}>
                <strong>App Type:</strong>
                {' '}
                {applicationIdea.appType}
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontWeight: '600', marginBottom: 1 }}>
              Key Features:
            </Typography>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
              {applicationIdea.features.map((feature) => (
                <li key={feature}>
                  <Typography variant="body1" sx={{ color: '#4A5568' }}>
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>

            <Typography variant="body1" sx={{ fontWeight: '500', marginBottom: 1, marginTop: 2 }}>
              Technologies Used:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {applicationIdea.tags.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    backgroundColor: '#E0F2FE',
                    color: '#0369A1',
                    fontWeight: '500',
                  }}
                />
              ))}
            </Box>

            <Typography variant="body1" sx={{ fontWeight: '600', marginBottom: 1, marginTop: 2 }}>
              Architecture Type:
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A5568' }}>
              {applicationIdea.architectureType}
            </Typography>

            <Box sx={{ marginTop: 3, textAlign: 'center' }}>
              <img
                src={applicationIdea.image}
                alt="demo App img"
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            </Box>

            <Typography variant="body1" sx={{ fontWeight: '600', marginBottom: 1, marginTop: 3 }}>
              About the Company:
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A5568' }}>
              {applicationIdea.companyProfile}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: '600', marginBottom: 1, marginTop: 3 }}>
              Contact Information:
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A5568' }}>
              {applicationIdea.contactInfo}
            </Typography>

            <Box sx={{ marginTop: 3 }}>
              <Typography variant="body1" sx={{ fontWeight: '600', marginBottom: 1 }}>
                Download UI Design & Application Details
              </Typography>
              <Link href={applicationIdea.designFile} download>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: '600',
                    padding: '7px 12px',
                    background: '#075985',
                  }}
                >
                  Download Design File
                </Button>
              </Link>
            </Box>

            <Divider sx={{ marginTop: 3 }} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <ServiceCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicationIdeaContent;
