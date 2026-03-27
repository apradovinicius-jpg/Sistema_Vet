import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  ShieldCheck, 
  Briefcase, 
  Printer, 
  Menu, 
  X, 
  ChevronRight,
  Stethoscope,
  ClipboardList,
  FileBadge,
  CreditCard,
  Mail,
  BookOpen,
  User,
  Dog,
  LayoutDashboard,
  Calendar,
  TrendingUp,
  Home
} from 'lucide-react';
import { Logo } from './components/Brand';
import { 
  ReceituarioSimples, 
  ReceituarioEspecial, 
  ProntuarioClinico, 
  SolicitacaoExames 
} from './components/TechnicalDocs';
import { 
  TermoConsentimento, 
  AtestadoSaude 
} from './components/LegalDocs';
import { 
  CartaoVisita, 
  AssinaturaEmail, 
  CarteiraVacinacao 
} from './components/SupportMaterials';
import { 
  CadastroClientes, 
  CadastroAnimais 
} from './components/Registration';
import { Agenda } from './components/Agenda';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { About } from './components/About';

type DocType = 
  | 'receita-simples' 
  | 'receita-especial' 
  | 'prontuario' 
  | 'exames' 
  | 'termo' 
  | 'atestado' 
  | 'cartao' 
  | 'assinatura' 
  | 'vacina'
  | 'cadastro-clientes'
  | 'cadastro-animais'
  | 'dashboard'
  | 'agenda'
  | 'settings'
  | 'about'
  | 'home';

