import React from 'react';
import EntrepreneurForm from '../components/entrepreneur/EntrepreneurForm';

const EntrepreneurSignup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join EThub as an Entrepreneur
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Share your vision with potential investors and take your business to the next level.
          </p>
        </div>
        <EntrepreneurForm />
      </div>
    </div>
  );
};

export default EntrepreneurSignup;