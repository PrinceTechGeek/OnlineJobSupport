import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Mentors from './Layout/Mentors/Mentors';
import FreelancingAndJobs from './Layout/Jobs/Jobs';
import Course from './Layout/Course/Course';
import Referral from './Layout/Referral/Referral';
import Projects from './Layout/Project/Project';
import MentorsGrid from './Layout/Mentors/MentorsGrid';
import MentorContent from './Layout/Mentors/MentorContent';
import JobList from './Layout/Jobs/JobGrid';
import JobDetails from './Layout/Jobs/JobContent';
import Companies from './Layout/Referral/Companies';
import CourseDetails from './Layout/Course/CourseContent';
import ProjectsList from './Layout/Project/ProjectGrid';
import CourseList from './Layout/Course/CourseGrid';
import Blogs from './Layout/Blogs/Blogs';
import BlogsList from './Layout/Blogs/BlogGrid';
import BlogDetail from './Layout/Blogs/BlogContent';
import BlogPost from './Layout/Blogs/BlogPostForm';
import Services from './Layout/Header/Services';
import Community from './Layout/Community/Community';
import ApplicationIdeasPage from './Layout/ApplicationIdea/ApplicationIdea';
import ApplicationIdeaGrid from './Layout/ApplicationIdea/ApplicationIdeaGrid';
import ApplicationIdeaContent from './Layout/ApplicationIdea/ApplicationIdeaContent';
import ApplicationIdeaForm from './Layout/ApplicationIdea/ApplicationIdeaPostForm';

const AppRouter = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <>
          <Header />
          <Services />
          <Mentors />
          <FreelancingAndJobs />
          <Course />
          <Referral />
          <Projects />
          <Blogs />
          <ApplicationIdeasPage />
          <Footer />
        </>
      )}
    />
    <Route path="mentorship" element={<MentorsGrid />} />
    <Route path="mentors/:id" element={<MentorContent />} />
    <Route path="jobs" element={<JobList />} />
    <Route path="jobs/:id" element={<JobDetails />} />
    <Route path="referrals" element={<Companies />} />
    <Route path="courses" element={<CourseList />} />
    <Route path="courses/:id" element={<CourseDetails />} />
    <Route path="projects" element={<ProjectsList />} />
    <Route path="blog" element={<BlogsList />} />
    <Route path="blog/:id" element={<BlogDetail />} />
    <Route path="create-blog" element={<BlogPost />} />
    <Route path="community" element={<Community />} />
    <Route path="applicationIdeas" element={<ApplicationIdeaGrid />} />
    <Route path="applicationIdeas/:id" element={<ApplicationIdeaContent />} />
    <Route path="applicationIdeas/shareIdeas" element={<ApplicationIdeaForm />} />

  </Routes>
);

export default AppRouter;
