'use client';


export default function SocialMedia() {
  const socials = [
    { name: 'Instagram', icon: <img src="/instagram_icon.png" alt="Instagram" className="w-10 h-10 object-contain" />, href: 'https://www.instagram.com/gunsncoders/', color: 'hover:bg-white/10' },
    { name: 'YouTube', icon: <img src="/youtube_icon.jpg" alt="YouTube" className="w-10 h-10 object-contain rounded-lg" />, href: 'http://www.youtube.com/@GunsnCoders', color: 'hover:bg-white/10' },
  ];

  return (
    <section className="py-24 glass-purple border-y border-primary/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-display font-bold mb-10">Siga-nos nas Redes Sociais</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all ${social.color} hover:scale-110 hover:shadow-lg`}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-black text-gray-500 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-display font-bold text-white mb-2">Guns N' Coders</div>
            <p className="text-sm">© 2026 Guns N' Coders. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="mailto:contato@gunsncoders.com" className="hover:text-white transition-colors">contato@gunsncoders.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
