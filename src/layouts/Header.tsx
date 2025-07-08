import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-start justify-between gap-4 px-20 py-8">
      <img src="/loader.svg" alt="Loader" className="block h-12" />
      <h2 className="m-0 text-[2.5rem] leading-none text-white">
        Musée Matisse
      </h2>
    </header>
  );
};

export default Header;
