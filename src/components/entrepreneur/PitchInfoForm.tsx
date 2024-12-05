import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { EntrepreneurFormData } from '../../types/entrepreneur';

const PitchInfoForm = () => {
  const { register, formState: { errors } } = useFormContext<EntrepreneurFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Pitch Details</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="problemStatement" className="block text-sm font-medium text-gray-700">
            Problem Statement
          </label>
          <textarea
            id="problemStatement"
            rows={4}
            {...register('pitchInfo.problemStatement')}
            placeholder="What problem are you solving?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.pitchInfo?.problemStatement && (
            <p className="mt-1 text-sm text-red-600">{errors.pitchInfo.problemStatement.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="solution" className="block text-sm font-medium text-gray-700">
            Solution
          </label>
          <textarea
            id="solution"
            rows={4}
            {...register('pitchInfo.solution')}
            placeholder="How does your solution address the problem?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.pitchInfo?.solution && (
            <p className="mt-1 text-sm text-red-600">{errors.pitchInfo.solution.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="marketSize" className="block text-sm font-medium text-gray-700">
            Market Size
          </label>
          <textarea
            id="marketSize"
            rows={3}
            {...register('pitchInfo.marketSize')}
            placeholder="What is your target market size?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.pitchInfo?.marketSize && (
            <p className="mt-1 text-sm text-red-600">{errors.pitchInfo.marketSize.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="competitiveAdvantage" className="block text-sm font-medium text-gray-700">
            Competitive Advantage
          </label>
          <textarea
            id="competitiveAdvantage"
            rows={4}
            {...register('pitchInfo.competitiveAdvantage')}
            placeholder="What makes your solution unique?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.pitchInfo?.competitiveAdvantage && (
            <p className="mt-1 text-sm text-red-600">{errors.pitchInfo.competitiveAdvantage.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="useOfFunds" className="block text-sm font-medium text-gray-700">
            Use of Funds
          </label>
          <textarea
            id="useOfFunds"
            rows={4}
            {...register('pitchInfo.useOfFunds')}
            placeholder="How will you use the investment?"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.pitchInfo?.useOfFunds && (
            <p className="mt-1 text-sm text-red-600">{errors.pitchInfo.useOfFunds.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PitchInfoForm;