export default function App() {
  const [activeDoc, setActiveDoc] = useState<DocType>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavClick = (id: DocType) => {
    setActiveDoc(id);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Início', icon: Home, category: 'Geral' },
    { id: 'dashboard', label: 'Painel', icon: LayoutDashboard, category: 'Geral' },
    { id: 'agenda', label: 'Agenda', icon: Calendar, category: 'Geral' },
    { id: 'settings', label: 'Configurações', icon: BookOpen, category: 'Geral' },
    { id: 'about', label: 'Sobre o Sistema', icon: ShieldCheck, category: 'Geral' },
    { id: 'cadastro-clientes', label: 'Clientes (Responsáveis)', icon: User, category: 'Gestão' },
    { id: 'cadastro-animais', label: 'Animais (Pacientes)', icon: Dog, category: 'Gestão' },
    { id: 'receita-simples', label: 'Receituário Simples', icon: FileText, category: 'Papelaria Técnica' },
    { id: 'receita-especial', label: 'Controle Especial', icon: Stethoscope, category: 'Papelaria Técnica' },
    { id: 'prontuario', label: 'Prontuário Clínico', icon: ClipboardList, category: 'Papelaria Técnica' },
    { id: 'exames', label: 'Solicitação Exames', icon: FileBadge, category: 'Papelaria Técnica' },
    { id: 'termo', label: 'Termo Consentimento', icon: ShieldCheck, category: 'Documentos Jurídicos' },
    { id: 'atestado', label: 'Atestado de Saúde', icon: FileText, category: 'Documentos Jurídicos' },
    { id: 'cartao', label: 'Cartão de Visita', icon: CreditCard, category: 'Materiais de Apoio' },
    { id: 'vacina', label: 'Carteira Vacinação', icon: Briefcase, category: 'Materiais de Apoio' },
    { id: 'assinatura', label: 'Assinatura Digital', icon: Mail, category: 'Materiais de Apoio' },
  ];

  const renderContent = () => {
    switch (activeDoc) {
      case 'dashboard': return <Dashboard />;
      case 'agenda': return <Agenda />;
      case 'cadastro-clientes': return <CadastroClientes />;
      case 'cadastro-animais': return <CadastroAnimais />;
      case 'receita-simples': return <ReceituarioSimples />;
      case 'receita-especial': return <ReceituarioEspecial />;
      case 'prontuario': return <ProntuarioClinico />;
      case 'exames': return <SolicitacaoExames />;
      case 'termo': return <TermoConsentimento />;
      case 'atestado': return <AtestadoSaude />;
      case 'cartao': return <CartaoVisita />;
      case 'vacina': return <CarteiraVacinacao />;
      case 'assinatura': return <AssinaturaEmail />;
      case 'settings': return <Settings />;
      case 'about': return <About />;
      case 'home': return <HomeView onSelect={handleNavClick} menuItems={menuItems} />;
      default: return <HomeView onSelect={handleNavClick} menuItems={menuItems} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-offwhite relative">
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden no-print"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`no-print fixed inset-y-0 left-0 z-50 w-64 bg-grafite text-offwhite transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10 text-salvia" />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-tighter">Vinícius Prado</h2>
                <p className="text-[10px] text-salvia font-bold uppercase tracking-widest">Veterinária</p>
              </div>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-md text-salvia"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-8 overflow-y-auto">
            {['Geral', 'Gestão', 'Papelaria Técnica', 'Documentos Jurídicos', 'Materiais de Apoio'].map(cat => (
              <div key={cat}>
                <h3 className="text-[10px] uppercase text-salvia/50 font-bold mb-3 tracking-widest">{cat}</h3>
                <div className="space-y-1">
                  {menuItems.filter(item => item.category === cat).map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id as DocType)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs transition-colors ${activeDoc === item.id ? 'bg-petroleo text-white' : 'hover:bg-white/5 text-offwhite/70'}`}
                    >
                      <item.icon size={16} />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <p className="text-[10px] text-offwhite/30 text-center uppercase">© 2026 Dr. Vinícius Prado</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="no-print h-16 bg-white border-b border-salvia/10 flex items-center justify-between px-6 sticky top-0 z-40">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 hover:bg-salvia/5 rounded-md">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-4 overflow-hidden">
            <h2 className="text-xs md:text-sm font-bold text-petroleo uppercase tracking-wider truncate">
              {menuItems.find(i => i.id === activeDoc)?.label}
            </h2>
          </div>

          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-petroleo text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-petroleo/90 transition-all shadow-lg shadow-petroleo/20"
          >
            <Printer size={14} />
            Imprimir
          </button>
        </header>

        <div className="flex-1 p-4 md:p-6 lg:p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDoc}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function HomeView({ onSelect, menuItems }: { onSelect: (id: DocType) => void, menuItems: any[] }) {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <Logo className="w-20 h-20 md:w-32 md:h-32 mx-auto text-petroleo" />
        <h1 className="text-2xl md:text-4xl font-black text-petroleo uppercase tracking-tighter">Medicina Veterinária</h1>
        <p className="text-salvia font-medium uppercase tracking-[0.2em] md:tracking-[0.5em] text-[10px] md:text-base">Dr. Vinícius Prado</p>
        <div className="w-24 h-1 bg-salvia mx-auto mt-6"></div>
      </div>

      <div className="space-y-10">
        {['Geral', 'Gestão', 'Papelaria Técnica', 'Documentos Jurídicos', 'Materiais de Apoio'].map(cat => (
          <section key={cat}>
            <h3 className="text-xs font-bold text-grafite/40 uppercase tracking-[0.3em] mb-6 border-b border-grafite/10 pb-2">{cat}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.filter(item => item.category === cat).map(item => (
                <button
                  key={item.id}
                  onClick={() => onSelect(item.id as DocType)}
                  className="group bg-white p-6 rounded-2xl border border-salvia/10 shadow-sm hover:shadow-xl hover:border-petroleo/30 transition-all text-left flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-offwhite rounded-xl flex items-center justify-center text-petroleo group-hover:bg-petroleo group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-grafite uppercase text-xs mb-1 group-hover:text-petroleo transition-colors">{item.label}</h4>
                    <p className="text-[10px] text-grafite/50 leading-tight">Acesse o módulo de {item.label.toLowerCase()} para gestão e preenchimento.</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function BrandCard({ title, desc, color }: { title: string, desc: string, color: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-salvia/10 shadow-sm hover:shadow-md transition-shadow">
      <div className={`w-8 h-8 rounded-full ${color} mb-4`}></div>
      <h4 className="font-bold text-grafite uppercase text-sm mb-2">{title}</h4>
      <p className="text-xs text-grafite/60 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ icon: Icon, title, text }: { icon: any, title: string, text: string }) {
  return (
    <div className="space-y-2">
      <div className="w-10 h-10 bg-salvia/10 rounded-lg flex items-center justify-center text-salvia">
        <Icon size={20} />
      </div>
      <h5 className="font-bold text-sm text-petroleo uppercase">{title}</h5>
      <p className="text-xs text-grafite/60">{text}</p>
    </div>
  );
}
