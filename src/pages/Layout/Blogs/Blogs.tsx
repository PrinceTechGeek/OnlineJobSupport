import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNewspaper,
  faLaptopCode,
  faIndustry,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { map } from 'lodash/fp';
import type { BlogsCategory } from '#domain/Obudle/BlogsCategory';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const categories: BlogsCategory[] = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faNewspaper} className="text-4xl text-blue-600" />,
      title: 'Tech News',
      description: 'Latest updates and trends in the tech world.',
      benefit: 'Stay updated with the newest advancements in technology.',
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faLaptopCode} className="text-4xl text-green-600" />,
      title: 'Programming',
      description: 'Articles and tutorials for developers.',
      benefit: 'Learn new programming techniques and tools.',
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faIndustry} className="text-4xl text-orange-600" />,
      title: 'Industry Insights',
      description: 'News about tech companies and industry events.',
      benefit: 'Get insights into the latest happenings in the tech industry.',
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faGlobe} className="text-4xl text-purple-600" />,
      title: 'Global Trends',
      description: 'Explore global tech trends and innovations.',
      benefit: 'Understand how technology is shaping the world on a global scale.',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Discover the Latest in News and Blogs
        </h1>
        <p className="mt-4 text-lg text-gray-600 sm:text-xl">
          Stay informed with the latest news, blogs, and articles covering a wide
          range of topics in the tech world.
        </p>
      </div>

      <div className="mt-6 py-8 rounded-lg max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-sky-700 text-center">
          Blog and Tech News Categories
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {map((category: BlogsCategory) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center bg-gradient-to-t from-gray-50
               via-white to-gray-100 rounded-lg p-6 shadow-xl transition-transform transform
               hover:scale-105"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-bold text-gray-800">{category.title}</h3>
              <p className="text-gray-600 mt-2">{category.description}</p>
              <p className="text-gray-500 mt-4 italic">{category.benefit}</p>
            </div>
          ), categories)}
        </div>
      </div>

      <div className="mt-6 text-center bg-gradient-to-b from-gray-50 via-white
       to-gray-100 py-10 rounded-lg shadow-lg"
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Start Reading the Latest Articles Today
        </h3>
        <p className="text-gray-600 mt-4  max-w-xl text-lg mx-auto">
          Whether you&apos;re interested in tech news, programming tips, or insights into the
          tech industry, you&apos;ll find something that interests you here. Start exploring now!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center
          space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="/blog"
            className="bg-sky-800 text-white px-10 py-4 rounded-full shadow-lg
            hover:bg-sky-900"
          >
            Explore Blog and Tech News
          </a>
          <button
            type="button"
            onClick={() => navigate('/create-blog')}
            className="bg-gray-100 text-gray-800 px-8 py-4 rounded-full
            shadow-md hover:bg-gray-200 transition-all focus:ring-4"
          >
            Create a Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
