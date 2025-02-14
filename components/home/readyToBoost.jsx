import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ReadyToBoost() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#2d7172] to-[#175657]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Boost Your Search Rankings?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">Join thousands of satisfied customers and start seeing results today.</p>
        <Button className="bg-white text-[#0F6466] hover:bg-color1 hover:text-[#0F6466] text-lg py-6 px-12">
          {' '}
          {/* Use Color 1 for hover background */}
          Get Started Now
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
