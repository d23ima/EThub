import { z } from 'zod';

export const investorSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    organization: z.string().min(2, 'Organization name is required'),
    position: z.string().min(2, 'Position is required'),
  }),
  investmentInfo: z.object({
    investmentRange: z.string().min(1, 'Investment range is required'),
    preferredIndustries: z.array(z.string()).min(1, 'Select at least one industry'),
    investmentStage: z.array(z.string()).min(1, 'Select at least one investment stage'),
    investmentHistory: z.string().min(50, 'Please provide your investment history'),
  }),
  preferences: z.object({
    investmentCriteria: z.string().min(50, 'Please describe your investment criteria'),
    expectedInvolvement: z.string().min(1, 'Expected involvement is required'),
    dueDiligenceProcess: z.string().min(50, 'Please describe your due diligence process'),
    additionalNotes: z.string().optional(),
  }),
});

export type InvestorFormData = z.infer<typeof investorSchema>;