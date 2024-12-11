import React, { useState, useCallback, useMemo } from 'react';
import {
  FaUserTie, FaGraduationCap, FaCalendarCheck, FaStar, FaClipboardList,
} from 'react-icons/fa';
import { Dialog } from '@mui/material';
import { map } from 'lodash/fp';
import type { MentorFeatures } from '#domain/Obudle/MentorsFeatures';
import MentorRegistrationForm from './MentorRegistrationForm';

const Mentor = () => {
  const [isMentorPopupOpen, setMentorPopupOpen] = useState(false);

  const handleDialogOpen = useCallback(() => {
    setMentorPopupOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setMentorPopupOpen(false);
  }, []);

  const mentorFeatures: MentorFeatures[] = useMemo(() => [
    {
      id: 1,
      icon: <FaUserTie className="text-4xl text-sky-700" />,
      title: 'Guide Juniors',
      description: `Mentors can guide their juniors by sharing
      industry insights and best practices.`,
      benefit: 'Help others grow professionally and leave a lasting impact on their careers.',
    },
    {
      id: 2,
      icon: <FaCalendarCheck className="text-4xl text-sky-700" />,
      title: 'Mentorship Scheduling',
      description: 'Plan and schedule mentorship sessions based on your availability.',
      benefit: 'Manage your mentoring commitments effectively and on your terms.',
    },
    {
      id: 3,
      icon: <FaClipboardList className="text-4xl text-sky-700" />,
      title: 'Task Assignment',
      description: 'Assign tasks and projects to mentees for practical learning and development.',
      benefit: 'Encourage mentees to gain hands-on experience and refine their skills.',
    },
    {
      id: 4,
      icon: <FaStar className="text-4xl text-sky-700" />,
      title: 'Earn Recognition',
      description: 'Receive feedback and ratings from mentees to build credibility as a mentor.',
      benefit: 'Enhance your profile and establish your expertise on the platform.',
    },
  ], []);

  const menteeFeatures: MentorFeatures[] = useMemo(() => [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-orange-600" />,
      title: 'Career Guidance',
      description: 'Get personalized career advice from experienced professionals.',
      benefit: 'Learn how to navigate your career path with clarity and confidence.',
    },
    {
      id: 2,
      icon: <FaClipboardList className="text-4xl text-orange-600" />,
      title: 'Task Issuance',
      description: 'Receive practical tasks and assignments to improve your skills.',
      benefit: 'Develop industry-relevant skills and enhance your learning through practice.',
    },
    {
      id: 3,
      icon: <FaCalendarCheck className="text-4xl text-orange-600" />,
      title: 'Flexible Scheduling',
      description: 'Schedule mentorship sessions at times convenient for you.',
      benefit: 'Ensure a seamless mentoring experience without compromising on other priorities.',
    },
    {
      id: 4,
      icon: <FaStar className="text-4xl text-orange-600" />,
      title: 'Skill Evaluation',
      description: 'Get your skills evaluated by mentors and receive constructive feedback.',
      benefit: 'Identify areas of improvement and work on them to boost your potential.',
    },
  ], []);

  const handleSubmit = useCallback((formData: FormData) => {
    console.log(formData);
  }, []);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Empowering Mentorship, Transforming Careers
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Unlock opportunities to grow, learn, and succeed with exclusive features tailored
          for both mentors and mentees. Build lasting connections and shape the future together.
        </p>
      </div>

      <div className="mt-6 py-8 rounded-lg max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-sky-700 text-center">For Mentors</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {map((feature: MentorFeatures) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center bg-gradient-to-t from-gray-50
               via-white to-gray-100 rounded-lg p-6 shadow-xl transition-transform transform
               hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <p className="text-gray-500 mt-4 italic">{feature.benefit}</p>
            </div>
          ), mentorFeatures)}
        </div>
      </div>

      <div className="mt-6 rounded-lg max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-700 text-center">
          For Mentees
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {map((feature: MentorFeatures) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-lg sm:text-base
              text-center bg-white rounded-lg p-6 shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-bold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <p className="text-gray-500 mt-4 italic">{feature.benefit}</p>
            </div>
          ), menteeFeatures)}
        </div>
      </div>

      <div className="mt-6 text-center bg-gradient-to-b from-gray-50 via-white
       to-gray-100 py-10 rounded-lg shadow-lg"
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Begin Your Mentorship Journey Today
        </h3>
        <p className="text-gray-600 mt-4 max-w-xl text-lg mx-auto">
          Whether you’re here to share your expertise or seek guidance, the Guidio App
          provides tailored features to help you achieve your goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center
          space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            type="button"
            onClick={handleDialogOpen}
            className="bg-sky-700 text-white px-8 py-4 rounded-full shadow-md
             hover:bg-sky-800 transition-all focus:ring-4 focus:ring-sky-400"
          >
            Join as a Mentor
          </button>
          <a
            href="/mentorship"
            className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full
            shadow-md hover:bg-gray-200 transition-all focus:ring-4"
          >
            Explore All Mentors
          </a>
        </div>
      </div>

      <Dialog open={isMentorPopupOpen} onClose={handleDialogClose} fullWidth maxWidth="md">
        <MentorRegistrationForm
          open={isMentorPopupOpen}
          handleClose={handleDialogClose}
          handleSubmit={handleSubmit}
        />
      </Dialog>
    </div>
  );
};

export default Mentor;
