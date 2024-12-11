import React, { useCallback, useMemo, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {
  concat,
  filter,
  includes,
  some,
} from 'lodash/fp';
import ProjectCard from './ProjectCard';
import ProjectFilterPanel from './ProjectFilterPanel';
import pizza from '../../../assets/pizzaOrder.png';
import blog from '../../../assets/newsBlog.png';
import netflix from '../../../assets/NetflixImage.png';
import ProjectDrawer from './ProjectContentSidePanel';

const filters = {
  technologies: ['React', 'JavaScript', 'Node.js', 'Python', 'Django', 'Machine Learning'],
  stacks: ['Software Engineer', 'Data Scientist', 'Product Manager'],
};
const projects = [
  {
    id: '1',
    title: 'E-Commerce Website',
    description: `If you are looking for more advanced features, like combobox, multiselect,
     autocomplete, async or creatable support, head to the Autocomplete component. It's
     meant to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
    image: pizza,
    stack: 'Mern Stack Development',
  },
  {
    id: '2',
    title: 'Personal Blog',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['Next.js', 'GraphQL', 'MongoDB'],
    image: blog,
    stack: 'Next.js with GraphQL',
  },
  {
    id: '3',
    title: 'Real-Time Chat App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'Socket.io'],
    image: 'chatapp.png',
    stack: 'ReactJS with Socket.io',
  },
  {
    id: '4',
    title: 'Fitness Tracker',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    image: 'fitness.png',
    stack: 'React Native with Node.js',
  },
  {
    id: '5',
    title: 'Job Board',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    image: 'jobboard.png',
    stack: 'ReactJS with MongoDB',
  },
  {
    id: '6',
    title: 'Weather App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'OpenWeather API'],
    image: 'weather.png',
    stack: 'ReactJS with API Integration',
  },
  {
    id: '7',
    title: 'Movie Database',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'OpenWeather API'],
    image: netflix,
    stack: 'ReactJS with TMDB API',
  },
  {
    id: '8',
    title: 'Social Media App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'Firebase'],
    image: 'socialmedia.png',
    stack: 'ReactJS with Firebase',
  },
  {
    id: '9',
    title: 'Budget Tracker',
    description: 'An app to track personal expenses, create budgets, and visualize financial data.',
    technologies: ['React.js', 'Node.js', 'Chart.js'],
    image: 'budget.png',
    stack: 'ReactJS with Chart.js',
  },
  {
    id: '10',
    title: 'To-Do List App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    image: 'todo.png',
    stack: 'ReactJS with MongoDB',
  },
  {
    id: '11',
    title: 'Online Learning Platform',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API'],
    image: 'learning.png',
    stack: 'Mern Stack Development',
  },
  {
    id: '12',
    title: 'Stock Market Tracker',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Stock API', 'Chart.js'],
    image: 'stock.png',
    stack: 'ReactJS with Stock API',
  },
  {
    id: '13',
    title: 'Recipe Finder App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Edamam API'],
    image: 'recipe.png',
    stack: 'ReactJS with Edamam API',
  },
  {
    id: '14',
    title: 'Photo Gallery',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    image: 'photo.png',
    stack: 'Mern Stack Development',
  },
  {
    id: '15',
    title: 'AI Chatbot',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['Node.js', 'Dialogflow', 'Express.js'],
    image: 'chatbot.png',
    stack: 'Node.js with Dialogflow',
  },
  {
    id: '16',
    title: 'Event Planner',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'MongoDB'],
    image: 'eventplanner.png',
    stack: 'ReactJS with MongoDB',
  },
  {
    id: '17',
    title: 'Virtual Reality Game',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['Unity', 'C#'],
    image: 'vrgame.png',
    stack: 'Unity with C#',
  },
  {
    id: '18',
    title: 'Travel Planner',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React.js', 'Node.js', 'Travel API'],
    image: 'travelplanner.png',
    stack: 'ReactJS with Travel API',
  },
  {
    id: '19',
    title: 'Online Quiz App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'quiz.png',
    stack: 'ReactJS with MongoDB',
  },
  {
    id: '20',
    title: 'Task Manager App',
    description: `If you are looking for more advanced features, like combobox, multiselect,
    autocomplete, async or creatable support, head to the Autocomplete component. It's meant
     to be an improved version of the "react-select" and "downshift" packages.`,
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'taskmanager.png',
    stack: 'ReactJS with MongoDB',
  },
];

const ProjectGrid = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    technologies: [] as string[],
    stacks: [] as string[],
  });

  const [searchTerms, setSearchTerms] = useState({
    technologies: '',
    stacks: '',
    locations: '',
    companyNames: '',
  });

  const [globalSearch, setGlobalSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleFilterChange = useCallback(
    (filterKey: keyof typeof selectedFilters, value: string) => {
      setSelectedFilters((prev) => {
        const updated = includes(value, prev[filterKey])
          ? filter((item) => item !== value, prev[filterKey])
          : concat(prev[filterKey], [value]);
        return { ...prev, [filterKey]: updated };
      });
    },
    [],
  );

  const handleRemoveFilter = useCallback(
    (filterKey: keyof typeof selectedFilters, value: string) => {
      setSelectedFilters((prev) => ({
        ...prev,
        [filterKey]: filter((item) => item !== value, prev[filterKey]),
      }));
    },
    [],
  );

  const handleSearchChange = useCallback(
    (filterKey: keyof typeof searchTerms, value: string) => {
      setSearchTerms((prev) => ({ ...prev, [filterKey]: value }));
    },
    [],
  );

  const handleGlobalSearchChange = useCallback((value: string) => {
    setGlobalSearch(value);
  }, []);

  const getFilteredOptions = useMemo(() => (
    filterKey: keyof typeof selectedFilters,
    options: string[],
  ) => {
    const searchTerm = searchTerms[filterKey].toLowerCase();
    const filteredOptions = filter((option) => option.toLowerCase().includes(searchTerm), options);
    const selected = selectedFilters[filterKey];
    const unselected = filter((option) => !includes(option, selected), filteredOptions);
    return concat(selected, unselected);
  }, [searchTerms, selectedFilters]);

  const filteredProjects = useMemo(() => filter((project) => {
    const matchesTechnologies = !selectedFilters.technologies.length
      || some((tech) => includes(tech, project.technologies), selectedFilters.technologies);
    const matchesStacks = !selectedFilters.stacks.length
      || includes(project.stack, selectedFilters.stacks);
    const matchesGlobalSearch = !globalSearch
      || project.title.toLowerCase().includes(globalSearch.toLowerCase())
      || project.description.toLowerCase().includes(globalSearch.toLowerCase());

    return matchesTechnologies && matchesStacks && matchesGlobalSearch;
  }, projects), [selectedFilters, globalSearch]);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const handleProjectClick = useCallback((project: any) => {
    setSelectedProject(project);
    setDrawerOpen(true);
  }, []);

  return (
    <Box sx={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <ProjectFilterPanel
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            globalSearch={globalSearch}
            onGlobalSearchChange={handleGlobalSearchChange}
            searchTerms={searchTerms}
            onSearchTermChange={handleSearchChange}
            onRemoveFilter={handleRemoveFilter}
            getFilteredOptions={getFilteredOptions}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '20px' }}>
            Projects (
            {filteredProjects.length}
            )
          </Typography>

          <Grid container spacing={3}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {selectedProject && (
        <ProjectDrawer
          selectedProject={selectedProject}
          open={drawerOpen}
          onClose={handleCloseDrawer}
        />
      )}
    </Box>
  );
};

export default ProjectGrid;
