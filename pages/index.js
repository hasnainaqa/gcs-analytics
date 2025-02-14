import Header from '@/components/home/header';
import Hero from '@/components/home/hero';
import Stats from '@/components/home/stats';
import GoogleIdexing from '@/components/home/googleIndexing';
import HowItWork from '@/components/home/howItWork';
import Autopilot from '@/components/home/autopilot';
import DeIndexing from '@/components/home/deIdexing';
import SerchConsole from '@/components/home/serch ConsoleErrors';
import CrashCourse from '@/components/home/crashCourse';
import WikiSEO from '@/components/home/wikiSEO';
import Pricing from '@/components/home/pricing';
import WallOfLove from '@/components/home/wallOfLove';
import Footer from '@/components/home/footer';
import ReadyToBoost from '@/components/home/readyToBoost';

export default function LandingPage() {
  return (
    <div className="bg-[#D2E8E3] text-gray-800">
      {' '}
      {/* Body background color */}
      {/* Header */}
      <div className="bg-gradient-to-b from-[#ECFBF4] to-[#D2E8E3]">
        {' '}
        {/* Adjust gradient */}
        <Header />
        <Hero />
      </div>
      <GoogleIdexing />
      <Stats />
      <HowItWork />
      <Autopilot />
      <DeIndexing />
      <SerchConsole />
      <CrashCourse />
      <WikiSEO />
      <Pricing />
      <WallOfLove />
      <ReadyToBoost />
      <Footer />
    </div>
  );
}
