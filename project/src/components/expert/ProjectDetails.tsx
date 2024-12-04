import React from 'react';
import { FileText, User, Building, TrendingUp } from 'lucide-react';

interface ProjectDetailsProps {
  id?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ id }) => {
  // Mock data - replace with actual data fetching
  const project = {
    entrepreneur: {
      name: 'Abebe Kebede',
      email: 'abebe@example.com',
      phone: '+251911234567',
    },
    business: {
      name: 'EcoFarm Solutions',
      industry: 'Agriculture',
      stage: 'Early Stage',
      fundingNeeded: '1,000,000 ETB',
    },
    pitch: {
      problem: 'Small-scale farmers lack access to modern farming techniques and technology.',
      solution: 'Mobile platform connecting farmers with agricultural experts and resources.',
      marketSize: '5 million small-scale farmers in Ethiopia',
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h2>
        <div className="space-y-4">
          <DetailSection
            icon={<User className="h-5 w-5 text-blue-600" />}
            title="Entrepreneur"
            items={[
              ['Name', project.entrepreneur.name],
              ['Email', project.entrepreneur.email],
              ['Phone', project.entrepreneur.phone],
            ]}
          />
          <DetailSection
            icon={<Building className="h-5 w-5 text-blue-600" />}
            title="Business"
            items={[
              ['Name', project.business.name],
              ['Industry', project.business.industry],
              ['Stage', project.business.stage],
              ['Funding Needed', project.business.fundingNeeded],
            ]}
          />
          <DetailSection
            icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
            title="Pitch"
            items={[
              ['Problem', project.pitch.problem],
              ['Solution', project.pitch.solution],
              ['Market Size', project.pitch.marketSize],
            ]}
          />
        </div>
      </div>
      <div className="pt-4">
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
          <FileText className="h-5 w-5 mr-2" />
          View Full Submission
        </button>
      </div>
    </div>
  );
};

const DetailSection = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: [string, string][] }) => (
  <div className="border-t pt-4 first:border-t-0 first:pt-0">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="ml-2 font-semibold text-gray-900">{title}</h3>
    </div>
    <div className="space-y-2">
      {items.map(([label, value]) => (
        <div key={label} className="grid grid-cols-3 gap-2">
          <span className="text-sm font-medium text-gray-500">{label}:</span>
          <span className="col-span-2 text-sm text-gray-900">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectDetails;