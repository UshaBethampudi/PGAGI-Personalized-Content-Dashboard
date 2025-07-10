// components/shared/Sidebar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState('feed');

  const links = [
    { name: 'Feed', href: '/' },
    { name: 'Trending', href: '/trending' },
    { name: 'Favorites', href: '/favorites' },
    { name: 'Settings', href: '/settings' },
  ];

  return (
    <div className="w-64 h-full bg-white shadow-md p-5 hidden md:block">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">🧠 Dashboard</h1>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`block px-3 py-2 rounded-md font-medium hover:bg-indigo-100 ${
                active === link.name.toLowerCase() ? 'bg-indigo-200' : ''
              }`}
              onClick={() => setActive(link.name.toLowerCase())}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
