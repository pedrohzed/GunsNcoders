'use client';

import { Plane, Hotel, Utensils, Bus } from 'lucide-react';

export default function DestinoSection() {
  const items = [
    {
      icon: <Plane size={24} />,
      title: 'Passagens Aéreas',
      description: 'Transporte de toda a equipe para São José dos Campos.'
    },
    {
      icon: <Hotel size={24} />,
      title: 'Hospedagem',
      description: 'Estadia durante os dias da Semana EAT.'
    },
    {
      icon: <Utensils size={24} />,
      title: 'Alimentação',
      description: 'Custos de alimentação para os membros da equipe.'
    },
    {
      icon: <Bus size={24} />,
      title: 'Transporte Local',
      description: 'Deslocamento entre o evento e a hospedagem.'
    }
  ];

  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-6">Para onde vai sua doação?</h2>
          <p className="text-gray-400">
            A transparência é fundamental. Cada centavo arrecadado será utilizado para garantir a 
            presença da Guns N' Coders na Semana EAT.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-[2rem] glass hover:bg-white/5 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all">
                <div className="text-gold">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
