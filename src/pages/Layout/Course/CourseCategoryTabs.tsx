import React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import { map } from 'lodash/fp';

type CategoryTabsProps = {
  categories: string[];
  selectedTab: number;
  onTabChange: (newValue: number) => void;
};

const CategoryTabs = ({ categories, selectedTab, onTabChange }: CategoryTabsProps) => (
  <AppBar
    position="static"
    color="default"
    elevation={0}
    sx={{
      backgroundColor: '#f8f9fa',
      borderRadius: 2,
      marginY: 2,
    }}
  >
    <Tabs
      value={selectedTab}
      onChange={(event, newValue) => onTabChange(newValue)}
      textColor="primary"
      indicatorColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        '& .MuiTab-root': {
          fontWeight: 'bold',
          textTransform: 'capitalize',
          fontSize: '1rem',
        },
      }}
    >
      {map<string, JSX.Element>((category) => (
        <Tab key={category} label={category} />
      ))(categories)}
    </Tabs>
  </AppBar>
);

export default CategoryTabs;
