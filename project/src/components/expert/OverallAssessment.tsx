import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { EvaluationFormData } from '../../types/expert';

const OverallAssessment = () => {
  const { register, formState: { errors } } = useFormContext<EvaluationFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Overall Assessment</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="score" className="block text-sm font-medium text-gray-700">
            Overall Score (1-10)
          </label>
          <input
            type="number"
            id="score"
            min="1"
            max="10"
            {...register('overall.score', { valueAsNumber: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.overall?.score && (
            <p className="mt-1 text-sm text-red-600">{errors.overall.score.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
            Executive Summary
          </label>
          <textarea
            id="summary"
            rows={4}
            {...register('overall.summary')}
            placeholder="Provide a comprehensive summary of the project"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.overall?.summary && (
            <p className="mt-1 text-sm text-red-600">{errors.overall.summary.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverallAssessment;