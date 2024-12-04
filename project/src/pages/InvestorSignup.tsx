import React from 'react';
import InvestorForm from '../components/investor/InvestorForm';

const InvestorSignup = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join EThub as an Investor
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Connect with promising Ethiopian entrepreneurs and discover unique investment opportunities.
          </p>
        </div>
        <InvestorForm />
      </div>
    </div>
  );
};

export default InvestorSignup;