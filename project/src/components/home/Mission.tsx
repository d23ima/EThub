import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering Ethiopian entrepreneurs to transform their innovative ideas into successful businesses
            through strategic partnerships and expert guidance.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<Target className="h-8 w-8 text-blue-600" />}
              title="Vision"
              description="To become the premier platform for entrepreneurial growth and investment opportunities in Ethiopia."
            />
            <Feature
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Community"
              description="Building a strong network of entrepreneurs, investors, and industry experts committed to Ethiopia's economic growth."
            />
            <Feature
              icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
              title="Impact"
              description="Driving sustainable economic development through innovation, collaboration, and strategic investments."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="pt-6">
      <div className="flow-root bg-white rounded-lg px-6 pb-8">
        <div className="-mt-6">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-md shadow-lg">
            {icon}
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{title}</h3>
          <p className="mt-5 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;