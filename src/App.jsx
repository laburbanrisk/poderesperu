import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Menu, 
  X, 
  CheckCircle, 
  FileText, 
  Globe, 
  Shield, 
  Clock, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone,
  Smile,
  Zap,
  Heart
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

const whatsappNumber = "393444124465";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20vi%20PoderesPeru.com%20y%20quiero%20tramitar%20un%20poder.`;

  // --- COMPONENTES REUTILIZABLES CON NUEVO ESTILO ---

  // Botón Principal: Amarillo Neón (#f0ff00) con texto negro y borde negro
  const PrimaryButton = ({ text, onClick, icon: Icon, className = "", isLink = false, href = "#" }) => {
    const classes = `flex items-center justify-center gap-2 font-black text-black bg-[#f0ff00] py-3 px-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${className}`;
    
    if (isLink) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {Icon && <Icon size={20} strokeWidth={3} />}
          {text}
        </a>
      );
    }
    return (
      <button onClick={onClick} className={classes}>
        {Icon && <Icon size={20} strokeWidth={3} />}
        {text}
      </button>
    );
  };

  // Botón Secundario: Blanco con borde negro
  const SecondaryButton = ({ text, onClick, className = "" }) => (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center gap-2 font-bold text-black bg-white py-3 px-6 rounded-lg border-2 border-black hover:bg-gray-50 transition-all ${className}`}
    >
      {text}
    </button>
  );

  // Resaltador Amarillo
  const Highlight = ({ children }) => (
    <span className="bg-[#f0ff00] px-1 text-black inline-block transform -skew-x-3">{children}</span>
  );

  const SectionTitle = ({ title, subtitle, center = true }) => (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight">{title}</h2>
      {subtitle && <p className="text-xl font-medium text-gray-800 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );

  // --- VISTAS ---

  const HomeView = () => (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#f0ff00] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-black text-white font-bold px-4 py-1 rounded-full mb-6 text-sm transform -rotate-2">
            🇵🇪 Para peruanos en todo el mundo
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black mb-8 leading-[0.95] tracking-tighter">
            Tramita tus poderes <br className="hidden md:block"/>
            sin viajar a <Highlight>Perú</Highlight>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-10 max-w-2xl mx-auto leading-relaxed">
            ¿Necesitas vender una casa, cobrar algo o hacer trámites allá? <br/>
            Te ayudamos con los papeles <span className="underline decoration-[#f0ff00] decoration-4 underline-offset-4">rápido y sin estrés</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PrimaryButton 
              text="Chatea con nosotros" 
              icon={MessageCircle} 
              isLink={true} 
              href={whatsappLink}
              className="w-full sm:w-auto text-lg px-10"
            />
            <SecondaryButton 
              text="¿Cómo funciona?" 
              onClick={() => navigateTo('como-funciona')}
              className="w-full sm:w-auto text-lg"
            />
          </div>
          
          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 md:gap-12 font-bold text-black">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <Shield size={20} className="fill-[#f0ff00] text-black"/> 100% Legal
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <Zap size={20} className="fill-[#f0ff00] text-black"/> Al toque
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <Smile size={20} className="fill-[#f0ff00] text-black"/> Cero estrés
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO AYUDAMOS (Simple) */}
      <section className="py-20 bg-white border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Es súper simple" subtitle="Olvídate de los trámites complicados." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: MessageCircle, title: "1. Nos escribes", desc: "Mándanos un WhatsApp contándonos qué necesitas hacer en Perú." },
              { icon: FileText, title: "2. Preparamos todo", desc: "Preparamos la minuta y gestionamos la cita en el consulado o embajada." },
              { icon: CheckCircle, title: "3. Firmas y listo", desc: "Te decimos cuando y donde ir a firmar y ¡ya está!" }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
                <div className="relative bg-white p-8 rounded-xl border-2 border-black h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#f0ff00] rounded-full flex items-center justify-center mb-6 border-2 border-black">
                    <step.icon size={32} strokeWidth={2} className="text-black"/>
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3">{step.title}</h3>
                  <p className="font-medium text-gray-700">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS RÁPIDOS */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="¿Qué necesitas?" subtitle="Cuéntanos qué trámite necesitas hacer y te damos la opción a tu medida." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl border-2 border-black shadow-sm">
              <h3 className="text-2xl font-black mb-2">Carta Poder con firma legalizada</h3>
              <p className="text-gray-600 mb-6 font-medium">Para cosas sencillas como solicitar partidas de nacimientos en RENIEC (Péru), certificados de estudios, etc....</p>
              <a href={whatsappLink} className="font-bold underline decoration-[#f0ff00] decoration-4 hover:bg-[#f0ff00] transition-colors">Consultar esto →</a>
            </div>
            <div className="bg-white p-8 rounded-xl border-2 border-black shadow-sm">
              <h3 className="text-2xl font-black mb-2">Poder fuera de registro</h3>
              <p className="text-gray-600 mb-6 font-medium">Ideal para solicitar pasaportes de menores de edad, cobrar pensiones, etc...</p>
              <a href={whatsappLink} className="font-bold underline decoration-[#f0ff00] decoration-4 hover:bg-[#f0ff00] transition-colors">Consultar esto →</a>
            </div>
            <div className="bg-[#f0ff00] p-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform md:-translate-y-4">
              <div className="text-xs font-black uppercase tracking-widest mb-2 bg-black text-[#f0ff00] inline-block px-2 py-1">El más pedido</div>
              <h3 className="text-3xl font-black mb-2 text-black">Poder por escritura pública</h3>
              <p className="text-black mb-6 font-bold">El "todo terreno". Para vender casas, autos o crear empresas.</p>
              <PrimaryButton text="Lo quiero" isLink={true} href={whatsappLink} className="w-full bg-white border-2 border-black shadow-none hover:bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ NOSOTROS */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-none">
              Te entendemos porque <br/>
              <span className="text-[#f0ff00]">somos como tú</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Heart className="text-[#f0ff00] flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Empatía total</h4>
                  <p className="text-gray-400 font-medium">Sabemos lo difícil que es estar lejos y tener que hacer trámites en Perú.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe className="text-[#f0ff00] flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Donde estés</h4>
                  <p className="text-gray-400 font-medium">Italia, España, Francia... llegamos a todos lados.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="text-[#f0ff00] flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-xl mb-1">Habla claro</h4>
                  <p className="text-gray-400 font-medium">Nada de "palabreo" legal complicado. Te explicamos en fácil.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-[#f0ff00] rounded-2xl transform translate-x-4 translate-y-4"></div>
             <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Equipo" className="relative rounded-2xl border-2 border-white w-full grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="La gente nos recomienda" subtitle="Mira lo que dicen otros peruanos que ya hicieron sus trámites." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Carlos M.", loc: "Madrid", text: "Me salvaron. Tenía que vender mi depa en Lima y pensé que tenía que viajar. Todo salió perfecto." },
              { name: "Ana P.", loc: "Miami", text: "Súper pacientes. Yo no entendía nada de leyes y me explicaron todo con manzanitas." },
              { name: "Jorge L.", loc: "Santiago", text: "Rápido y seguro. En una semana ya tenía mi trámite encaminado. Recomendadísimos." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border-2 border-black">
                <div className="flex gap-1 text-[#f0ff00] mb-4">
                  {[...Array(5)].map((_, stars) => <span key={stars} className="text-2xl">★</span>)}
                </div>
                <p className="text-black font-medium text-lg mb-6">"{t.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-black text-black uppercase">{t.name}</p>
                  <p className="text-sm text-gray-500 font-bold">{t.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-[#f0ff00] border-t-4 border-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 leading-tight">
            ¿Listo para quitarte ese peso de encima?
          </h2>
          <PrimaryButton 
            text="Escríbenos al WhatsApp" 
            isLink={true} 
            href={whatsappLink} 
            className="bg-white text-black w-full md:w-auto text-xl px-12 py-4" 
            icon={MessageCircle}
          />
          <p className="mt-6 font-bold text-black opacity-75">Respuesta rápida • 100% Confidencial</p>
        </div>
      </section>
    </>
  );

  const ServicesView = () => (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#f0ff00] px-3 py-1 text-black font-black uppercase text-sm mb-4 border border-black transform -rotate-2">
            Guía rápida
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6">¿Cuál te sirve?</h1>
          <p className="text-xl text-gray-800 max-w-2xl mx-auto font-medium">
            No te compliques con nombres raros. Aquí te explicamos cuál necesitas según lo que quieras hacer.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              title: "Carta Poder con firma legalizada",
              desc: "El básico. Solo firma y ya.",
              goodFor: ["Solicitar partidas de nacimientos (RENIEC)", "Certificados de estudios", "Recibir correspondencia"],
              badFor: ["Cobrar plata en bancos", "Vender cosas", "Juicios"],
              color: "bg-gray-100"
            },
            {
              title: "Poder fuera de registro",
              desc: "Intermedio. Pasa por consulado pero no se inscribe.",
              goodFor: ["Solicitar pasaportes de menores", "Cobrar pensiones (ONP/AFP)", "Trámites administrativos"],
              badFor: ["Vender casa/auto", "Crear empresas"],
              color: "bg-gray-100"
            },
            {
              title: "Poder por escritura pública",
              desc: "El poderoso. Sirve para TODO.",
              goodFor: ["Venta de inmuebles/vehículos", "Divorcios", "Préstamos", "Empresas"],
              badFor: ["Cosas muy simples (sale más caro)"],
              color: "bg-[#f0ff00] border-black"
            }
          ].map((service, idx) => (
            <div key={idx} className={`p-8 md:p-10 rounded-2xl border-2 border-black ${service.color === 'bg-[#f0ff00] border-black' ? 'bg-[#f0ff00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'bg-white shadow-sm'}`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-black mb-2">{service.title}</h3>
                  <p className="text-xl font-bold mb-6 opacity-80">{service.desc}</p>
                  <PrimaryButton text="Consultar por este" isLink={true} href={whatsappLink} className="bg-black text-white border-none shadow-none hover:bg-gray-800" />
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg border border-black/10">
                    <span className="font-black text-green-700 block mb-2 text-sm uppercase">👍 Úsalo para:</span>
                    <ul className="space-y-1 font-medium text-sm">
                      {service.goodFor.map((i, k) => <li key={k}>• {i}</li>)}
                    </ul>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg border border-black/10">
                    <span className="font-black text-red-600 block mb-2 text-sm uppercase">👎 No sirve para:</span>
                    <ul className="space-y-1 font-medium text-sm">
                      {service.badFor.map((i, k) => <li key={k}>• {i}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HowItWorksView = () => (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle title="Paso a paso" subtitle="Así de fácil es trabajar con nosotros." center={true} />

        <div className="space-y-8">
          {[
            { title: "1. El Contacto", text: "Nos escribes al WhatsApp. Nos cuentas tu caso. Te decimos qué necesitas y cuánto cuesta. Sin sorpresas." },
            { title: "2. La Redacción", text: "Nuestros abogados colegiados redactan el documento legal (la minuta). Tú te relajas." },
            { title: "3. La Cita", text: "Te ayudamos a sacar la cita en tu consulado más cercano." },
            { title: "4. La Firma", text: "Vas, firmas y listo." }
          ].map((step, idx) => (
            <div key={idx} className="flex gap-6 items-start">
               <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 bg-black text-[#f0ff00] rounded-full flex items-center justify-center font-black text-xl border-2 border-black z-10">
                    {idx + 1}
                  </div>
                  {idx < 3 && <div className="h-full w-1 bg-gray-200 -mt-2 -mb-2"></div>}
               </div>
               <div className="bg-gray-50 p-6 rounded-xl border-2 border-black w-full hover:bg-[#f0ff00] transition-colors group">
                  <div className="md:hidden w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mb-3">{idx + 1}</div>
                  <h3 className="text-xl font-black text-black mb-2">{step.title}</h3>
                  <p className="font-medium text-gray-700 group-hover:text-black">{step.text}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <PrimaryButton text="¡Empezar ya!" isLink={true} href={whatsappLink} className="inline-flex text-lg px-12" />
        </div>
      </div>
    </div>
  );

  const AboutView = () => (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <SectionTitle title="Somos PoderesPeru" center={true} />
        
        <div className="text-xl font-medium text-gray-800 space-y-6 leading-relaxed">
          <p>
            Mira, la cosa es simple. <Highlight>Somos abogados colegiados peruanos</Highlight>, pero pensamos en digital. 
            Sabemos que cuando estás fuera, lo último que quieres es lidiar con burocracia.
          </p>
          <p>
            Creamos PoderesPeru.com para ser ese puente que te falta. Sin oficinas aburridas, 
            sin corbatas apretadas (bueno, a veces) y hablando claro.
          </p>
          <p>
            Nosotros nos hacemos cargo para que tú sigas con tu vida allá donde estés.
          </p>
        </div>

        <div className="mt-12 bg-black text-white p-8 rounded-2xl rotate-1 hover:rotate-0 transition-transform duration-300">
           <h3 className="text-2xl font-black text-[#f0ff00] mb-4">Nuestro compromiso</h3>
           <p className="font-bold text-lg">
             Si no podemos ayudarte, te lo decimos de frente.
           </p>
        </div>
      </div>
    </div>
  );

  const BlogView = () => (
    <div className="pt-32 pb-20 bg-white">
       <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title="Info Útil" subtitle="Artículos para que sepas qué onda con tus trámites." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "¿Cómo vender mi casa en Lima desde Madrid?",
              "Divorcio a distancia: ¿Se puede?",
              "¿Qué hago si perdí mi DNI en el extranjero?"
            ].map((title, i) => (
              <div key={i} className="border-2 border-black rounded-xl p-0 overflow-hidden hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow cursor-pointer bg-white">
                 <div className="h-40 bg-gray-100 border-b-2 border-black flex items-center justify-center">
                    <FileText size={48} className="text-gray-300"/>
                 </div>
                 <div className="p-6">
                    <span className="text-xs font-black bg-[#f0ff00] px-2 py-1 mb-3 inline-block">BLOG</span>
                    <h3 className="font-black text-xl mb-4">{title}</h3>
                    <p className="font-bold underline">Leer más</p>
                 </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  );

  const ContactView = () => (
    <div className="pt-32 pb-20 bg-white">
       <div className="max-w-4xl mx-auto px-4">
          <SectionTitle title="Hablemos" subtitle="Elige cómo quieres contactarnos." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-[#f0ff00] p-8 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black mb-4">💬 WhatsApp</h3>
                <p className="font-bold mb-6">Es lo más rápido. Te contestamos al toque en horario de oficina.</p>
                <PrimaryButton text="Abrir Chat" isLink={true} href={whatsappLink} className="w-full bg-black text-white border-white hover:bg-gray-800" />
             </div>

             <div className="bg-white p-8 rounded-xl border-2 border-black">
                <h3 className="text-2xl font-black mb-4">✉️ Formulario</h3>
                <p className="font-bold mb-6 text-gray-600">Si prefieres por correo, déjanos tus datos.</p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                   <input type="text" placeholder="Tu Nombre" className="w-full border-2 border-black p-3 rounded-lg font-bold focus:outline-none focus:bg-[#f0ff00]/20" />
                   <input type="text" placeholder="Tu Email" className="w-full border-2 border-black p-3 rounded-lg font-bold focus:outline-none focus:bg-[#f0ff00]/20" />
                   <textarea placeholder="¿Qué necesitas?" rows="3" className="w-full border-2 border-black p-3 rounded-lg font-bold focus:outline-none focus:bg-[#f0ff00]/20"></textarea>
                   <button className="w-full bg-black text-white font-black py-3 rounded-lg hover:bg-gray-800">ENVIAR</button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div className="font-sans text-black bg-white selection:bg-[#f0ff00] selection:text-black">
      
      {/* HEADER */}
      <header className={`fixed w-full z-50 transition-all duration-200 border-b-2 ${scrolled ? 'bg-white border-black py-2' : 'bg-white/90 border-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer z-50" onClick={() => navigateTo('inicio')}>
              <div className="bg-black text-[#f0ff00] font-black text-xl px-2 py-1 transform -skew-x-6 border-2 border-transparent">
                P
              </div>
              <span className="font-black text-xl tracking-tight text-black">
                PoderesPeru<span className="text-gray-400">.com</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {['Inicio', 'Servicios', 'Cómo funciona', 'Conócenos', 'Blog'].map((item) => {
                const slug = item.toLowerCase().replace(' ', '-').replace('ó', 'o');
                return (
                  <button 
                    key={item}
                    onClick={() => navigateTo(slug)}
                    className={`font-bold text-sm tracking-wide transition-all hover:bg-[#f0ff00] px-2 py-1 rounded ${
                      currentPage === slug ? 'bg-[#f0ff00] border-2 border-black' : 'text-gray-600 border-2 border-transparent'
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </nav>

            {/* CTAs Header */}
            <div className="hidden md:flex items-center gap-4">
               <PrimaryButton text="WhatsApp" isLink={true} href={whatsappLink} className="py-2 px-4 text-sm" icon={MessageCircle} />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden z-50">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-black">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 z-40 md:hidden">
            {['Inicio', 'Servicios', 'Cómo funciona', 'Conócenos', 'Blog', 'Contacto'].map((item) => {
              const slug = item.toLowerCase().replace(' ', '-').replace('ó', 'o');
              return (
                <button 
                  key={item}
                  onClick={() => navigateTo(slug)}
                  className="text-3xl font-black text-black hover:bg-[#f0ff00] px-4"
                >
                  {item}
                </button>
              )
            })}
          </div>
        )}
      </header>

      {/* CONTENIDO */}
      <main className="flex-grow">
        {currentPage === 'inicio' && <HomeView />}
        {currentPage === 'servicios' && <ServicesView />}
        {currentPage === 'como-funciona' && <HowItWorksView />}
        {currentPage === 'conocenos' && <AboutView />}
        {currentPage === 'blog' && <BlogView />}
        {currentPage === 'contacto' && <ContactView />}
      </main>

      {/* FLOATING WHATSAPP */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#f0ff00] text-black border-2 border-black p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all group"
      >
        <MessageCircle size={32} strokeWidth={2.5} />
      </a>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 border-t-8 border-[#f0ff00]">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
             <div>
                <h3 className="font-black text-2xl mb-4 text-[#f0ff00]">PoderesPeru.com</h3>
                <p className="max-w-xs text-gray-400 font-medium">
                   Hacemos fácil lo difícil. Tu socio legal en Perú, estés donde estés.
                </p>
             </div>
             <div className="grid grid-cols-2 gap-8 font-bold text-sm">
                <div>
                   <p className="text-[#f0ff00] mb-4 uppercase tracking-widest text-xs">Menú</p>
                   <ul className="space-y-2">
                      <li><button onClick={() => navigateTo('inicio')}>Inicio</button></li>
                      <li><button onClick={() => navigateTo('servicios')}>Servicios</button></li>
                      <li><button onClick={() => navigateTo('contacto')}>Contacto</button></li>
                   </ul>
                </div>
                <div>
                   <p className="text-[#f0ff00] mb-4 uppercase tracking-widest text-xs">Legal</p>
                   <ul className="space-y-2">
                      <li>Privacidad</li>
                      <li>Términos</li>
                   </ul>
                </div>
             </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 font-bold text-sm">
             © {new Date().getFullYear()} PoderesPeru. Hecho con ❤️ para compatriotas.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;