import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Dialog } from '@mui/material';
import { map } from 'lodash/fp';
import CoursePostForm from './CoursePostForm';

const Course = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const courses = useMemo(() => [
    {
      id: 1,
      title: 'Web Development',
      description: `Learn the fundamentals of web development,
      from HTML and CSS to JavaScript and React.`,
    },
    {
      id: 2,
      title: 'Data Science',
      description: `Learn how to analyze data, build models,
      and gain insights using Python and machine learning tools.`,
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: `Learn design principles, wireframing,
      prototyping, and user testing for creating user-friendly interfaces.`,
    },
  ], []);

  const handleDialogOpen = useCallback(() => setOpenDialog(true), []);
  const handleDialogClose = useCallback(() => setOpenDialog(false), []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Learn, Grow, Succeed
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Explore a variety of expert-led courses designed to help you
          build the skills you need for a successful career.
        </p>
      </div>

      <div
        className="mt-8 max-w-7xl mx-auto grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
      >
        {map((course) => (
          <div
            key={course.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {`Course ${course.id}: ${course.title}`}
            </h3>
            <p className="text-gray-600 mt-4">{course.description}</p>
            <a
              href="#enroll"
              className="mt-6 bg-sky-700 text-white px-6 py-3
              rounded-full shadow-lg hover:bg-sky-800 transition-all"
            >
              Enroll Now
            </a>
          </div>
        ), courses)}
      </div>

      <div className="mt-6 text-center bg-gradient-to-b from-gray-50
       via-white to-gray-100 py-10 rounded-lg shadow-lg"
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Are you eager to explore and learn something new?
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl text-lg mx-auto">
          Select your course, embrace new learning, and master your expertise!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center
         space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            to="/courses"
            className="bg-sky-700 text-white px-8 py-4
            rounded-full shadow-lg hover:bg-sky-800 transition-all"
          >
            Start Learning
          </Link>
          <button
            type="button"
            onClick={handleDialogOpen}
            className="bg-gray-100 text-gray-800 px-8 py-4
            rounded-full shadow-md hover:bg-gray-200 transition-all focus:ring-4"
          >
            Share Your Course here!
          </button>
        </div>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth maxWidth="md">
        <CoursePostForm open={openDialog} handleClose={handleDialogClose} />
      </Dialog>
    </div>
  );
};

export default Course;
