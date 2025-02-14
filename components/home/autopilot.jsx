import { CheckCircle } from 'lucide-react';

export default function Autopilot() {
  return (
    <section className="py-20 bg-[#ECFBF4] ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
        Track SEO <span className="text-[#0F6466]">Performance on Autopilot</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
            Our tool monitors your website’s rankings, traffic, and technical health daily
            (frequency depends on your plan). It identifies underperforming pages, suggests 
            optimizations, and ensures your SEO strategy stays ahead. Whether it’s new content or
             pages losing traction, SEO-Analytics keeps your site competitive effortlessly.
            </p>
            <ul className="space-y-4">
              {[
                'FAST + Automated SEO Insights (up to 1000 keywords/day)',
                "Real-time tracking of rankings and traffic trends",
                'Instant optimization tips with our "QuickInsights" feature',
                'Integration with WordPress, Shopify, and more coming soon…',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#0F6466] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Autopilot Indexing"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-[#0F6466] opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
