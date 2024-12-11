import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material';
import AuthPage from '../../Registration/LoginPage';
import TicketSubmissionForm from '../Ticket/TicketSubmissionForm';

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isTicketFormOpen, setIsTicketFormOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const toggleDialog = useCallback(() => {
    setIsDialogOpen((prevState) => !prevState);
  }, []);

  const handleClose = useCallback(() => {
    setIsTicketFormOpen(false);
  }, []);

  const toggleTicketForm = useCallback(() => {
    setIsTicketFormOpen((prevState) => !prevState);
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link to="/" className="text-2xl font-bold text-sky-700 tracking-wide">
                Obudle
              </Link>

              <Link to="/community" className="font-semibold mt-1 text-lg">
                Community
              </Link>

              <button
                type="button"
                onClick={handleMenuClick}
                className="font-semibold text-black mt-1 text-lg hover:text-sky-800 transition"
              >
                Services
                <FontAwesomeIcon icon={faAngleDown} className="ml-1 text-xl" />
              </button>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                TransitionProps={{ timeout: 300 }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Connect with industry experts to achieve your goals." arrow>
                    <Link to="/mentorship" className="text-black hover:text-black-900 transition">
                      Personalized Mentorship
                    </Link>
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Find jobs in top companies tailored to your skills." arrow>
                    <Link to="/jobs" className="text-black hover:text-black-900 transition">
                      Job Opportunities & Referrals
                    </Link>
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Learn cutting-edge technologies with expert trainers." arrow>
                    <Link to="/courses" className="text-black hover:text-sky-900 transition">
                      Advanced Courses
                    </Link>
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Ace your academic projects with mentorship." arrow>
                    <Link to="/projects" className="text-black hover:text-black-900 transition">
                      College Projects & Guidance
                    </Link>
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Engage with like-minded tech enthusiasts." arrow>
                    <Link to="/community" className="text-black hover:text-black-900 transition">
                      Tech Community
                    </Link>
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Stay updated with the latest tech news." arrow>
                    <Link to="/blog" className="text-black hover:text-black-900 transition">
                      Blogs and Tech News
                    </Link>
                  </Tooltip>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Tooltip title="Get recommendations to land your dream job." arrow>
                    <Link to="/referrals" className="text-black hover:text-black-800 transition">
                      Referral
                    </Link>
                  </Tooltip>
                </MenuItem>
              </Menu>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={toggleDialog}
                className="bg-sky-700 text-white px-6 py-3 rounded-full shadow-md
                hover:bg-sky-800 focus:ring-2 focus:ring-sky-500 transition"
              >
                Login
              </button>
              <button
                type="button"
                onClick={toggleTicketForm}
                className="bg-sky-700 text-white px-6 py-3 rounded-full shadow-md
                 hover:bg-sky-800 focus:ring-2 focus:ring-sky-500 transition"
              >
                Support
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isDialogOpen && <AuthPage />}
      {isTicketFormOpen && <TicketSubmissionForm handleClose={handleClose} />}
    </div>
  );
};

export default Navbar;
