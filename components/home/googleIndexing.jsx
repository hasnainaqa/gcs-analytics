import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function GoogleIndexing() {
  return (
    <section className="py-20 bg-[#D2E8E3]">
      {' '}
      {/* Use Color 3 for the background */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#2C3532]">
              {' '}
              {/* Use Color 8 for text */}
              Amplify Traffic & <span className="text-[#0F6466]">Unlock Data-Driven SEO Insights</span>
            </h1>
            <p className="text-xl text-[#2C3532] mb-8">
              {' '}
              {/* Use a darker text color for better readability */}
              Sync data from Google Analytics and Google Search Console platforms.Boost your Google searchability & SEO to grow your
              search ranking and site visibility.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-[#0F6466] hover:bg-[#CDE5DF] text-white flex items-center">
                {' '}
                {/* Button background and hover color */}
                Start Optimizing
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
              alt="SEO Illustration"
              className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-[#0F6466]" // Using Color 5 for the ring color
            />
          </div>
        </div>
      </div>
    </section>
  );
}
