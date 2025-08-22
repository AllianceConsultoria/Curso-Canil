import React from 'react';

const PetVersoLogo: React.FC = () => (
  <div className="flex items-center justify-center">
     <img src="https://storage.googleapis.com/fpl-assets/petverso-logo.png" alt="PetVerso Logo" className="h-16" />
  </div>
);

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
            <div className="container mx-auto px-6 text-center text-gray-400">
                <div className="flex flex-col items-center mb-4">
                    <PetVersoLogo />
                </div>
                <p className="mb-2">© {new Date().getFullYear()} PetVerso. Todos os direitos reservados.</p>
                <p className="text-sm">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
            </div>
        </footer>
    );
};