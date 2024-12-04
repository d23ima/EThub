import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { InvestorFormData } from '../../types/investor';

const PersonalInfoForm = () => {
  const { register, formState: { errors } } = useFormContext<InvestorFormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register('personalInfo.firstName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.personalInfo?.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register('personalInfo.lastName')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.personalInfo?.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.lastName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register('personalInfo.email')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.personalInfo?.email && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('personalInfo.phone')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.personalInfo?.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            {...register('personalInfo.organization')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.personalInfo?.organization && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.organization.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700">
            Position
          </label>
          <input
            type="text"
            id="position"
            {...register('personalInfo.position')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.personalInfo?.position && (
            <p className="mt-1 text-sm text-red-600">{errors.personalInfo.position.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;