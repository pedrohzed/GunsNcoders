'use client';

import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-purple border-primary/30 mb-8">
            <Award className="text-gold" size={20} />
            <span className="text-sm font-semibold text-gold">Medalha de Ouro OBT 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            Apoie a <span className="text-gradient-purple">Guns N' Coders</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            🥇 Nossa equipe conquistou a Medalha de Ouro na OBT e agora temos a oportunidade de representar o Brasil na <span className="text-white font-semibold">Escola Avançada de Tecnologia (EAT)</span> — um evento de alto nível científico e tecnológico que ocorrerá de 27 de julho a 1º de agosto de 2026 em São José dos Campos, SP. Contamos com a ajuda de cada um!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#doar"
              className="px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-neon-purple text-lg"
            >
              Doar Agora <ArrowRight size={20} />
            </a>
            <a
              href="#equipe"
              className="px-10 py-5 glass hover:bg-white/10 rounded-2xl font-bold transition-all text-lg"
            >
              Nossa Equipe
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm text-gray-500">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-lg">27/07 — 01/08/2026</span>
              <span>Data da Viagem</span>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-800" />
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-lg">São José dos Campos, SP</span>
              <span>Local do Evento</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
