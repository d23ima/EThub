import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { evaluationSchema, type EvaluationFormData } from '../../types/expert';
import OverallAssessment from './OverallAssessment';
import CriteriaEvaluation from './CriteriaEvaluation';
import DetailedFeedback from './DetailedFeedback';
import FinalDecision from './FinalDecision';

interface ExpertEvaluationFormProps {
  id?: string;
}

const ExpertEvaluationForm: React.FC<ExpertEvaluationFormProps> = ({ id }) => {
  const methods = useForm<EvaluationFormData>({
    resolver: zodResolver(evaluationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: EvaluationFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <OverallAssessment />
          <CriteriaEvaluation />
          <DetailedFeedback />
          <FinalDecision />
          
          <div className="flex justify-end pt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-700"
            >
              Submit Evaluation
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ExpertEvaluationForm;