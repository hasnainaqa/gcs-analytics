import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto bg-color2">
      {' '}
      {/* Use Color 2 for the background */}
      <div className="relative pt-24 lg:pt-28">
        <div className="mx-auto px-6 max-w-7xl md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-4">
              <div className="inline-block bg-white text-[#0F6466]  px-4 py-2 rounded-full text-sm font-semibold">
                Trusted by 100+ SEO Experts on Twitter
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-color3">
              {' '}
              {/* Use Color 3 for title text */}
              Fast-Track Your Site's Google Analytics
            </h1>
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-6 w-6 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg text-color4 mb-8">
              {' '}
              {/* Use darker gray (Color 4) for readability */}
              Unlock faster and improved search rankings with SEO Analytics. Ensure quick and efficient reach higher rankings.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="p-1 rounded-[calc(var(--btn-border-radius)+4px)]">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-[#0F6466] hover:bg-[#2C3532] text-white h-11 ">Start Optimizing</Button>
                </div>
              </div>
              <p className="text-color3 mt-4">
                {' '}
                {/* Use Color 3 for the additional text */}
                No credit card required, start for free.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <img src="/Images" alt="SEO Dashboard" width={1200} height={600} className="rounded-lg ring-1 ring-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
