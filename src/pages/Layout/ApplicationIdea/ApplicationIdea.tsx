import React from 'react';
import ideaImg from '../../../assets/idea.jpg';

const ApplicationIdeasPage = () => (
  <div className="bg-gray-50 mt-16 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
        Discover Innovative Application Ideas
      </h1>
      <p className="mt-4 text-lg text-gray-600 sm:text-xl">
        Explore cutting-edge project ideas that can take your
        development skills to the next level.
      </p>
    </div>

    <div className="mt-16 max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">
        What We Offer
      </h2>
      <p className="text-lg text-gray-600 mt-4">
        Collaborate with like-minded individuals to build the next big idea.
      </p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
            <i className="fas fa-users fa-2x" />
          </div>
          <h3 className="font-semibold text-xl">Collaborate</h3>
          <p className="text-gray-500 mt-2">Work with others to bring your ideas to life.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
            <i className="fas fa-lightbulb fa-2x" />
          </div>
          <h3 className="font-semibold text-xl">Innovate</h3>
          <p className="text-gray-500 mt-2">Discover new technologies and innovate together.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-orange-100 text-orange-600 rounded-full p-4 mb-4">
            <i className="fas fa-rocket fa-2x" />
          </div>
          <h3 className="font-semibold text-xl">Launch</h3>
          <p className="text-gray-500 mt-2">
            Turn your ideas into actual projects and launch them.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-6 justify-center items-center">
        <div className="flex-1 sm:mr-6 mb-6 sm:mb-0 text-center sm:text-left">
          <p className="text-gray-800 font-semibold mt-4 text-lg">
            Whether you&apos;re looking to work on your first tech project, enhance existing
            skills, or build an innovative app, the community is here to help you collaborate,
            grow, and create amazing applications.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={ideaImg}
            alt="Creative Ideas"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-center
          space-y-4 sm:space-y-0 sm:space-x-6"
      >
        <a
          href="/ApplicationIdeas"
          className="bg-sky-800 text-white px-10 py-4 rounded-full shadow-lg
            hover:bg-sky-900"
        >
          Explore the ideas
        </a>
        <a
          href="/create-blog"
          className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full
            shadow-md hover:bg-gray-200 transition-all focus:ring-4"
        >
          Share Your Ideas Here
        </a>
      </div>
    </div>
  </div>
);

export default ApplicationIdeasPage;
