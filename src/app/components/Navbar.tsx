"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          Minha App
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/register" className="text-white hover:text-gray-200">
            Registrar
          </Link>
          <Link href="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link href="/users" className="text-white hover:text-gray-200">
            Lista de Usuários
          </Link>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-200">
            Home
          </Link>
          <Link
            href="/register"
            className="block text-white hover:text-gray-200"
          >
            Registrar
          </Link>
          <Link href="/login" className="block text-white hover:text-gray-200">
            Login
          </Link>
          <Link href="/users" className="block text-white hover:text-gray-200">
            Lista de Usuários
          </Link>
        </div>
      )}
    </nav>
  );
}
