
import React from 'react';

export const Guarantee: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Seu Risco é <span className="text-cyan-400">ZERO</span>!</h2>
                        <h3 className="text-2xl font-semibold text-purple-400 mb-4">Garantia Incondicional de 7 Dias</h3>
                        <p className="text-gray-300 mb-4">
                            Temos tanta confiança na transformação que este curso vai gerar no seu negócio que assumimos todo o risco.
                        </p>
                        <p className="text-gray-300">
                            Você tem 7 dias completos para explorar todo o material, assistir às aulas e participar da comunidade. Se por qualquer motivo você achar que não é para você, basta nos enviar um único e-mail e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-full animate-pulse blur-xl"></div>
                            <div className="relative bg-gray-800 rounded-full p-4 flex flex-col items-center justify-center h-full text-center border-2 border-cyan-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-yellow-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <p className="text-3xl font-black">7 DIAS</p>
                                <p className="font-semibold text-purple-300">DE GARANTIA</p>
                                <p className="text-sm text-gray-400">Seu Dinheiro de Volta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
