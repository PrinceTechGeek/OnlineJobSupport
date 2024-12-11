import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faClipboardList,
  faSchool,
  faBriefcase,
  faProjectDiagram,
  faBlog,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const SubNavbar = () => (
  <div className="fixed bottom-0 w-full bg-white shadow-md z-50 border-t border-gray-300">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      <div className="flex justify-around items-center">
        <Link
          to="/"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon icon={faHome} className="text-sky-600 text-lg sm:text-xl md:text-1xl" />
          <span className="text-gray-600 ">Home</span>
        </Link>
        <Link
          to="/mentorship"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon icon={faUser} className="text-sky-600 text-lg sm:text-xl md:text-1xl" />
          <span className="text-gray-600">Mentors</span>
        </Link>
        <Link
          to="/jobs"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-sky-600 text-lg sm:text-xl md:text-1xl"
          />
          <span className="text-gray-600">Jobs</span>
        </Link>
        <Link
          to="/courses"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon
            icon={faSchool}
            className="text-sky-600 text-lg sm:text-xl md:text-1xl"
          />
          <span className="text-gray-600">Courses</span>
        </Link>
        <Link
          to="/referrals"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon
            icon={faClipboardList}
            className="text-sky-600 text-lg sm:text-xl md:text-1xl"
          />
          <span className="text-gray-600">References</span>
        </Link>
        <Link
          to="/projects"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon
            icon={faProjectDiagram}
            className="text-sky-600 text-lg sm:text-xl md:text-1xl"
          />
          <span className="text-gray-600">Projects</span>
        </Link>
        <Link
          to="/blog"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon icon={faBlog} className="text-sky-600 text-lg sm:text-xl md:text-1xl" />
          <span className="text-gray-600">Blogs</span>
        </Link>
        <Link
          to="/community"
          className="flex flex-col items-center space-y-1 text-xs sm:text-sm
          md:text-sm hover:text-sky-600 transition-all"
        >
          <FontAwesomeIcon icon={faUsers} className="text-sky-600 text-lg sm:text-xl md:text-1xl" />
          <span className="text-gray-600">Community</span>
        </Link>
      </div>
    </div>
  </div>
);

export default SubNavbar;
