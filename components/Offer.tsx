import React from 'react';
import CountdownTimer from './CountdownTimer';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-cyan-400 mr-3 flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-600/50">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Acesso completo à Formação <span className="text-purple-400">PetVerso</span></h2>
              <p className="text-gray-300 mb-6">Tudo que você precisa para construir um negócio de sucesso no mercado pet, em um só lugar.</p>
              
              <h3 className="text-xl font-bold mb-4">O que você recebe:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex"><CheckIcon /> Acesso vitalício a todos os módulos do curso.</li>
                <li className="flex"><CheckIcon /> Atualizações constantes com novas aulas e materiais.</li>
                <li className="flex"><CheckIcon /> Suporte exclusivo na nossa comunidade de alunos.</li>
              </ul>

              <div className="bg-purple-900/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">E ainda leva 3 Bônus Exclusivos:</h3>
                 <ul className="space-y-3">
                    <li className="flex"><CheckIcon className="text-yellow-400"/> <b>[Bônus 1]</b> Pack de Planilhas de Gestão Prontas.</li>
                    <li className="flex"><CheckIcon className="text-yellow-400"/> <b>[Bônus 2]</b> Acesso à Comunidade VIP de Alunos.</li>
                    <li className="flex"><CheckIcon className="text-yellow-400"/> <b>[Bônus 3]</b> Gravações de Mentorias em Grupo.</li>
                 </ul>
              </div>

            </div>

            <div className="bg-gray-800 p-8 rounded-xl text-center flex flex-col justify-center border border-gray-700">
                <CountdownTimer />
                <p className="text-lg text-gray-400">De <span className="line-through">R$ 1.997,00</span> por apenas:</p>
                <p className="text-5xl md:text-6xl font-black my-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    12x R$ 99,50
                </p>
                <p className="mb-6">ou R$ 997,00 à vista</p>

                <a 
                    href="https://app.monetizze.com.br/checkout/3887f5a91d6e271adb7af4c648dbb9ea" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-xl bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/30">
                    QUERO GARANTIR MINHA VAGA AGORA
                </a>
                <p className="text-sm text-gray-500 mt-4">Compra 100% segura. Acesso imediato.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};