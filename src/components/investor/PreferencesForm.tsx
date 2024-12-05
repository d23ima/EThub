import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { InvestorFormData } from '../../types/investor';

const PreferencesForm = () => {
  const { register, formState: { errors } } = useFormContext<InvestorFormData>();

  const involvementLevels = [
    'Passive - Financial investment only',
    'Limited - Quarterly meetings and major decisions',
    'Active - Monthly meetings and strategic guidance',
    'Highly Active - Weekly involvement and mentorship',
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Investment Preferences</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="investmentCriteria" className="block text-sm font-medium text-gray-700">
            Investment Criteria
          </label>
          <textarea
            id="investmentCriteria"
            rows={4}
            {...register('preferences.investmentCriteria')}
            placeholder="What are your key criteria for evaluating investment opportunities?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.preferences?.investmentCriteria && (
            <p className="mt-1 text-sm text-red-600">{errors.preferences.investmentCriteria.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="expectedInvolvement" className="block text-sm font-medium text-gray-700">
            Expected Level of Involvement
          </label>
          <select
            id="expectedInvolvement"
            {...register('preferences.expectedInvolvement')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Involvement Level</option>
            {involvementLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.preferences?.expectedInvolvement && (
            <p className="mt-1 text-sm text-red-600">{errors.preferences.expectedInvolvement.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="dueDiligenceProcess" className="block text-sm font-medium text-gray-700">
            Due Diligence Process
          </label>
          <textarea
            id="dueDiligenceProcess"
            rows={4}
            {...register('preferences.dueDiligenceProcess')}
            placeholder="Describe your typical due diligence process"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.preferences?.dueDiligenceProcess && (
            <p className="mt-1 text-sm text-red-600">{errors.preferences.dueDiligenceProcess.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            rows={4}
            {...register('preferences.additionalNotes')}
            placeholder="Any additional information you'd like to share"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.preferences?.additionalNotes && (
            <p className="mt-1 text-sm text-red-600">{errors.preferences.additionalNotes.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreferencesForm;