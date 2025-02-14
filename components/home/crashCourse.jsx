import { Search, Shield, Globe, BarChart2, Star, AlertTriangle } from 'lucide-react';

export default function CrashCourse() {
  return (
    <section className="py-20 bg-[#D2E8E3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Get Your Website Noticed: <span className="text-[#0F6466]">A Crash Course on SEO Indexing</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Search, title: 'Google Loves Optimized Pages', description: 'Only well-optimized pages rank higher and attract organic traffic.' },
            {
              icon: BarChart2,
              title: 'Boost Your Visibility',
              description: 'SEO analytics helps you refine content and technical elements, boosting traffic and rankings.',
            },
            { icon: Globe, title: 'Crawlability Matters', description: 'EEnsure your site is mobile-friendly and easy to crawl for search engines.' },
            {
              icon: Star,
              title: 'Backlinks Boost Authority',
              description: 'Quality backlinks act as trust signals, improving your site’s credibility and rankings.',
            },
            {
              icon: AlertTriangle,
              title: "Underperforming? Stay Calm",
              description: 'Use SEO-Analytics to identify issues like poor content or slow speed.',
            },
            {
              icon: Shield,
              title: 'Tools and Tricks',
              description: 'Leverage tools like Google Search Console and SEO-Analytics to track performance and optimize responsibly.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-[#ECFBF4] p-6 rounded-lg shadow-md">
              <item.icon className="h-12 w-12 text-[#0F6466] mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
