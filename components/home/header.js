import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrollPosition > 50 ? 'bg-[#2C3532] shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-[#0F6466]" />
          <span className="text-2xl font-bold text-[#0F6466]">SEO-Analytics</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-[#0F6466]">
            How It Works
          </a>
          <a href="#features" className="text-gray-600 hover:text-[#0F6466]">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-[#0F6466]">
            Pricing
          </a>
          <a href="#faq" className="text-gray-600 hover:text-[#0F6466]">
            FAQ
          </a>
        </nav>
        <Link href="/signin" className="bg-[#0F6466] hover:bg-[#2C3532] text-white h-11 rounded-md px-8 inline-flex items-center justify-center">
          Get Started
        </Link>
      </div>
    </header>
  );
}
