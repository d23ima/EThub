import React from 'react';

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Founder
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Abel Gorfu Asefa's vision for EThub stems from his deep commitment to fostering
              entrepreneurship and innovation in Ethiopia.
            </p>
            <div className="mt-8 space-y-6">
              <FounderDetail 
                title="Background"
                content="With extensive experience in business development and technology, Abel has been at the forefront of Ethiopia's entrepreneurial ecosystem."
              />
              <FounderDetail 
                title="Vision"
                content="Inspired by the untapped potential of Ethiopian entrepreneurs, Abel founded EThub to bridge the gap between innovative ideas and investment opportunities."
              />
              <FounderDetail 
                title="Mission"
                content="Through EThub, Abel aims to create a sustainable platform that empowers entrepreneurs and drives economic growth in Ethiopia."
              />
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="aspect-w-3 aspect-h-4">
              <img
                className="rounded-lg shadow-lg object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
                alt="Abel Gorfu Asefa"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderDetail = ({ title, content }: { title: string; content: string }) => {
  return (
    <div>
      <dt className="text-lg leading-6 font-medium text-gray-900">
        {title}
      </dt>
      <dd className="mt-2 text-base text-gray-500">
        {content}
      </dd>
    </div>
  );
};

export default Founder;