import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Activity, 
  Maximize, 
  MapPin, 
  Calendar, 
  Clock, 
  Linkedin,
  ArrowUpRight,
  Plus,
  Crosshair,
  Map,
  X
} from 'lucide-react';

// --- Components ---

const TechCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-08-19T14:30:00-03:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-6 text-slate-300 font-mono">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <div className="text-2xl md:text-3xl font-light tracking-widest text-teal-400">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mt-1">{unit}</span>
        </div>
      ))}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Hero Header from Uploaded Image */}
      <section className="w-full bg-white border-b-2 border-black">
        <img 
          src="/banner-v8.png" 
          alt="Foro Patagónico de Innovación y Desarrollo Territorial" 
          className="w-full h-auto block"
        />
      </section>

      {/* Navbar Brutalist */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl h-[85vh] flex flex-col relative border-2 border-black shadow-[8px_8px_0_0_#000]">
            <div className="flex justify-between items-center p-4 border-b-2 border-black">
              <h2 className="text-xl font-display font-bold uppercase tracking-tighter">Registro</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-blue-600 hover:text-white p-2 transition-colors border-2 border-transparent hover:border-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden relative bg-zinc-50">
              <iframe 
                src="https://luma.com/embed/event/h4oe3yvv/simple" 
                className="absolute inset-0 w-full h-full border-0"
                title="Registro"
                allow="camera; microphone; fullscreen; payment"
              />
            </div>
          </div>
        </div>
      )}

      <div className="sticky top-0 z-40 bg-white border-b-2 border-black">
        <div className="px-6 md:px-12 py-4 flex justify-between items-center">
          <div className="font-display font-bold tracking-tighter text-2xl uppercase">
            BIT<span className="font-light">CRTIC</span>
          </div>
          <div className="hidden md:flex space-x-12 text-xs font-bold tracking-[0.1em] uppercase text-black">
            <a href="#proposito" className="hover:text-blue-600 hover:underline hover:decoration-blue-600 underline-offset-4">Propósito</a>
            <a href="#programa" className="hover:text-blue-600 hover:underline hover:decoration-blue-600 underline-offset-4">Programa</a>
            <a href="#speakers" className="hover:text-blue-600 hover:underline hover:decoration-blue-600 underline-offset-4">Speakers</a>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="text-xs font-bold tracking-[0.1em] uppercase text-white bg-black px-6 py-3 hover:bg-blue-600 transition-colors">
            Registrarse
          </button>
        </div>
      </div>

      {/* Sobre el Foro */}
      <section id="proposito" className="py-24 border-b-2 border-black bg-white">
        <div className="px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-2 border-black pb-8">
            <h2 className="text-6xl md:text-[8rem] leading-none font-display font-bold tracking-tighter text-black uppercase">
              Propósito
            </h2>
            <div className="flex items-center mt-6 md:mt-0 text-xs font-bold tracking-[0.1em] text-blue-600 uppercase">
              <Plus className="w-4 h-4 mr-2" /> ABOUT — FORUM
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-7 text-3xl md:text-5xl font-display font-semibold tracking-tight text-black leading-tight">
              El Foro Patagónico reúne a referentes de hubs tecnológicos, parques científicos, universidades y ecosistemas de <span className="underline decoration-4 decoration-blue-600 underline-offset-8">Argentina y Chile</span>.
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between">
              <p className="text-xl text-zinc-700 leading-snug font-medium mb-12">
                Fortalecer la cooperación binacional, promover la vinculación entre instituciones y construir una agenda compartida para el desarrollo territorial de la Patagonia.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t-2 border-black">
                <div>
                  <div className="text-xs font-bold tracking-[0.1em] text-black uppercase mb-2">Fecha</div>
                  <div className="text-2xl font-display font-bold tracking-tight text-black">19 Ago 2026</div>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.1em] text-black uppercase mb-2">Lugar</div>
                  <div className="text-2xl font-display font-bold tracking-tight text-black">San Martín de los Andes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ejes Temáticos (Brutalist Grid) */}
      <section className="bg-black text-white border-b-2 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-4 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-zinc-800">
          {[
            { num: "01", title: "Rol del Estado", desc: "Políticas públicas, fomento a la innovación y el papel de las instituciones en el desarrollo territorial." },
            { num: "02", title: "Parques Tecnológicos y Clusters", desc: "Modelos de innovación abierta, transferencia tecnológica y fomento al emprendimiento de alto impacto." },
            { num: "03", title: "Ecosistemas", desc: "Articulación de actores, vinculación tecnológica y construcción de redes de colaboración regional." },
            { num: "04", title: "Desafíos y oportunidades de Vaca Muerta", desc: "Innovación energética, impacto territorial y desarrollo de nuevas cadenas de valor y servicios." }
          ].map((eje, idx) => (
            <div key={idx} className="p-8 md:p-12 hover:bg-blue-600 hover:text-white transition-colors group">
              <div className="flex justify-between items-start mb-12">
                <div className="text-lg font-display font-bold tracking-tighter">{eje.num}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-blue-200">// Eje Temático</div>
              </div>
              <h3 className="text-3xl font-display font-bold tracking-tight mb-4">{eje.title}</h3>
              <p className="text-base text-zinc-400 group-hover:text-blue-100 font-medium leading-snug">{eje.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda Timeline */}
      <section id="programa" className="bg-white border-b-2 border-black">
        <div className="px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-2 border-black pb-8">
            <h2 className="text-6xl md:text-[8rem] leading-none font-display font-bold tracking-tighter text-black uppercase">
              Programa
            </h2>
            <div className="flex items-center mt-6 md:mt-0 text-xs font-bold tracking-[0.1em] text-blue-600 uppercase">
              <Plus className="w-4 h-4 mr-2" /> LINEUP — 19 AGO
            </div>
          </div>
          
          <div className="flex flex-col border-t-2 border-black">
            {[
              { time: "10:30", title: "Networking — Rondas de Conexión", desc: "" },
              { time: "14:30", title: "Bienvenida", desc: "" },
              { time: "14:40", title: "Bases para el Desarrollo Regional", desc: "El rol de la tecnología y la innovación en la Patagonia" },
              { time: "15:00", title: "Keynote — Josep Piqué", desc: "\"¿Cómo articular exitosamente un Ecosistema de Innovación? Modelo de Cuádruple Hélice\"" },
              { time: "15:45", title: "Panel 1 — Integración Binacional: el Rol del Estado en la Construcción de un Corredor de Innovación y de Talento", desc: "Modera: Nicole Fusilier (Red de Innovación Local - RIL)" },
              { time: "16:45", title: "Break ☕", desc: "" },
              { time: "17:00", title: "Panel 2 — Territorios que Innovan: Parques Tecnológicos y Clusters como Motor de Desarrollo", desc: "Modera: Luis Bullrich (Next Tide Consulting)" },
              { time: "18:00", title: "Panel 3 — Ecosistemas sin Frontera: Alianzas para el Desarrollo Territorial", desc: "Modera: Silvia Torres Carbonell (Emprende IAE)" },
              { time: "18:45", title: "Entrevista", desc: "Desafíos y oportunidades de Vaca Muerta para el desarrollo regional" },
              { time: "19:15", title: "Cierre", desc: "Conclusiones y siguientes pasos" }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b-2 border-black hover:bg-blue-50 transition-colors group">
                <div className="md:col-span-2 text-2xl font-display font-bold tracking-tighter flex items-center group-hover:text-blue-600">
                  {item.time}
                </div>
                <div className="md:col-span-6 text-3xl md:text-4xl font-display font-bold tracking-tight text-black group-hover:text-blue-900">
                  {item.title}
                </div>
                <div className="md:col-span-4 text-base font-medium text-zinc-600 self-center">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brutalist Keynote */}
      <section className="bg-black text-white border-b-2 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-16 flex flex-col justify-between order-2 lg:order-1 border-t-2 lg:border-t-0 lg:border-r-2 border-zinc-800">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-12 flex items-center">
                <Activity className="w-5 h-5 mr-3" /> Keynote Speaker
              </div>
              <h2 className="text-6xl md:text-[7rem] leading-[0.9] font-display font-bold tracking-tighter mb-8 uppercase">
                Josep<br/>Miquel<br/>Piqué
              </h2>
            </div>
            
            <div>
              <p className="text-2xl font-semibold text-zinc-400 max-w-lg leading-snug mb-12">
                Especialista internacional en ecosistemas de innovación. Presidente de La Salle Technova Barcelona. Referente mundial en Triple Hélice y parques científicos.
              </p>
              <a href="https://www.linkedin.com/in/josep-m-pique-807b66/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white font-bold uppercase tracking-[0.1em] text-xs px-8 py-5 hover:bg-blue-500 transition-colors">
                <Linkedin className="w-5 h-5 mr-3" /> Conectar en LinkedIn <ArrowUpRight className="w-4 h-4 ml-3" />
              </a>
            </div>
          </div>
          
          <a href="https://www.linkedin.com/in/josep-m-pique-807b66/" target="_blank" rel="noopener noreferrer" className="relative aspect-square lg:aspect-auto order-1 lg:order-2 bg-blue-600 overflow-hidden group cursor-pointer block">
            <img 
              src="/pique.jfif" 
              alt="Josep Miquel Piqué" 
              className="w-full h-full object-cover object-top grayscale contrast-125 mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </a>
        </div>
      </section>

      {/* Invitados Brutalist Grid */}
      <section id="speakers" className="bg-white border-b-2 border-black">
        <div className="px-6 md:px-12 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-2 border-black pb-8">
            <h2 className="text-6xl md:text-[8rem] leading-none font-display font-bold tracking-tighter text-black uppercase">
              Speakers
            </h2>
            <div className="flex items-center mt-6 md:mt-0 text-xs font-bold tracking-[0.1em] text-blue-600 uppercase">
              <Plus className="w-4 h-4 mr-2" /> INVITADOS ESPECIALES
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l-2 border-t-2 border-black">
            {[
              { name: "Silvia Torre Carbonell", role: "Presidente Emérita Emprende IAE", inst: "IAE Business School", img: "/silvia.jfif", linkedin: "https://www.linkedin.com/in/silvia-torres-carbonell-021390/" },
              { name: "Graciela Martínez", role: "Gerente General", inst: "Cotesma", img: "/graciela.jpeg", linkedin: "https://www.linkedin.com/in/gracielammartinez/" },
              { name: "Carina Rapetti", role: "Governance & Strategy", inst: "Innovation Ecosystems", img: "/carina.jfif", linkedin: "https://www.linkedin.com/in/carina-rapetti/?locale=es" },
              { name: "Silvina Terroni", role: "Directora Ejecutiva", inst: "Parque Empresarial Austral", img: "/silvina.jfif", linkedin: "https://www.linkedin.com/in/silvina-terroni-62545514/" },
              { name: "Yamil Santoro", role: "CEO", inst: "Parque de Innovación BA", img: "/yamil.jfif", linkedin: "https://www.linkedin.com/in/yamilsantoro/" },
              { name: "Pablo Lang", role: "Founder & C.E.O.", inst: "Cluster Tecnologico Tandil, Buenos Aires", img: "/pablo.jfif", linkedin: "https://www.linkedin.com/in/pablo-lang-popey/" },
              { name: "Nicole Fusilier", role: "Presidenta y Fundadora", inst: "Red de Innovacion Local (RIL)", img: "/nicole.jfif", linkedin: "https://www.linkedin.com/in/nicole-fusilier-26280994/" },
              { name: "Mariano Román", role: "Líder de Innovación y Tecnología", inst: "Cotesma", img: "/mariano.jfif", linkedin: "https://www.linkedin.com/in/mariano-alonso-roman/" },
              { name: "Luis Bullrich", role: "Consultor ecosistemas innovación", inst: "Partner Next Tide", img: "/luis.jfif", linkedin: "https://www.linkedin.com/in/luismariabullrich/" },
              { name: "Isidora Cabezón Papic", role: "Directora Ejecutiva", inst: "CRTIC", img: "/isidora.jfif", linkedin: "https://www.linkedin.com/in/isidora-cabez%C3%B3n-papic/" },
              { name: "Marco Gallardo", role: "Jefe Div. Fomento e industria", inst: "Gob. Regional La Araucanía", img: "/marco.jfif", linkedin: "https://www.linkedin.com/in/marcogallardo/" },
              { name: "Henry Leal", role: "Director Regional Corfo", inst: "Región de La Araucanía", img: "/henry.jfif", linkedin: "https://www.linkedin.com/in/henry-leal-bizama-759363290/" },
              { name: "Carlos Jaureguiberry", role: "Vicepresidente del Consejo de Administración", inst: "COTESMA", img: "/Dr. Carlos Jaureguiberry.jpg", linkedin: "https://www.linkedin.com/in/carlos-jaureguiberry-06123272" },
              { name: "Roberto Dib Ashur", role: "Ministro de Economía y Servicios Públicos", inst: "Gobierno de la Provincia de Salta", img: "/roberto dib ashur.jpeg", linkedin: "https://www.linkedin.com/in/roberto-dib-ashur-864b93135" },
              { name: "Juan Manuel Morales", role: "Subsecretario de Industria y Modernización", inst: "Gobierno de la Provincia del Neuquén", img: "/juan manuel morales.jfif", linkedin: "https://www.linkedin.com/in/juanmamorales4" },
              { name: "Juan Pablo Luna", role: "Co-Fouder Qenti Latam", inst: "Qenti Latam / Facultad de Ciencias Económicas - UNPSJB", img: "/juan pablo luna.jfif", linkedin: "https://www.linkedin.com/in/jplpatagonia" },
              { name: "Santiago Penone", role: "Co-fundador", inst: "Tuki Travel", img: "/santiago penone.jfif", linkedin: "https://www.linkedin.com/in/santiago-penone/" },
              { name: "Nicolas Dimarco", role: "Co-fundador", inst: "Farox / Patio Nerworrk", img: "/nicolás dimarco.jfif", linkedin: "https://www.linkedin.com/in/nicolas-dimarco" },
              { name: "Andrés Basilio Agres", role: "Rector", inst: "Instituto Tecnológico de Buenos Aires (ITBA)", img: "/Andres_Agres.jpg", linkedin: "https://ar.linkedin.com/in/andresagres" },
              { name: "Jorge Farías Avendaño", role: "Decano de la Facultad de Ingeniería y Ciencias", inst: "Universidad de La Frontera (UFRO)", img: "/jorge farías.jfif", linkedin: "https://www.linkedin.com/in/jorge-farías-avendaño" },
              { name: "Roberto Lino Blanco", role: "Consultor especializado en Oil & Gas — Vaca Muerta", inst: "Consultor independiente", img: "/Roberto Lino.jfif", linkedin: "https://ar.linkedin.com/in/roberto-lino-blanco-7871849" },
              { name: "Fernando Banderet", role: "Intendente", inst: "Municipalidad de Añelo", img: "/Banderet.jpg", linkedin: "https://www.linkedin.com/in/fernando-banderet-080568237" },
            ].map((guest, idx) => {
              const CardContent = (
                <>
                  <div className="aspect-square overflow-hidden bg-blue-600 mb-6 border-2 border-black group-hover:border-white">
                    <img 
                      src={guest.img.startsWith('/') || guest.img.startsWith('http') ? guest.img : `https://images.unsplash.com/photo-${guest.img}?auto=format&fit=crop&q=80&w=400&h=400`} 
                      alt={guest.name} 
                      className="w-full h-full object-cover object-top grayscale contrast-125 mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 line-clamp-1 border-b-2 border-current pb-2 inline-block">{guest.role}</div>
                  <h3 className="text-2xl font-display font-bold tracking-tight mb-1">{guest.name}</h3>
                  <p className="text-sm font-medium opacity-70 line-clamp-1">{guest.inst}</p>
                </>
              );

              return guest.linkedin ? (
                <a href={guest.linkedin} target="_blank" rel="noopener noreferrer" key={idx} className="group cursor-pointer border-r-2 border-b-2 border-black p-6 hover:bg-blue-600 hover:text-white transition-colors block">
                  {CardContent}
                </a>
              ) : (
                <div key={idx} className="group border-r-2 border-b-2 border-black p-6 hover:bg-blue-600 hover:text-white transition-colors block">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Brutalist */}
      <footer className="bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-zinc-800">
          
          <div className="p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">// Consultas & Registro</div>
              <a href="mailto:team.innovacion@cotesma.com.ar" className="text-3xl md:text-5xl font-display font-bold tracking-tighter hover:text-blue-400 hover:underline hover:decoration-blue-400 underline-offset-8 transition-colors break-words">
                team.innovacion@<br/>cotesma.com.ar
              </a>
            </div>
            
            <div className="mt-16 text-sm font-bold tracking-[0.1em] uppercase text-zinc-600">
              &copy; 2026 Foro Patagónico de Innovación. <br/> Todos los derechos reservados.
            </div>
          </div>
          
          <div className="p-8 md:p-16 flex flex-col justify-between min-h-[400px]">
            <div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-8">// Ubicación del Evento</div>
              <div className="text-4xl font-display font-bold tracking-tight mb-6">
                Centro Cultural COTESMA
              </div>
              <p className="text-xl font-medium text-zinc-400 leading-snug">
                General Roca 1154 <br/>
                San Martín de los Andes, Neuquén <br/>
                Patagonia Argentina
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap gap-6 items-center text-xs font-bold tracking-[0.1em] uppercase">
              <span className="text-zinc-600">Organizan:</span>
              <a href="https://bitcotesma.ar/" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">BIT Cotesma</a>
              <a href="https://www.crtic.cl/" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-4 py-2 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">CRTIC</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
