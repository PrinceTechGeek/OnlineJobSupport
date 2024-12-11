import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Checkbox,
  Chip,
  Paper,
} from '@mui/material';
import { FaFilter } from 'react-icons/fa';

interface MentorFilterPanelProps {
  filters: Record<'skills' | 'locations' | 'jobTitles' | 'companyNames', string[]>;
  selectedFilters: Record<'skills' | 'locations' | 'jobTitles' | 'companyNames', string[]>;
  onFilterChange: (filterKey: 'skills' | 'locations'
  | 'jobTitles' | 'companyNames', value: string) => void;
  globalSearch: string;
  onGlobalSearchChange: (value: string) => void;
  searchTerms: Record<'skills' | 'locations' | 'jobTitles' | 'companyNames', string>;
  onSearchTermChange: (filterKey: 'skills' | 'locations'
  | 'jobTitles' | 'companyNames', value: string) => void;
  onRemoveFilter: (filterKey: 'skills' | 'locations'
  | 'jobTitles' | 'companyNames', value: string) => void;
  getFilteredOptions: (filterKey: 'skills' | 'locations'
  | 'jobTitles' | 'companyNames', options: string[]) => string[];
}

const MentorFilterPanel: React.FC<MentorFilterPanelProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  globalSearch,
  onGlobalSearchChange,
  searchTerms,
  onSearchTermChange,
  onRemoveFilter,
  getFilteredOptions,
}) => (
  <Paper elevation={3} className="p-6 rounded-lg shadow-lg bg-white sticky top-16">
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <FaFilter style={{ marginRight: '6px' }} />
      Filter By
    </Typography>

    <TextField
      fullWidth
      placeholder="Search mentors..."
      value={globalSearch}
      onChange={(e) => onGlobalSearchChange(e.target.value)}
      variant="outlined"
      sx={{
        marginBottom: '15px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
        '& .MuiOutlinedInput-input': {
          fontSize: '15px',
          fontWeight: '500',
          color: '#111827',
        },
      }}
    />

    <Box sx={{ marginBottom: '15px' }}>
      {Object.keys(selectedFilters).map((key) => {
        const filterKey = key as keyof typeof selectedFilters;
        return (
          <div key={filterKey} style={{ marginBottom: '10px' }}>
            {selectedFilters[filterKey].map((selectedItem) => (
              <Chip
                key={selectedItem}
                label={selectedItem}
                onDelete={() => onRemoveFilter(filterKey, selectedItem)}
                sx={{ marginRight: '8px', marginBottom: '8px', backgroundColor: '#E0F2FE' }}
              />
            ))}
          </div>
        );
      })}
    </Box>

    <div className="flex flex-col">
      {Object.keys(filters).map((key) => {
        const filterKey = key as keyof typeof selectedFilters;
        const options = getFilteredOptions(filterKey, filters[filterKey]);

        return (
          <Accordion key={key} sx={{ marginBottom: '10px' }}>
            <AccordionSummary>
              <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                fullWidth
                size="small"
                placeholder={`Search ${key}...`}
                variant="outlined"
                value={searchTerms[filterKey]}
                onChange={(e) => onSearchTermChange(filterKey, e.target.value)}
                sx={{
                  marginBottom: '15px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
              />
              <div className="flex flex-col">
                {options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={(
                      <Checkbox
                        checked={selectedFilters[filterKey]?.includes(option)}
                        onChange={() => onFilterChange(filterKey, option)}
                      />
                    )}
                    label={option}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  </Paper>
);

export default MentorFilterPanel;
