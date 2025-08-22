
import React, { useState } from 'react';
import type { FaqItem } from '../types';

const faqData: FaqItem[] = [
    {
        question: "Por quanto tempo terei acesso ao curso?",
        answer: "O acesso à Formação PetVerso é vitalício! Você pode estudar no seu ritmo, quantas vezes quiser, e ainda terá acesso a todas as futuras atualizações sem custo adicional."
    },
    {
        question: "Preciso ter experiência com gestão de negócios?",
        answer: "Não! O curso foi desenhado para te levar do absoluto zero ao nível avançado. Abordamos desde os conceitos mais básicos de negócios até estratégias complexas, tudo de forma didática e prática."
    },
    {
        question: "Como e quando receberei o acesso?",
        answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail da nossa plataforma com seu login e senha para acessar todo o conteúdo."
    },
    {
        question: "Este curso serve para quem tem apenas um pet shop?",
        answer: "Sim! Embora o foco principal seja em canis e centros de treinamento, os módulos de gestão, finanças, marketing e vendas são 100% aplicáveis a qualquer negócio no setor pet, incluindo pet shops."
    },
    {
        question: "Terei suporte durante o curso?",
        answer: "Com certeza! Você terá acesso à nossa comunidade exclusiva de alunos, onde poderá tirar dúvidas diretamente com os instrutores e interagir com outros empreendedores do setor."
    }
];

const FaqItemComponent: React.FC<{ item: FaqItem }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-300 pr-6">
                    <p>{item.answer}</p>
                </div>
            )}
        </div>
    );
};


export const Faq: React.FC = () => {
    return (
        <section className="py-20 bg-gray-800">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                    <p className="text-lg text-gray-300">Ainda tem alguma dúvida? Nós respondemos.</p>
                </div>
                <div>
                    {faqData.map((item, index) => (
                        <FaqItemComponent key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
