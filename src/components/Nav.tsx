import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "Technologies",
    "Projects",
    "About",
    "Contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <img
            src={hamburger}
            alt="Menu"
            className="h-5 w-5 object-contain"
          />
        </button>

        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-9 w-auto object-contain"
          />

          <span className="hidden text-xl font-bold text-slate-900 sm:block">
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-indigo-600 sm:px-4"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:scale-105 sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-indigo-600"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;