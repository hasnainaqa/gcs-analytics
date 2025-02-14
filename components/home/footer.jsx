import { Star, Heart, Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-2C3532 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SEO-Analytics</h3>
            <p>Boosting your SEO performance .</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-purple-400">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <p>Email: support@seo.analytics.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <Coffee className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <Star className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400">
                <Heart className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} SEO-Analytics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
