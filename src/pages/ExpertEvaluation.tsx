import React from 'react';
import { useParams } from 'react-router-dom';
import ExpertEvaluationForm from '../components/expert/ExpertEvaluationForm';
import ProjectDetails from '../components/expert/ProjectDetails';

const ExpertEvaluation = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Expert Evaluation Portal
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Evaluate and provide feedback on entrepreneurial submissions
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProjectDetails id={id} />
          </div>
          <div className="lg:col-span-2">
            <ExpertEvaluationForm id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertEvaluation;