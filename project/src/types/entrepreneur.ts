export interface EntrepreneurFormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
  };
  businessInfo: {
    companyName: string;
    industry: string;
    stage: string;
    description: string;
    fundingNeeded: string;
  };
  pitchInfo: {
    problemStatement: string;
    solution: string;
    marketSize: string;
    competitiveAdvantage: string;
    useOfFunds: string;
  };
}