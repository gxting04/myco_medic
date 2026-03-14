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
      { name: "Careers", href: "/career" },
    ],
  };

  return (
    <footer className="bg-[#f5f5f7] text-gray-600 pt-12 md:pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img
                src="/Myco_Medic.png"
                alt="Myco Medic Logo"
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Advancing healthcare with precision-engineered medical supplies and equipment. 
              Committed to quality, safety, and innovation.
            </p>
            <a
              href="https://shopee.com.my/healthcare_marts?categoryId=100001&entryPoint=ShopByPDP&itemId=8606053109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6 hover:opacity-80 transition-opacity"
            >
              <img
                src="/shopee_logo.png"
                alt="Shop on Shopee"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.Products.map((link) => (
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

          <div className="lg:col-span-1 lg:col-start-5">
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
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
        </div>

        <div className="border-t border-gray-200 pt-8 text-xs text-gray-500">
          <p>© {currentYear} Myco Medic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
