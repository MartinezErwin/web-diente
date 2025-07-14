"use client";

import React, { useState } from "react";
import { navigationLinks, contactLink } from "../links.js";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center py-5">
      <nav className="bg-white rounded-full  flex items-center px-6 md:px-6 py-4 shadow-md w-11/12 md:w-7xl max-w-7xl justify-between">
        <span
          className="font-bold text-lg transition-colors duration-200 hover:text-rose-600"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Diente a Diente
        </span>
        <ul className="hidden md:flex items-center gap-2">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`px-6 py-2 rounded-full font-medium text-base transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-rose-300 hover:shadow-md ${
                  link.isActive ? "bg-rose-100 " : ""
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contactLink.href}
          className="hidden md:block px-6 py-2 rounded-full font-medium text-base bg-rose-300 hover:bg-rose-400 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {contactLink.label}
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-rose-50 rounded-full"
        >
          <div
            className={`transition-transform duration-300 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 transition-colors duration-200" />
            ) : (
              <Bars3Icon className="h-6 w-6 transition-colors duration-200" />
            )}
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg py-4 md:hidden z-50 animate-in slide-in-from-top-2 duration-300">
            <ul className="flex flex-col">
              {navigationLinks.map((link, index) => (
                <li
                  key={link.id}
                  className="transition-all duration-200 ease-in-out"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a
                    href={link.href}
                    className={`block px-6 py-3 font-medium text-base transition-all duration-200 ease-in-out hover:bg-rose-50 hover:pl-8 hover:shadow-sm ${
                      link.isActive ? "bg-rose-100" : ""
                    }`}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li
                className="border-t border-gray-200 mt-2 pt-2 transition-all duration-200 ease-in-out"
                style={{ animationDelay: `${navigationLinks.length * 50}ms` }}
              >
                <a
                  href={contactLink.href}
                  className="block mx-6 py-3 px-6 rounded-full font-medium text-base bg-rose-300 hover:bg-rose-400 transition-all duration-200 ease-in-out text-center transform hover:scale-105 hover:shadow-md"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {contactLink.label}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
