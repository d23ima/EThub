import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { EvaluationFormData } from '../../types/expert';

const criteria = [
  {
    id: 'marketPotential',
    label: 'Market Potential',
    description: 'Assess the size and growth potential of the target market',
  },
  {
    id: 'teamCapability',
    label: 'Team Capability',
    description: 'Evaluate the team\'s ability to execute the business plan',
  },
  {
    id: 'financialViability',
    label: 'Financial Viability',
    description: 'Analyze the financial projections and business model',
  },
  {
    id: 'innovationLevel',
    label: 'Innovation Level',
    description: 'Rate the uniqueness and innovation of the solution',
  },
  {
    id: 'scalability',
    label: 'Scalability',
    description: 'Assess the potential for growth and scaling',
  },
];

const CriteriaEvaluation = () => {
  const { register, formState: { errors } } = useFormContext<EvaluationFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Evaluation Criteria</h2>
      <div className="space-y-4">
        {criteria.map(({ id, label, description }) => (
          <div key={id} className="border-b pb-4 last:border-b-0">
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                  {label}
                </label>
                <p className="mt-1 text-sm text-gray-500">{description}</p>
              </div>
              <input
                type="number"
                id={id}
                min="1"
                max="10"
                {...register(`criteria.${id}` as any, { valueAsNumber: true })}
                className="ml-4 w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            {errors.criteria?.[id as keyof typeof errors.criteria] && (
              <p className="mt-1 text-sm text-red-600">
                {errors.criteria[id as keyof typeof errors.criteria]?.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriteriaEvaluation;