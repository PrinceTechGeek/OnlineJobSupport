import React, { useCallback, useMemo, useState } from 'react';
import { Box, Grid } from '@mui/material';
import {
  faShoppingCart,
  faRobot,
  faDumbbell,
  faWallet,
  faBriefcase,
  faPlaneDeparture,
  faUtensils,
  faTasks,
  faUsers,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import { filter, includes } from 'lodash/fp';
import ApplicationCard from './ApplicationCard';
import ApplicationIdeaFilterPanel from './ApplicationIdeaFilterPanel';
import expense from '../../../assets/expenseTracker.png';
import recipe from '../../../assets/recipe finder.jpg';
import chatbot from '../../../assets/aiChatbot.png';
import ecommerce from '../../../assets/ecommerce.png';
import fitness from '../../../assets/fitnessTracker.png';
import task from '../../../assets/taskmanager.png';
import travel from '../../../assets/travel.png';
import job from '../../../assets/jobBoard.png';

const filters = {
  technologies: ['React', 'JavaScript', 'Node.js', 'Python', 'Django', 'Machine Learning'],
  architectureType: ['MicroServices', 'Server Less', 'Distributed', 'Monolithic'],
  accessLevel: ['Full', 'Partial', 'Limited'],
};

type SelectedFilters = {
  technologies: string[];
  architectureType: string[];
  accessLevel: string[];
};

const ideas = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'An advanced e-commerce platform with seamless shopping experience.',
    tags: ['Platform', 'E-commerce', 'React', 'Node.js'],
    details: `This project includes payment gateway integration, a user-friendly
      UI, and admin panel support.`,
    features: ['Seamless checkout', 'Order tracking', 'Customer accounts'],
    icon: faShoppingCart,
    architectureType: 'MicroServices',
    image: ecommerce,
  },
  {
    id: 2,
    title: 'AI Chatbot',
    description: 'AI chatbot for customer support, powered by machine learning.',
    tags: ['AI', 'Chatbot', 'Python'],
    details: 'It can answer FAQs, provide suggestions, and handle complex queries.',
    features: ['Natural language processing', '24/7 availability', 'Multilingual support'],
    icon: faRobot,
    architectureType: 'Monolithic',
    image: chatbot,
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    description: 'Web app to track fitness goals, diet, and workouts.',
    tags: ['Fitness', 'React', 'Health', 'Firebase'],
    details: 'Includes daily reminders, progress charts, and a health dashboard.',
    features: ['Exercise logging', 'Progress tracking', 'Diet suggestions'],
    icon: faDumbbell,
    architectureType: 'Distributed',
    image: fitness,
  },
  {
    id: 4,
    title: 'Task Manager',
    description: 'A productivity tool to manage tasks and deadlines efficiently.',
    tags: ['Productivity', 'React', 'Node.js'],
    details: 'Includes task creation, categorization, priority setting, and deadline tracking.',
    features: ['Task categorization', 'Deadline reminders', 'Priority setting'],
    icon: faTasks,
    architectureType: 'MicroServices',
    image: task,
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A platform to manage and analyze social media accounts in one place.',
    tags: ['Social Media', 'Dashboard', 'React', 'API'],
    details: `Integrates multiple social media APIs to provide insights and statistics on posts,
      followers, and interactions.`,
    features: ['Post scheduling', 'Analytics tracking', 'Multi-account management'],
    icon: faUsers,
    architectureType: 'Server Less',
  },
  {
    id: 6,
    title: 'Online Learning Platform',
    description: 'An interactive learning platform for courses and tutorials.',
    tags: ['Education', 'React', 'Node.js', 'MongoDB'],
    details: 'Allows users to enroll in courses, view tutorial videos, and track progress.',
    features: ['Course management', 'Progress tracking', 'Video tutorials'],
    icon: faGraduationCap,
    architectureType: 'Monolithic',
  },
  {
    id: 7,
    title: 'Travel Planner',
    description: 'A travel planning app that helps users book flights, hotels, and activities.',
    tags: ['Travel', 'React', 'API'],
    details: `Users can plan trips by searching for destinations, booking accommodations,
      and scheduling activities.`,
    features: ['Itinerary planning', 'Flight and hotel booking', 'Activity suggestions'],
    icon: faPlaneDeparture,
    architectureType: 'Distributed',
    image: travel,
  },
  {
    id: 8,
    title: 'Recipe Finder',
    description: 'A recipe search engine that helps users find recipes based on ingredients.',
    tags: ['Food', 'React', 'API'],
    details: 'Allows users to input available ingredients and search for matching recipes.',
    features: ['Ingredient-based search', 'Recipe suggestions', 'Nutritional information'],
    icon: faUtensils,
    architectureType: 'MicroServices',
    image: recipe,
  },
  {
    id: 9,
    title: 'Budget Tracker',
    description: 'An app to track income, expenses, and set financial goals.',
    tags: ['Finance', 'React', 'Firebase'],
    details: 'Helps users categorize their expenses and visualize their financial health.',
    features: ['Expense categorization', 'Monthly budgeting', 'Financial reports'],
    icon: faWallet,
    architectureType: 'Server Less',
    image: expense,
  },
  {
    id: 10,
    title: 'Job Board Platform',
    description: 'A job listing and recruitment platform for both employers and job seekers.',
    tags: ['Jobs', 'React', 'Node.js', 'MongoDB'],
    details: 'Allows users to browse job listings, apply for jobs, and create job postings.',
    features: ['Job search', 'Resume uploading', 'Employer dashboard'],
    icon: faBriefcase,
    architectureType: 'Monolithic',
    image: job,
  },

];

const ApplicationIdeaGrid = () => {
  const [globalSearch, setGlobalSearch] = useState('');
  const [searchTerms, setSearchTerms] = useState({
    technologies: '',
    architectureType: '',
    accessLevel: '',
  });
  const [selectedFilters, setSelectedFilters] = useState({
    technologies: [] as string[],
    architectureType: [] as string[],
    accessLevel: [] as string[],
  });

  const handleGlobalSearchChange = useCallback((value: string) => {
    setGlobalSearch(value);
  }, []);

  const handleSearchTermChange = useCallback((filterKey: string, value: string) => {
    setSearchTerms((prev) => ({
      ...prev,
      [filterKey]: value,
    }));
  }, []);

  const getFilteredOptions = useMemo(
    () => (filterKey: keyof typeof selectedFilters, options: string[]) => {
      const searchTerm = searchTerms[filterKey]?.toLowerCase() || '';
      const filteredOptions = filter(
        (option) => option.toLowerCase().includes(searchTerm),
        options,
      );
      const selected = selectedFilters[filterKey] || [];
      const unselected = filteredOptions.filter((option) => !includes(option, selected));
      return [...selected, ...unselected];
    },
    [searchTerms, selectedFilters],
  );

  const handleFilterChange = useCallback(
    (filterKey: keyof typeof selectedFilters, value: string) => {
      setSelectedFilters((prev) => {
        const updated = prev[filterKey].includes(value)
          ? prev[filterKey].filter((item) => item !== value)
          : [...prev[filterKey], value];
        return { ...prev, [filterKey]: updated };
      });
    },
    [setSelectedFilters],
  );

  const handleRemoveFilter = useCallback(
    (filterKey: keyof typeof selectedFilters, value: string) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [filterKey]: prev[filterKey].filter((item) => item !== value),
      }));
    },
    [setSelectedFilters],
  );

  const filteredIdeas = ideas.filter((idea) => {
    const matchesSearch = globalSearch.trim()
      ? idea.title.toLowerCase().includes(globalSearch.toLowerCase())
        || idea.description.toLowerCase().includes(globalSearch.toLowerCase())
      : true;

    const matchesFilters = Object.keys(selectedFilters).every((key) => {
      const typedKey = key as keyof SelectedFilters;
      const selectedTags = selectedFilters[typedKey];
      return selectedTags.length === 0 || idea.tags.some((tag) => selectedTags.includes(tag));
    });

    return matchesSearch && matchesFilters;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        padding: '10px',
      }}
    >
      <Grid container spacing={4} sx={{ marginBottom: 14, marginTop: 6 }}>
        <Grid item xs={12} md={3}>
          <ApplicationIdeaFilterPanel
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            globalSearch={globalSearch}
            onGlobalSearchChange={handleGlobalSearchChange}
            searchTerms={searchTerms}
            onSearchTermChange={handleSearchTermChange}
            onRemoveFilter={handleRemoveFilter}
            getFilteredOptions={getFilteredOptions}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredIdeas.map((idea) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={idea.id}

              >
                <ApplicationCard ideas={idea} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicationIdeaGrid;
