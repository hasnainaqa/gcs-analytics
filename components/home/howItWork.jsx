import { UserPlus, Link as LinkIcon, PlusCircle, Coffee } from 'lucide-react';

export default function HowItWork() {
  return (
    <section id="how-it-works" className="py-20 bg-D2E8E3">
      {' '}
      {/* Use Color 3 for the background */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-2C3532">
          {' '}
          {/* Use Color 8 for the title text */}
          How <span className="text-[#0F6466]">SEO</span> Analytic Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: UserPlus,
              title: 'Sign up',
              description: 'Choose the plan that fits your needs best and sign up. You can easily sign up with your Google account in just 1 click.',
            },
            {
              icon: LinkIcon,
              title: 'Connect Google Search Console',
              description: 'Easily connect your Google Search Console (GSC) account with just 1 click.',
            },
            {
              icon: PlusCircle,
              title: 'Add Website(s)',
              description:
                'Add your website(s) to analyze SEO health, select target keywords, and activate real-time tracking. Fix errors, and outperform competitors—all within a unified dashboard.',
            },
            {
              icon: Coffee,
              title: 'Sit and relax',
              description:
                "SEO-Analytics takes charge of tracking your website’s performance, analyzing rankings, and uncovering optimization opportunities. You don’t have to lift a finger.",
            },
          ].map((step, index) => (
            <div key={index} className="bg-ECFBF4 p-6 rounded-lg shadow-md text-center">
              {' '}
              {/* Use Color 1 for the background of each step */}
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-[#0F6466]" />
              </div>
              <h3 className="text-xl font-semibold text-2C3532 mb-2">{step.title}</h3> {/* Use Color 8 for title text */}
              <p className="text-gray-800">{step.description}</p> {/* Use darker gray for description */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
