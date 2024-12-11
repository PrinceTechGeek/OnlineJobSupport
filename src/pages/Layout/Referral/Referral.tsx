import React from 'react';
import { faGift, faLink, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { map } from 'lodash/fp';

const features = [
  {
    title: 'Simple & Easy',
    description:
      `Invite friends effortlessly with your unique referral link
      and help them get started with Obudle in just a few clicks.`,
    icon: <FontAwesomeIcon icon={faLink} />,
  },
  {
    title: 'Exclusive Rewards',
    description:
      `Earn credits, service discounts, or access premium features.
      The more you refer, the greater your rewards!`,
    icon: <FontAwesomeIcon icon={faGift} />,
  },
  {
    title: 'Unlimited Referrals',
    description:
      `There’s no limit! Share your link via social media, email,
      or messaging apps and grow your rewards.`,
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];

const Referral = () => (
  <div className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
        Unlock Rewards with the Obudle Referral Program
      </h1>
      <p className="mt-4 text-lg text-gray-600 sm:text-xl">
        Empower your network and earn exclusive rewards by inviting your friends to experience
        Obudle. Grow the community while unlocking exciting benefits.
      </p>
    </div>

    <div
      className="mt-4 max-w-7xl mx-auto grid grid-cols-1
        sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
    >
      {map((feature) => (
        <div
          key={feature.title}
          className="flex flex-col items-center bg-white p-8
          rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="text-sky-700 text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 mt-4 text-center">{feature.description}</p>
        </div>
      ), features)}
    </div>

    <div className="mt-6 text-center bg-gradient-to-b from-gray-50 via-white
       to-gray-100 py-10 rounded-lg shadow-lg"
    >
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
        Ready to Start Sharing?
      </h3>
      <p className="text-gray-600 mt-4 max-w-xl text-lg mx-auto">
        Take the next step and begin earning amazing rewards by referring your network today!
      </p>
      <div className="mt-8">
        <a
          href="/referrals"
          className="bg-sky-700 text-white px-8 py-4 rounded-full shadow-lg
           hover:bg-sky-800 transition duration-300 font-semibold"
        >
          Explore Referral Dashboard
        </a>
      </div>
    </div>
  </div>
);

export default Referral;
