import React from 'react';

export const CtaBanner: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-purple-700 to-cyan-600">
            <div className="container mx-auto px-6 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para dar o próximo passo?</h2>
                 <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-purple-100">Chega de adiar seu sonho. Comece hoje a construir um negócio sólido e lucrativo no universo que você ama.</p>
                 <a 
                    href="https://app.monetizze.com.br/checkout/3887f5a91d6e271adb7af4c648dbb9ea"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-xl inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-500/30">
                    QUERO TRANSFORMAR MINHA PAIXÃO EM LUCRO
                </a>
            </div>
        </section>
    );
};