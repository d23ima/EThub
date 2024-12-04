import { z } from 'zod';

export const evaluationSchema = z.object({
  overall: z.object({
    score: z.number().min(1).max(10),
    summary: z.string().min(50, 'Please provide a detailed summary'),
  }),
  criteria: z.object({
    marketPotential: z.number().min(1).max(10),
    teamCapability: z.number().min(1).max(10),
    financialViability: z.number().min(1).max(10),
    innovationLevel: z.number().min(1).max(10),
    scalability: z.number().min(1).max(10),
  }),
  feedback: z.object({
    strengths: z.string().min(50, 'Please provide detailed strengths'),
    weaknesses: z.string().min(50, 'Please provide detailed weaknesses'),
    recommendations: z.string().min(50, 'Please provide detailed recommendations'),
  }),
  decision: z.object({
    status: z.enum(['approved', 'rejected', 'needsRevision']),
    comments: z.string().min(50, 'Please provide detailed comments'),
  }),
});

export type EvaluationFormData = z.infer<typeof evaluationSchema>;