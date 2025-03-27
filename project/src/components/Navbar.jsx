import React from 'react';
import { Link } from 'react-router-dom';
import { FilmIcon } from '@heroicons/react/24/solid';

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FilmIcon className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold">MovieFlick</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <Link to="/movies" className="hover:text-red-500 transition-colors">Movies</Link>
            <Link to="/tv" className="hover:text-red-500 transition-colors">TV Shows</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;