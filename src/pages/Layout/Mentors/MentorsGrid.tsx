import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import MentorFilterPanel from './MentorFilterPanel';
import MentorCard from './MentorCard';
import image1 from '../../../assets/subesh.jpg';
import imag2 from '../../../assets/images.jpg';

const mentors = [
  {
    id: 1,
    name: 'John Doe',
    skills: ['React', 'JavaScript', 'Node.js'],
    location: 'New York',
    position: 'Software Engineer',
    company: 'TechCorp',
    image: image1,
    about: 'John is an experienced software engineer specializing in full-stack development.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    skills: ['Python', 'Django', 'Machine Learning'],
    location: 'San Francisco',
    position: 'Data Scientist',
    company: 'AI Innovations',
    image: imag2,
    about: `Jane is passionate about data science and machine learning,
    with experience in AI solutions.`,
  },
];

const filters = {
  skills: ['React', 'JavaScript', 'Node.js', 'Python', 'Django', 'Machine Learning'],
  locations: ['New York', 'San Francisco', 'Los Angeles'],
  jobTitles: ['Software Engineer', 'Data Scientist', 'Product Manager'],
  companyNames: ['TechCorp', 'AI Innovations', 'Startup Inc.'],
};

const MentorsGrid = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    skills: [] as string[],
    locations: [] as string[],
    jobTitles: [] as string[],
    companyNames: [] as string[],
  });
  const [searchTerms, setSearchTerms] = useState({
    skills: '',
    locations: '',
    jobTitles: '',
    companyNames: '',
  });

  const [globalSearch, setGlobalSearch] = useState('');

  const handleFilterChange = (filterKey: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => {
      const updated = prev[filterKey].includes(value)
        ? prev[filterKey].filter((item) => item !== value)
        : [...prev[filterKey], value];
      return { ...prev, [filterKey]: updated };
    });
  };

  const removeFilter = (filterKey: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey].filter((item) => item !== value),
    }));
  };

  const handleSearchChange = (filterKey: keyof typeof searchTerms, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [filterKey]: value }));
  };

  const handleGlobalSearchChange = (value: string) => {
    setGlobalSearch(value);
  };

  const getFilteredOptions = (filterKey: keyof typeof selectedFilters, options: string[]) => {
    const searchTerm = searchTerms[filterKey].toLowerCase();
    const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm));
    const selected = selectedFilters[filterKey];
    const unselected = filteredOptions.filter((option) => !selected.includes(option));
    return selected.concat(unselected);
  };

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSkills = !selectedFilters.skills.length
      || selectedFilters.skills.some((skill) => mentor.skills.includes(skill));
    const matchesLocations = !selectedFilters.locations.length
      || selectedFilters.locations.includes(mentor.location);
    const matchesJobTitles = !selectedFilters.jobTitles.length
      || selectedFilters.jobTitles.includes(mentor.position);
    const matchesCompanyNames = !selectedFilters.companyNames.length
      || selectedFilters.companyNames.includes(mentor.company);
    const matchesGlobalSearch = !globalSearch
      || mentor.name.toLowerCase().includes(globalSearch.toLowerCase());
    return matchesSkills && matchesLocations && matchesJobTitles
      && matchesCompanyNames && matchesGlobalSearch;
  });

  return (
    <Box sx={{
      marginTop: 12,
      backgroundColor: '#F9FAFB',
    }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <MentorFilterPanel
            filters={filters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            globalSearch={globalSearch}
            onGlobalSearchChange={handleGlobalSearchChange}
            searchTerms={searchTerms}
            onSearchTermChange={handleSearchChange}
            onRemoveFilter={removeFilter}
            getFilteredOptions={getFilteredOptions}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {filteredMentors.map((mentor) => (
              <Grid item xs={12} sm={6} md={4} key={mentor.id}>
                <MentorCard mentor={mentor} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MentorsGrid;
