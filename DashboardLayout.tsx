// components/layouts/DashboardLayout.tsx
'use client';

import React, { ReactNode } from 'react';
import Sidebar from '../shared/Sidebar';
import Topbar from '../shared/Topbar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-4 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
