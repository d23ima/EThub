import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PersonalInfoForm from './PersonalInfoForm';
import BusinessInfoForm from './BusinessInfoForm';
import PitchInfoForm from './PitchInfoForm';
import FormProgress from './FormProgress';
import type { EntrepreneurFormData } from '../../types/entrepreneur';

const schema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    city: z.string().min(2, 'City is required'),
  }),
  businessInfo: z.object({
    companyName: z.string().min(2, 'Company name is required'),
    industry: z.string().min(2, 'Industry is required'),
    stage: z.string().min(2, 'Business stage is required'),
    description: z.string().min(50, 'Please provide a detailed description'),
    fundingNeeded: z.string().min(1, 'Funding amount is required'),
  }),
  pitchInfo: z.object({
    problemStatement: z.string().min(50, 'Please provide a detailed problem statement'),
    solution: z.string().min(50, 'Please provide a detailed solution'),
    marketSize: z.string().min(20, 'Please provide market size information'),
    competitiveAdvantage: z.string().min(50, 'Please describe your competitive advantage'),
    useOfFunds: z.string().min(50, 'Please explain how you will use the funds'),
  }),
});

const EntrepreneurForm = () => {
  const [step, setStep] = React.useState(1);
  const methods = useForm<EntrepreneurFormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data: EntrepreneurFormData) => {
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

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FormProgress currentStep={step} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && <PersonalInfoForm />}
          {step === 2 && <BusinessInfoForm />}
          {step === 3 && <PitchInfoForm />}

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

export default EntrepreneurForm;