import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import type { Job } from '#domain/Obudle/Jobs';
import FilterPanel from './JobFilterPanel';
import JobCard from './JobCard';

const JobGrid = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    skills: [] as string[],
    locations: [] as string[],
    salaryRanges: [] as string[],
    jobTypes: [] as string[],
  });

  const [globalSearch, setGlobalSearch] = useState('');
  const [searchTerms, setSearchTerms] = useState({
    skills: '',
    locations: '',
    salaryRanges: '',
    jobTypes: '',
  });

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'TechCorp',
      salary: '$80,000 - $100,000',
      location: 'New York, NY',
      skills: ['React', 'JavaScript', 'CSS'],
      description: 'We are looking for a passionate frontend developer to join our team.',
      jobType: 'Full-time',
      experience: '1-2 years',
    },
    {
      id: '2',
      title: 'Data Scientist',
      company: 'Data Solutions',
      salary: '$90,000 - $120,000',
      location: 'San Francisco, CA',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      description: 'Join our team to work on innovative data-driven projects.',
      jobType: 'Full-time',
      experience: '3-5 years',
    },
  ];

  const filters = {
    skills: ['React', 'JavaScript', 'Python', 'Machine Learning', 'CSS', 'Data Analysis'],
    locations: ['New York, NY', 'San Francisco, CA', 'Los Angeles, CA'],
    salaryRanges: ['$50,000 - $70,000', '$70,000 - $90,000', '$90,000 - $120,000'],
    jobTypes: ['Full-time', 'Part-time', 'Freelance'],
  };

  const handleFilterChange = (filterKey: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => {
      const updated = prev[filterKey].includes(value)
        ? prev[filterKey].filter((item) => item !== value)
        : [...prev[filterKey], value];
      return { ...prev, [filterKey]: updated };
    });
  };

  const handleSearchChange = (filterKey: keyof typeof searchTerms, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [filterKey]: value }));
  };

  const removeFilter = (filterKey: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterKey]: prev[filterKey].filter((item) => item !== value),
    }));
  };

  const getFilteredOptions = (filterKey: keyof typeof filters, options: string[]) => {
    const searchTerm = searchTerms[filterKey].toLowerCase();
    return options.filter((option) => option.toLowerCase().includes(searchTerm));
  };

  const handleGlobalSearchChange = (value: string) => {
    setGlobalSearch(value);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSkills = !selectedFilters.skills.length
      || selectedFilters.skills.some((skill) => job.skills.map(
        (s) => s.toLowerCase(),
      ).includes(skill.toLowerCase()));

    const matchesLocations = !selectedFilters.locations.length
    || selectedFilters.locations.includes(job.location);

    const matchesSalaryRanges = !selectedFilters.salaryRanges.length
      || selectedFilters.salaryRanges.some((range) => job.salary === range);

    const matchesJobTypes = !selectedFilters.jobTypes.length
    || selectedFilters.jobTypes.includes(job.jobType);

    const matchesGlobalSearch = !globalSearch
    || job.title.toLowerCase().includes(globalSearch.toLowerCase());

    return matchesSkills && matchesLocations && matchesSalaryRanges
    && matchesJobTypes && matchesGlobalSearch;
  });

  return (
    <Box className="p-6 mt-20 bg-gray-50">
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <FilterPanel
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
            {filteredJobs.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobGrid;
