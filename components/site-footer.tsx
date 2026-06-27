export default function Footer() {
  return (
    <footer className="bg-[#003b8e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm mb-4">
              SkillKwiz is at the forefront of transforming recruitment with
              innovative assessment solutions and best-in-class support.
            </p>
            <div className="text-sm">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
              <span className="mx-2">|</span>
              <a href="/sales" className="hover:underline">
                Sales
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="/investors" className="hover:underline">
                  Investors
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="block">Address: 5th Block,</span>
                <span className="block">Jayanagar, Bangalore 560041</span>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@skillkwiz.com" className="hover:underline">
                  info@skillkwiz.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919740377330" className="hover:underline">
                  +91-9740377330
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-center">
          Copyright © 2025
        </div>
      </div>
    </footer>
  );
}
