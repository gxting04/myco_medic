import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { name: "Airway Management", href: "/products/group/Airway Management" },
      { name: "Medical Equipment", href: "/products/group/Medical Equipment" },
      { name: "Safety & Protection", href: "/products/group/Safety & Protection" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Returns", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#f5f5f7] text-gray-600 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/Myco_Medic.png"
                alt="Myco Medic Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">Myco Medic</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Advancing healthcare with precision-engineered medical supplies and equipment. 
              Committed to quality, safety, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-500 hover:text-blue-600 hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} Myco Medic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Use</a>
            <a href="#" className="hover:text-gray-900">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
