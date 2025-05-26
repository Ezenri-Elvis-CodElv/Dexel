import React, { useState } from 'react';

const tabs = [
  'Availability',
  'Easy integration',
  'Security and Compliance',
  'Artificial intelligence',
  'Data and Analysis',
  'Cloud',
];

const tabContent = {
  Availability: {
    leftLabel: 'Active datacenters',
    rightLabel: 'Active datacenters',
    icons: 3,
    centerLogos: ['Mastercard', 'Kua', 'Visa'],
  },
  'Easy integration': {
    leftLabel: 'APIs ready',
    rightLabel: 'No-code tools',
    icons: 2,
    centerLogos: ['Zapier', 'Kua', 'Slack'],
  },
  'Security and Compliance': {
    leftLabel: 'Data encrypted',
    rightLabel: 'SOC 2 certified',
    icons: 1,
    centerLogos: ['Shield', 'Kua', 'Lock'],
  },
  'Artificial intelligence': {
    leftLabel: 'Smart routing',
    rightLabel: 'AI detection',
    icons: 2,
    centerLogos: ['AI', 'Kua', 'Brain'],
  },
  'Data and Analysis': {
    leftLabel: 'Live metrics',
    rightLabel: 'Report tools',
    icons: 3,
    centerLogos: ['Graph', 'Kua', 'Excel'],
  },
  Cloud: {
    leftLabel: 'Cloud storage',
    rightLabel: 'CDN powered',
    icons: 3,
    centerLogos: ['AWS', 'Kua', 'GCP'],
  },
};

const Platform = () => {
  const [activeTab, setActiveTab] = useState('Availability');

  const { leftLabel, rightLabel, icons, centerLogos } = tabContent[activeTab];

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Key benefits</h2>
        <p className="text-gray-500 mt-2">
          Maximize the performance and security of your business.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-600">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 ${
                activeTab === tab
                  ? 'border-b-2 border-gray-800 text-gray-800'
                  : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 bg-white bg-opacity-60 rounded-2xl p-6">
          {/* Left Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 w-52 flex flex-col items-center bg-white/50">
            <div className="space-y-2 mb-4">
              {Array.from({ length: icons }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-300 mx-auto"
                />
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {leftLabel}
            </span>
          </div>

          {/* Center Logos */}
          <div className="flex flex-col items-center gap-3">
            {centerLogos.map((logo, idx) => (
              <div key={idx} className="text-sm font-semibold text-gray-700">
                {logo}
              </div>
            ))}
          </div>

          {/* Right Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 w-52 flex flex-col items-center bg-white/50">
            <div className="space-y-2 mb-4">
              {Array.from({ length: icons }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-300 mx-auto"
                />
              ))}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {rightLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;