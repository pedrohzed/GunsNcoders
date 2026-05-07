'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function TeamSection() {
  const members = [
    { name: 'Ana Julia Felizardo', role: 'Membro' },
    { name: 'Cauã de Castro Spinelli', role: 'Membro' },
    { name: 'Isabel Rosa', role: 'Membro' },
    { name: 'Julia Macedo da Silva Campos', role: 'Membro' },
    { name: 'Levi Tonkonoh', role: 'Membro' },
    { name: 'Pedro Henrique Azevedo', role: 'Membro' },
    { name: 'Tiago Barros Pires', role: 'Professor' },
  ];

  return (
    <section id="equipe" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Nossa Equipe</h2>
          <p className="text-gray-400">Os talentos por trás da Guns N' Coders.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-4 aspect-square rounded-[2rem] overflow-hidden glass group-hover:border-primary/50 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full flex items-center justify-center bg-white/5">
                   <User size={64} className="text-gray-700 group-hover:text-primary/50 transition-colors" />
                </div>
              </div>
              <h4 className="font-bold text-white text-center group-hover:text-primary transition-colors">{member.name}</h4>
              <p className="text-sm text-gray-500 text-center uppercase tracking-widest font-semibold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
