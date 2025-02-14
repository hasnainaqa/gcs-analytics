import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Pricing() {
  const [activePricingTab, setActivePricingTab] = useState('monthly');
  return (
    <section id="pricing" className="py-20 bg-color2">
      {' '}
      {/* Use Color 2 for the section background */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-color3">
          {' '}
          {/* Use Color 3 for title text */}
          Simple, Transparent <span className="text-[#0F6466]">Pricing</span>
        </h2>
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="monthly" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="monthly" onClick={() => setActivePricingTab('monthly')}>
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" onClick={() => setActivePricingTab('yearly')}>
                Yearly
              </TabsTrigger>
              <TabsTrigger value="lifeTime" onClick={() => setActivePricingTab('lifeTime')}>
                LifeTime
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Startup',
              price: activePricingTab === 'monthly' ? '$99' : '$990',
              features: [
                'Max 5 unique domains',
                'Track 1000 keywords per domain',
                'Full autopilot, daily performance tracking',
                'Alerts for traffic drops and errors',
                'Daily SEO performance reports',
                'Up to 200 keyword optimizations daily',
              ],
              recommended: false,
            },
            {
              name: 'Pro',
              price: activePricingTab === 'monthly' ? '$199' : '$1990',
              features: [
                'Max 10 unique domains',
                'Track 10,000 keywords per domain',
                'Full autopilot, daily performance tracking',
                'Alerts for traffic drops and errors',
                'Daily SEO performance reports',
                'Up to 200 keyword optimizations daily',
              ],
              recommended: true,
            },
            {
              name: 'Custom',
              price: 'Contact Us',
              features: [
                'Unlimited domains',
                'Custom keyword tracking limits',
                'Tailored automation and insights',
                'Priority support',
                'Custom reporting dashboards',
                'Dedicated account manager',
              ],
              recommended: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`bg-color1 rounded-lg p-8 flex flex-col shadow-lg ${
                /* Use Color 1 for card background */
                plan.recommended ? 'ring-2 ring-[#0F6466] transform scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-[#0F6466] text-white text-sm font-bold uppercase py-1 px-4 rounded-full self-start mb-4">Recommended</div>
              )}
              <h3 className="text-2xl font-bold text-color3 mb-4">{plan.name}</h3> {/* Use Color 3 for plan name */}
              <div className="text-4xl font-bold text-[#0F6466] mb-6">{plan.price}</div>
              <ul className="mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-color4">{feature}</span> {/* Use Color 4 for feature text */}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.recommended ? 'bg-[#0F6466] text-white' : 'bg-purple-100 text-[#0F6466]'
                } hover:bg-[#11484b] hover:text-white`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
