import React from 'react';

const PetVersoLogo: React.FC = () => (
  <div className="flex items-center">
    <img src="https://storage.googleapis.com/fpl-assets/petverso-logo.png" alt="PetVerso Logo" className="h-14" />
  </div>
);

export const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 md:px-12 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <PetVersoLogo />
        <a 
          href="https://app.monetizze.com.br/checkout/3887f5a91d6e271adb7af4c648dbb9ea"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/30">
          QUERO ME INSCREVER
        </a>
      </div>
    </header>
  );
};