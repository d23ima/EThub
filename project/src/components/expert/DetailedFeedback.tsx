import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { EvaluationFormData } from '../../types/expert';

const DetailedFeedback = () => {
  const { register, formState: { errors } } = useFormContext<EvaluationFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Detailed Feedback</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="strengths" className="block text-sm font-medium text-gray-700">
            Strengths
          </label>
          <textarea
            id="strengths"
            rows={4}
            {...register('feedback.strengths')}
            placeholder="List the main strengths of the project"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.feedback?.strengths && (
            <p className="mt-1 text-sm text-red-600">{errors.feedback.strengths.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="weaknesses" className="block text-sm font-medium text-gray-700">
            Areas for Improvement
          </label>
          <textarea
            id="weaknesses"
            rows={4}
            {...register('feedback.weaknesses')}
            placeholder="Identify areas that need improvement"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.feedback?.weaknesses && (
            <p className="mt-1 text-sm text-red-600">{errors.feedback.weaknesses.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="recommendations" className="block text-sm font-medium text-gray-700">
            Recommendations
          </label>
          <textarea
            id="recommendations"
            rows={4}
            {...register('feedback.recommendations')}
            placeholder="Provide specific recommendations for improvement"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.feedback?.recommendations && (
            <p className="mt-1 text-sm text-red-600">{errors.feedback.recommendations.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailedFeedback;