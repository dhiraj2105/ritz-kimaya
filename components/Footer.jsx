// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:flex md:justify-between items-start space-y-8 md:space-y-0">
        {/* Logo Section */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={150} height={150} />
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Building the web with care and code.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/help" className="hover:text-blue-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
        <div className="mb-4 flex justify-center space-x-4">
          <a
            href="https://twitter.com"
            className="hover:text-blue-400"
            aria-label="Twitter"
          >
            🐦
          </a>
          <a
            href="https://github.com"
            className="hover:text-blue-400"
            aria-label="GitHub"
          >
            💻
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-blue-400"
            aria-label="LinkedIn"
          >
            🔗
          </a>
        </div>
        <p>© {new Date().getFullYear()} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
}
