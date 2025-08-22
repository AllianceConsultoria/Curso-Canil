
import React from 'react';
import type { Testimonial } from '../types';

const testimonialData: Testimonial[] = [
  {
    image: 'https://picsum.photos/seed/person1/100/100',
    name: 'Juliana Costa',
    role: 'Dona do Canil J.C.',
    text: 'Eu tinha o conhecimento técnico com cães, mas a gestão era um pesadelo. A formação da PetVerso foi um divisor de águas, me deu o plano que eu precisava para organizar a casa e dobrar meu faturamento em 6 meses.'
  },
  {
    image: 'https://picsum.photos/seed/person2/100/100',
    name: 'Marcos Andrade',
    role: 'Adestrador Profissional',
    text: 'Sempre sonhei em ter meu próprio centro de treinamento. O curso me deu a confiança e as ferramentas para tirar o projeto do papel. A parte de gestão de projetos e plano de negócios é simplesmente fantástica!'
  },
  {
    image: 'https://picsum.photos/seed/person3/100/100',
    name: 'Carla Dias',
    role: 'Empreendedora Pet',
    text: 'Comecei do zero, apenas com a paixão por animais. A Formação PetVerso me guiou em cada etapa, desde a escolha das raças até o marketing digital. Hoje meu negócio é referência na minha cidade. Recomendo de olhos fechados!'
  },
];

const StarRating: React.FC = () => (
    <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full flex flex-col">
        <StarRating />
        <p className="text-gray-300 mb-6 flex-grow">"{testimonial.text}"</p>
        <div className="flex items-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-purple-400">{testimonial.role}</p>
            </div>
        </div>
    </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quem fez, recomenda.</h2>
          <p className="text-lg text-gray-300">Veja como a nossa formação impactou a vida e os negócios de quem confiou no nosso método.</p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};
