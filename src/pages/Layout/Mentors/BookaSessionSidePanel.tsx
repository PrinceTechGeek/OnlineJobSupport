import React, { useState } from 'react';
import {
  Drawer, Button, Typography, FormControl, MenuItem, Select, InputLabel, Box, Chip,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { isBefore, parse } from 'date-fns';

const BookASessionSidePanel = ({ open, onClose, mentor }: any) => {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const today = new Date();
  const slots = ['6.00PM', '7.00PM', '8.00PM', '8.30PM', '9.00PM'];

  const handlePlanChange = (event: any) => {
    setSelectedPlan(event.target.value);
    setAvailableSlots(slots);
  };

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

  const handleSubmitBooking = () => {
    onClose();
  };

  const isSlotPast = (slot: string) => {
    const time = parse(slot, 'h:mma', new Date());
    return isBefore(time, new Date());
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        width: 400,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 500,
          padding: 3,
          backgroundColor: '#f9f9f9',
          borderRadius: 2,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          marginBottom: 1,
          fontSize: '1.25rem',
        }}
      >
        Select Your Session Plan and Slot
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: '#757575',
          marginBottom: 3,
          fontSize: '0.875rem',
        }}
      >
        Choose a session plan, pick a date, and select an available time slot for your session.
      </Typography>

      <FormControl fullWidth sx={{ marginBottom: 3 }}>
        <InputLabel id="demo-simple-select-label">
          Select Session Plan
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedPlan}
          label="Select Session Plan"
          onChange={handlePlanChange}
        >
          {mentor.sessionPlans.map((plan: any) => (
            <MenuItem key={plan.name} value={plan.name}>
              {plan.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select Date"
          value={selectedDate}
          onChange={handleDateChange}
          minDate={today}
        />
      </LocalizationProvider>

      <Typography
        variant="body1"
        sx={{ fontWeight: 500, marginTop: 1.5, marginBottom: 1.5 }}
      >
        Available Time Slots
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          marginBottom: 1,
        }}
      >
        {slots.map((slot) => (
          <Chip
            key={slot}
            label={slot}
            onClick={() => !isSlotPast(slot)}
            sx={{
              cursor: isSlotPast(slot) ? 'not-allowed' : 'pointer',
              backgroundColor: isSlotPast(slot) ? '#f1f1f1' : '#e3f2fd',
              color: isSlotPast(slot) ? '#b0bec5' : '#000',
              '&:hover': isSlotPast(slot) ? {} : { backgroundColor: '#90caf9' },
              marginBottom: 1,
            }}
          />
        ))}
      </Box>

      {selectedPlan && selectedDate && availableSlots.length > 0 && (
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, marginBottom: 1 }}
          >
            Selected Plan:
            {' '}
            {selectedPlan}
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: 2 }}
          >
            {mentor.sessionPlans.find((plan: any) => plan.name === selectedPlan)?.description}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
              color: '#0369A1',
            }}
          >
            $
            {mentor.sessionPlans.find((plan: any) => plan.name === selectedPlan)?.price}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 2,
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={onClose}
          sx={{
            width: '48%',
            borderColor: '#757575',
            '&:hover': {
              borderColor: '#0369A1',
            },
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmitBooking}
          sx={{
            width: '48%',
            backgroundColor: '#0369A1',
            '&:hover': {
              backgroundColor: '#075985',
            },
          }}
        >
          Book Session
        </Button>
      </Box>
    </Drawer>
  );
};

export default BookASessionSidePanel;
