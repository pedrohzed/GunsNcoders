'use client';

import { motion } from 'framer-motion';

export default function About() {

  return (
    <section id="sobre" className="py-24 bg-black-rich">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-8">
            Quem é a <span className="text-primary">Guns N' Coders</span>?
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            Somos uma equipe brasileira de tecnologia formada por estudantes apaixonados por resolver problemas. 
            Recentemente, conquistamos a **Medalha de Ouro na OBT (Olimpíada Brasileira de Tecnologia)**, o que nos garantiu 
            uma vaga na prestigiosa **Semana EAT (Escola Avançada de Tecnologia)**.
          </p>
          <p className="text-gray-400 mb-12 leading-relaxed text-lg">
            Nossa missão é chegar topo das competições tecnológicas, enquanto desenvolvemos 
            projetos open-source e promovemos a educação tecnológica em diversos estados.
          </p>
          
          <div className="flex justify-center gap-8">
            <div className="p-8 rounded-2xl glass-purple min-w-[200px]">
              <div className="text-4xl font-bold text-white mb-1">8+</div>
              <div className="text-sm text-primary uppercase font-bold tracking-wider">Membros</div>
            </div>
            <div className="p-8 rounded-2xl glass min-w-[200px]">
              <div className="text-4xl font-bold text-white mb-1">Top 1</div>
              <div className="text-sm text-gold uppercase font-bold tracking-wider">OBT Nacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
