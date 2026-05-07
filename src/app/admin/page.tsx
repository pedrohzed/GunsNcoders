'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Save, RefreshCw, LogOut } from 'lucide-react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [currentAmount, setCurrentAmount] = useState(0);
  const [goalAmount, setGoalAmount] = useState(17000);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'gnc@admin2026') {
      setIsLoggedIn(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch('/api/donation')
        .then(res => res.json())
        .then(data => {
          setCurrentAmount(data.currentAmount);
          setGoalAmount(data.goalAmount);
        });
    }
  }, [isLoggedIn]);

  const handleSave = async () => {
    setIsSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/donation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentAmount, goalAmount })
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Atualizado com sucesso!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      setMessage('Erro ao salvar.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black-rich p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md glass p-8 rounded-3xl border-primary/20"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="text-primary" size={32} />
          </div>
          <h1 className="text-2xl font-display font-bold text-center mb-8">Admin Access</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Digite a senha"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 mb-4 focus:border-primary outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-neon-purple"
            >
              Entrar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-rich p-6 md:p-12">
      <div className="container mx-auto max-w-2xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-display font-bold">Painel de Controle</h1>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
          >
            <LogOut size={20} /> Sair
          </button>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border-primary/20">
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                Valor Atual Arrecadado (R$)
              </label>
              <input
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-bold focus:border-primary outline-none transition-all"
                value={currentAmount}
                onChange={(e) => setCurrentAmount(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                Meta de Arrecadação (R$)
              </label>
              <input
                type="number"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-2xl font-bold focus:border-primary outline-none transition-all"
                value={goalAmount}
                onChange={(e) => setGoalAmount(Number(e.target.value))}
              />
            </div>

            <div className="pt-4">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-700 text-white font-bold py-4 rounded-2xl transition-all shadow-neon-purple flex items-center justify-center gap-3"
              >
                {isSaving ? <RefreshCw className="animate-spin" /> : <Save />}
                {isSaving ? 'Salvando...' : 'Salvar Alterações'}
              </button>
              
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center mt-4 font-bold ${message.includes('Erro') ? 'text-red-500' : 'text-green-500'}`}
                >
                  {message}
                </motion.p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 glass rounded-2xl border-white/5 text-sm text-gray-500 italic">
          <p>Dica: As alterações feitas aqui serão refletidas instantaneamente na página principal para todos os usuários.</p>
        </div>
      </div>
    </div>
  );
}
