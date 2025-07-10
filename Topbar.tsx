// components/shared/Topbar.tsx
'use client';

const Topbar = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-indigo-700">Welcome to Your Feed</h2>
      {/* You can add a user profile or dark mode toggle here */}
    </header>
  );
};

export default Topbar;
