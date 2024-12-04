import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { EntrepreneurFormData } from '../../types/entrepreneur';

const BusinessInfoForm = () => {
  const { register, formState: { errors } } = useFormContext<EntrepreneurFormData>();

  const businessStages = [
    'Idea Stage',
    'Prototype/MVP',
    'Early Revenue',
    'Growth Stage',
    'Expansion',
  ];

  const industries = [
    'Agriculture',
    'Technology',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Retail',
    'Services',
    'Other',
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Business Information</h2>
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            {...register('businessInfo.companyName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.businessInfo?.companyName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessInfo.companyName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <select
            id="industry"
            {...register('businessInfo.industry')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.businessInfo?.industry && (
            <p className="mt-1 text-sm text-red-600">{errors.businessInfo.industry.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="stage" className="block text-sm font-medium text-gray-700">
            Business Stage
          </label>
          <select
            id="stage"
            {...register('businessInfo.stage')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Stage</option>
            {businessStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
          {errors.businessInfo?.stage && (
            <p className="mt-1 text-sm text-red-600">{errors.businessInfo.stage.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Business Description
          </label>
          <textarea
            id="description"
            rows={4}
            {...register('businessInfo.description')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.businessInfo?.description && (
            <p className="mt-1 text-sm text-red-600">{errors.businessInfo.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="fundingNeeded" className="block text-sm font-medium text-gray-700">
            Funding Needed (ETB)
          </label>
          <input
            type="text"
            id="fundingNeeded"
            {...register('businessInfo.fundingNeeded')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.businessInfo?.fundingNeeded && (
            <p className="mt-1 text-sm text-red-600">{errors.businessInfo.fundingNeeded.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoForm;