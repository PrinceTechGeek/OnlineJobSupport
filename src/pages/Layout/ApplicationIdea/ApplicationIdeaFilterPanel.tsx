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
import {
  map, curry, keys,
} from 'lodash/fp';

type ApplicationIdeaFilterPanelProps = {
  filters: Record<'technologies' | 'architectureType' | 'accessLevel', string[]>;
  selectedFilters: Record<'technologies' | 'architectureType' | 'accessLevel', string[]>;
  onFilterChange: (filterKey: 'technologies'
  | 'architectureType' | 'accessLevel', value: string) => void;
  globalSearch: string;
  onGlobalSearchChange: (value: string) => void;
  searchTerms: Record<'technologies' | 'architectureType' | 'accessLevel', string>;
  onSearchTermChange: (filterKey: 'technologies'
  | 'architectureType' | 'accessLevel', value: string) => void;
  onRemoveFilter: (filterKey: 'technologies'
  | 'architectureType' | 'accessLevel', value: string) => void;
  getFilteredOptions: (filterKey: 'technologies'
  | 'architectureType' | 'accessLevel', options: string[]) => string[];
};

const ApplicationIdeaFilterPanel: React.FC<ApplicationIdeaFilterPanelProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  globalSearch,
  onGlobalSearchChange,
  searchTerms,
  onSearchTermChange,
  onRemoveFilter,
  getFilteredOptions,
}) => {
  const removeFilter = curry((filterKey: 'technologies'
  | 'architectureType' | 'accessLevel', value: string) => onRemoveFilter(filterKey, value));

  const handleFilterChange = curry((filterKey: 'technologies'
  | 'architectureType' | 'accessLevel', value: string) => onFilterChange(filterKey, value));

  const renderChips = (
    selectedItems: string[],
    filterKey: 'technologies' | 'architectureType' | 'accessLevel',
  ) => map(
    (selectedItem: string) => (
      <Chip
        key={selectedItem}
        label={selectedItem}
        onDelete={() => removeFilter(filterKey, selectedItem)}
        sx={{ marginRight: '8px', marginBottom: '8px', backgroundColor: '#b3e5fc' }}
      />
    ),
    selectedItems,
  );

  return (
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
        placeholder="Search application ideas..."
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
        {map((key: string) => {
          const filterKey = key as keyof typeof selectedFilters;
          return (
            <div key={filterKey} style={{ marginBottom: '10px' }}>
              {renderChips(selectedFilters[filterKey], filterKey)}
            </div>
          );
        }, keys(selectedFilters))}
      </Box>

      <div className="flex flex-col">
        {map((key: string) => {
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
                  {map((option: string) => (
                    <FormControlLabel
                      key={option}
                      control={(
                        <Checkbox
                          checked={selectedFilters[filterKey]?.includes(option)}
                          onChange={() => handleFilterChange(filterKey, option)}
                        />
                      )}
                      label={option}
                    />
                  ), options)}
                </div>
              </AccordionDetails>
            </Accordion>
          );
        }, keys(filters))}
      </div>
    </Paper>
  );
};

export default ApplicationIdeaFilterPanel;
