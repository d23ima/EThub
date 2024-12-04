import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PersonalInfoForm from './PersonalInfoForm';
import InvestmentInfoForm from './InvestmentInfoForm';
import PreferencesForm from './PreferencesForm';
import FormProgress from '../shared/FormProgress';
import { investorSchema, type InvestorFormData } from '../../types/investor';

const InvestorForm = () => {
  const [step, setStep] = React.useState(1);
  const methods = useForm<InvestorFormData>({
    resolver: zodResolver(investorSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: InvestorFormData) => {
    console.log(data);
    // Handle form submission
  };

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const steps = [
    { id: 1, name: 'Personal Information' },
    { id: 2, name: 'Investment Information' },
    { id: 3, name: 'Preferences' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FormProgress steps={steps} currentStep={step} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && <PersonalInfoForm />}
          {step === 2 && <InvestmentInfoForm />}
          {step === 3 && <PreferencesForm />}

          <div className="flex justify-between pt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-700"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default InvestorForm;