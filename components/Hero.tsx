import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gray-900">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/pethero/1920/1080')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-tight">
          Transforme sua Paixão por Cães em um Negócio de Sucesso
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          O guia definitivo para você criar, gerenciar e escalar um canil profissional do absoluto zero, mesmo que não tenha experiência com gestão.
        </p>
        <a 
          href="https://app.monetizze.com.br/checkout/3887f5a91d6e271adb7af4c648dbb9ea" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/30">
          QUERO CONSTRUIR MEU NEGÓCIO
        </a>
      </div>
    </section>
  );
};