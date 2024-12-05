import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { EvaluationFormData } from '../../types/expert';

const FinalDecision = () => {
  const { register, formState: { errors } } = useFormContext<EvaluationFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Final Decision</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Decision
          </label>
          <select
            id="status"
            {...register('decision.status')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Select Decision</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="needsRevision">Needs Revision</option>
          </select>
          {errors.decision?.status && (
            <p className="mt-1 text-sm text-red-600">{errors.decision.status.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
            Decision Comments
          </label>
          <textarea
            id="comments"
            rows={4}
            {...register('decision.comments')}
            placeholder="Provide detailed reasoning for your decision"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.decision?.comments && (
            <p className="mt-1 text-sm text-red-600">{errors.decision.comments.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinalDecision;