import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import type { InvestorFormData } from '../../types/investor';

const InvestmentInfoForm = () => {
  const { control, register, formState: { errors } } = useFormContext<InvestorFormData>();

  const investmentRanges = [
    '100,000 - 500,000 ETB',
    '500,000 - 1,000,000 ETB',
    '1,000,000 - 5,000,000 ETB',
    '5,000,000 - 10,000,000 ETB',
    '10,000,000+ ETB',
  ];

  const industries = [
    'Agriculture',
    'Technology',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Services',
    'Clean Energy',
    'Fintech',
    'Other',
  ];

  const stages = [
    'Seed Stage',
    'Early Stage',
    'Growth Stage',
    'Expansion Stage',
    'Late Stage',
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Investment Information</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="investmentRange" className="block text-sm font-medium text-gray-700">
            Investment Range
          </label>
          <select
            id="investmentRange"
            {...register('investmentInfo.investmentRange')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Investment Range</option>
            {investmentRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.investmentInfo?.investmentRange && (
            <p className="mt-1 text-sm text-red-600">{errors.investmentInfo.investmentRange.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Industries
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {industries.map((industry) => (
              <label key={industry} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={industry}
                  {...register('investmentInfo.preferredIndustries')}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2">{industry}</span>
              </label>
            ))}
          </div>
          {errors.investmentInfo?.preferredIndustries && (
            <p className="mt-1 text-sm text-red-600">{errors.investmentInfo.preferredIndustries.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Investment Stage Preference
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {stages.map((stage) => (
              <label key={stage} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={stage}
                  {...register('investmentInfo.investmentStage')}
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2">{stage}</span>
              </label>
            ))}
          </div>
          {errors.investmentInfo?.investmentStage && (
            <p className="mt-1 text-sm text-red-600">{errors.investmentInfo.investmentStage.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="investmentHistory" className="block text-sm font-medium text-gray-700">
            Investment History
          </label>
          <textarea
            id="investmentHistory"
            rows={4}
            {...register('investmentInfo.investmentHistory')}
            placeholder="Please describe your previous investment experience"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.investmentInfo?.investmentHistory && (
            <p className="mt-1 text-sm text-red-600">{errors.investmentInfo.investmentHistory.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentInfoForm;