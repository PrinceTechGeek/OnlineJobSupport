import React, { useState, useMemo, useCallback } from 'react';
import {
  FaBriefcase, FaLaptopCode, FaFilter, FaFileUpload,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@mui/material';
import { map } from 'lodash/fp';
import JobPostForm from './JobPostForm';

const Jobs = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  const features = useMemo(() => [
    {
      icon: <FaBriefcase className="text-5xl text-blue-500" />,
      title: 'Post Freelance Opportunities',
      description: `Mentors and other professionals can post
      job opportunities for mentees to apply to.`,
    },
    {
      icon: <FaLaptopCode className="text-5xl text-green-500" />,
      title: 'Search & Apply',
      description: `Mentees can browse freelance jobs or full-time
      opportunities based on their skills and interests.`,
    },
    {
      icon: <FaFilter className="text-5xl text-yellow-500" />,
      title: 'Smart Filters',
      description: `Filter jobs by skills, experience, location, and
      type (freelance or full-time) to find the perfect match.`,
    },
    {
      icon: <FaFileUpload className="text-5xl text-purple-500" />,
      title: 'Submit Your Resume',
      description: `Easily upload your resume to apply for jobs or
      showcase your skills for freelance projects.`,
    },
  ], []);

  const handleDialogOpen = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setOpenDialog(false);
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Jobs & Freelancing Opportunities
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Discover your next opportunity or post a project to find the right talent.
        </p>
      </div>

      <div
        className="mt-12 max-w-7xl mx-auto grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
      >
        {map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center bg-gradient-to-t
             from-gray-50 via-white to-gray-100 rounded-lg p-6 shadow-xl
             transition-transform transform hover:scale-105"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ), features)}
      </div>

      <div className="mt-6 text-center bg-gradient-to-b from-gray-50
       via-white to-gray-100 py-10 rounded-lg shadow-lg"
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Start Exploring Opportunities!
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl text-lg mx-auto">
          Whether you&apos;re looking to hire or searching for work, our platform has you covered.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row
        justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            type="button"
            onClick={handleDialogOpen}
            className="bg-gray-100 text-gray-800 px-8 py-4
            rounded-full shadow-md hover:bg-gray-200 transition-all focus:ring-4"
          >
            Post a Job
          </button>
          <button
            type="button"
            onClick={() => navigate('/jobs')}
            className="bg-sky-700 text-white px-6 py-3 rounded-full
            shadow-lg hover:bg-sky-800 transition-all"
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="md">
        <JobPostForm open={openDialog} handleClose={handleDialogClose} />
      </Dialog>
    </div>
  );
};

export default Jobs;
