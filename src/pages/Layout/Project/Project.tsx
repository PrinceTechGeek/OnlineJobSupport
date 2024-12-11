import { Dialog } from '@mui/material';
import React, { useState, useMemo, useCallback } from 'react';
import { map } from 'lodash/fp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faMobileAlt,
  faRobot,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import ProjectPostForm from './ProjectPostForm';

const Projects = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = useCallback(() => {
    setOpenDialog(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const projectCategories = useMemo(() => [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faDesktop} className="text-4xl text-sky-700" />,
      title: 'Web Development',
      description: 'Build interactive websites using the latest web technologies.',
      benefit: 'Develop skills in front-end and back-end development.',
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-orange-600" />,
      title: 'Mobile Apps',
      description: 'Create mobile applications for iOS and Android platforms.',
      benefit: 'Gain experience with mobile development frameworks like React Native.',
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faRobot} className="text-4xl text-green-600" />,
      title: 'AI Projects',
      description: 'Dive into the world of artificial intelligence and machine learning.',
      benefit: 'Work on real-world AI applications and data processing tasks.',
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faDatabase} className="text-4xl text-purple-600" />,
      title: 'Data Science',
      description: 'Learn data analysis, visualization, and machine learning techniques.',
      benefit: 'Develop analytical skills to solve real-world data problems.',
    },
  ], []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Explore College Projects and Build Your Skills
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Discover exciting college projects across various domains and
          take your learning to the next level. Whether you&apos;re a beginner or an expert,
          there&apos;s something for everyone!
        </p>
      </div>

      <div className="mt-6 py-8 rounded-lg max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-sky-700 text-center">
          Project Categories
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center bg-gradient-to-t from-gray-50
               via-white to-gray-100 rounded-lg p-6 shadow-xl transition-transform transform
               hover:scale-105"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-bold text-gray-800">{category.title}</h3>
              <p className="text-gray-600 mt-4">{category.description}</p>
              <p className="text-gray-500 mt-4 italic">{category.benefit}</p>
            </div>
          ), projectCategories)}
        </div>
      </div>

      <div className="mt-6 text-center bg-gradient-to-b from-gray-50 via-white
       to-gray-100 py-10 rounded-lg shadow-lg"
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Start Your College Project Today
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl text-lg mx-auto">
          Whether you want to build a web app, mobile app, or work on AI and data science projects,
          the College Projects page provides you with everything you need
          to get started. Dive in now!
        </p>
        <div
          className="mt-8 flex flex-col sm:flex-row justify-center
          space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="/projects"
            className="bg-sky-800 text-white px-10 py-4 rounded-full shadow-lg
            hover:bg-sky-900"
          >
            Explore All Projects
          </a>
          <button
            type="button"
            onClick={handleDialogOpen}
            className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full
            shadow-md hover:bg-gray-200 transition-all focus:ring-4"
          >
            Post a Project
          </button>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="md">
        <ProjectPostForm
          open={openDialog}
          handleClose={handleDialogClose}
        />
      </Dialog>
    </div>
  );
};

export default Projects;
