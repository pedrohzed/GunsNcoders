'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Copy, Check, QrCode, Heart } from 'lucide-react';

export default function DonationSection() {
  const [copied, setCopied] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(0);
  const goalAmount = 17000;
  const pixKey = '84986170524';
  const qrCodeUrl = '/qrcode.png';

  const progress = (currentAmount / goalAmount) * 100;

  // Fetch current stats from API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/donation', { cache: 'no-store' });
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json();
        setCurrentAmount(data.currentAmount);
      } catch (err) {
        // Log error but don't crash
        console.warn('Could not fetch donation stats:', err);
      }
    };
    fetchStats();
    // Poll for updates every 30 seconds
    const interval = setInterval(fetchStats, 30000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section id="doar" className="py-24 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Faça Parte dessa Conquista</h2>
          <p className="text-gray-400">Sua contribuição ajuda a financiar nossa viagem para São José dos Campos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Progress Card */}
          <div className="glass p-8 md:p-12 rounded-[2.5rem] border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-400 font-medium">Meta de Arrecadação</span>
                <span className="text-2xl font-bold text-white">
                  R$ {currentAmount.toLocaleString('pt-BR')} <span className="text-sm text-gray-500 font-normal">de R$ {goalAmount.toLocaleString('pt-BR')}</span>
                </span>
              </div>
              
              <div className="w-full h-4 bg-white/5 rounded-full overflow-hidden mb-4 p-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full shadow-neon-purple"
                />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-primary font-bold">{progress.toFixed(1)}% Completo</span>
                <span className="text-gray-500">{currentAmount >= goalAmount ? 'Meta Atingida!' : `Faltam R$ ${(goalAmount - currentAmount).toLocaleString('pt-BR')}`}</span>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/5">
              <p className="text-sm text-gray-400 text-center italic">
                "Pequenas contribuições geram grandes impactos. Ajude nossa equipe a alcançar esse objetivo!"
              </p>
            </div>
          </div>

          {/* PIX Card */}
          <div className="glass-purple p-8 md:p-12 rounded-[2.5rem] border-primary/20 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
              <QrCode className="text-primary" size={32} />
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-4">Doe via PIX</h3>
            <p className="text-sm text-gray-400 mb-8 max-w-xs">
              Aponte a câmera do seu banco para o QR Code abaixo ou copie a chave PIX.
            </p>

            <div className="bg-white p-4 rounded-3xl mb-8 relative group">
               {/* Using the user provided image */}
               <img 
                 src={qrCodeUrl} 
                 alt="PIX QR Code" 
                 className="w-48 h-48 object-contain"
               />
               <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
            </div>

            <div className="w-full">
              <div className="text-xs text-primary font-bold uppercase mb-2">Chave PIX (Celular)</div>
              <div className="flex items-center gap-2 p-1 pl-4 bg-black/40 rounded-2xl border border-white/5">
                <span className="flex-1 text-left font-mono text-sm truncate">{pixKey}</span>
                <button
                  onClick={copyToClipboard}
                  className="p-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-all flex items-center gap-2"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  <span className="text-xs font-bold">{copied ? 'Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-xs text-gray-500">
               <Heart size={14} className="text-primary" />
               <span>Todo valor arrecadado será destinado à equipe.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
