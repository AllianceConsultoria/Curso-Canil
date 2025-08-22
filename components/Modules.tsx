
import React from 'react';
import type { Module } from '../types';

const moduleData: Module[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: "Módulo 1: Estrutura e Planejamento do Canil",
    description: "Do conceito inicial à infraestrutura física. Aprenda a projetar um canil com máxima qualidade de vida para os animais e baixo custo operacional."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M5 12H3m2-3H3m18 3h-2m2-3h-2" /></svg>,
    title: "Módulo 2: Técnicas Avançadas de Treinamento",
    description: "Planilhas e métodos de treinamento para obediência, proteção, tracking e mais. Forme cães de alta performance para diversos objetivos."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    title: "Módulo 3: Gerenciamento de Projetos e Negócios",
    description: "Domine os 7 passos da gestão de projetos. Aprenda a definir escopo, cronograma, orçamento e a monitorar riscos para garantir o sucesso."
  },
   {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: "Módulo 4: Finanças e Plano de Negócios",
    description: "Construa um plano de negócios simplificado e poderoso. Projete investimentos, despesas e receitas para um crescimento saudável e previsível."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.875 9.168-4.684C19.486 3.072 20.364 4.5 21 6c-1.331 2.682-5.23 5.37-9 5.37H7" /></svg>,
    title: "Módulo 5: Marketing e Vendas para o Setor Pet",
    description: "Aprenda a criar um plano de marketing eficaz, posicionar sua marca e utilizar propaganda para atrair os clientes certos e fechar mais vendas."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2" /></svg>,
    title: "Módulo 6: Recrutamento e Gestão de Pessoas",
    description: "Saiba como recrutar, selecionar e gerenciar a equipe ideal para o seu canil. Crie um ambiente de trabalho produtivo e alinhado com seus valores."
  },
];

const ModuleCard: React.FC<{ module: Module }> = ({ module }) => (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-600/20 text-purple-400 mb-4">
            {module.icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{module.title}</h3>
        <p className="text-gray-400">{module.description}</p>
    </div>
);

export const Modules: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você Vai Dominar na Formação PetVerso?</h2>
                    <p className="text-lg text-gray-300">Uma jornada completa, do chão de fábrica à gestão estratégica. Veja os pilares do nosso método:</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {moduleData.map((mod, index) => (
                        <ModuleCard key={index} module={mod} />
                    ))}
                </div>
            </div>
        </section>
    );
};
