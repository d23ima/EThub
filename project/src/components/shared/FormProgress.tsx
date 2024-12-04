import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Step {
  id: number;
  name: string;
}

interface FormProgressProps {
  steps: Step[];
  currentStep: number;
}

const FormProgress: React.FC<FormProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                ${currentStep >= step.id ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300'}`}>
                {currentStep > step.id ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <span className="text-sm">{step.id}</span>
                )}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-900">{step.name}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;