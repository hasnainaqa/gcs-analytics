import { CheckCircle, AlertTriangle } from 'lucide-react';

export default function SerchConsole() {
  return (
    <section className="py-20 bg-[#ECFBF4] ">
      {' '}
      {/* Use Color 1 for the background */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-color3">
          {' '}
          {/* Use Color 3 for heading text */}
          Why Pages Underperform:<span className="text-[#0F6466]">Fix SEO Errors</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-600 mb-6">
            SEO experts know that pages not ranking or driving traffic often face common issues. Reasons for poor performance can include:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                <span>Low-quality or thin content</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                <span>DDuplicate or outdated content</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                <span>Technical errors like broken links or slow load times</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                <span>Misaligned search intent or poor keyword targeting</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
            To find out why your page isn’t performing, use SEO-Analytics to uncover actionable insights.
            Not all warnings need immediate fixes—focus on pages that drive value. Should every part of your site rank?
            Prioritize high-impact pages instead.
            </p>
            <div className="bg-color2 p-6 rounded-lg">
              {' '}
              {/* Use Color 2 for the background of the info box */}
              <h3 className="text-xl font-semibold text-[#0F6466] mb-4">How SEO-Analytics Helps</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Identifies underperforming pages automatically</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Provides data-driven fixes for content and technical issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>Tracks rankings and traffic trends in real time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
