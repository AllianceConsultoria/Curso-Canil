
import React from 'react';

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/seed/petproblem/600/400" alt="Pessoa planejando negócio" className="rounded-xl shadow-2xl" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Você sonha em viver da sua paixão, <span className="text-purple-400">mas se sente travado?</span></h2>
            <p className="mb-6 text-gray-300">Muitos amantes de cães talentosos desistem do sonho de ter um negócio próprio por não saberem como lidar com os desafios da gestão. Eles se perguntam:</p>
            <ul className="space-y-4">
              <li className="flex items-center"><CheckIcon /> Por onde eu começo o planejamento?</li>
              <li className="flex items-center"><CheckIcon /> Como gerenciar projetos, finanças e marketing?</li>
              <li className="flex items-center"><CheckIcon /> Quais são as melhores práticas de treinamento e bem-estar animal?</li>
              <li className="flex items-center"><CheckIcon /> Como transformar um hobby em um negócio lucrativo e sustentável?</li>
            </ul>
             <p className="mt-6 text-gray-300 font-semibold">A falta de um método claro é o que separa você do sucesso. Nós temos a solução.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
