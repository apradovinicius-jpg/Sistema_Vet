import React from 'react';
import { Info, Printer, ShieldCheck, Smartphone, MousePointer2, Layout, FileText, Settings as SettingsIcon } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-petroleo/10 rounded-3xl flex items-center justify-center text-petroleo mx-auto mb-6">
          <Info size={32} className="md:w-10 md:h-10" />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-petroleo uppercase tracking-tighter">Sobre a Medicina Veterinária</h2>
        <p className="text-salvia font-medium uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm">Dr. Vinícius Prado</p>
        <div className="w-24 h-1 bg-salvia mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white p-6 md:p-10 rounded-3xl border border-salvia/10 shadow-sm space-y-6">
          <h3 className="text-lg md:text-xl font-bold text-petroleo uppercase flex items-center gap-3">
            <Layout size={20} className="text-salvia md:w-6 md:h-6" />
            O Conceito
          </h3>
          <p className="text-xs md:text-sm text-grafite/70 leading-relaxed">
            Este sistema foi desenvolvido para ser uma ferramenta de **Gestão Digital First**. O objetivo é eliminar o uso de papel na rotina clínica, permitindo que todos os documentos sejam preenchidos, salvos e compartilhados de forma totalmente digital.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-offwhite rounded-lg flex items-center justify-center text-petroleo shrink-0">
                <Smartphone size={16} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] md:text-xs uppercase text-grafite">Acesso Multiplataforma</h4>
                <p className="text-[9px] md:text-[10px] text-grafite/50">Acesse de seu tablet, computador ou celular em qualquer lugar.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-offwhite rounded-lg flex items-center justify-center text-petroleo shrink-0">
                <MousePointer2 size={16} />
              </div>
              <div>
                <h4 className="font-bold text-[10px] md:text-xs uppercase text-grafite">Campos Interativos</h4>
                <p className="text-[9px] md:text-[10px] text-grafite/50">Preencha receitas e prontuários diretamente na tela.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grafite text-offwhite p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-petroleo/10 rounded-full -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-lg md:text-xl font-bold uppercase flex items-center gap-3">
              <Printer size={20} className="text-salvia md:w-6 md:h-6" />
              Dicas de Implementação
            </h3>
            <p className="text-xs md:text-sm text-offwhite/70 leading-relaxed">
              Para uma experiência profissional completa, recomendamos:
            </p>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-salvia rounded-full"></div>
                <span className="text-[10px] md:text-xs font-medium">Use papel Offset 90g para impressões eventuais.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-salvia rounded-full"></div>
                <span className="text-[10px] md:text-xs font-medium">Mantenha seu carimbo automático sempre atualizado.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-salvia rounded-full"></div>
                <span className="text-[10px] md:text-xs font-medium">Salve os documentos como PDF para envio via WhatsApp.</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-salvia">
                <ShieldCheck size={16} />
                Segurança e Profissionalismo
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-3xl border border-salvia/10 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold text-petroleo uppercase mb-6 md:mb-8 flex items-center gap-3">
          <FileText size={20} className="text-salvia md:w-6 md:h-6" />
          Como começar?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 bg-offwhite rounded-xl flex items-center justify-center text-petroleo font-black">1</div>
            <h4 className="font-bold text-[10px] md:text-xs uppercase text-grafite">Parametrização</h4>
            <p className="text-[9px] md:text-[10px] text-grafite/50 leading-tight">Acesse a aba de configurações e insira seus dados profissionais (CRMV, MAPA, etc).</p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 bg-offwhite rounded-xl flex items-center justify-center text-petroleo font-black">2</div>
            <h4 className="font-bold text-[10px] md:text-xs uppercase text-grafite">Cadastro</h4>
            <p className="text-[9px] md:text-[10px] text-grafite/50 leading-tight">Cadastre seus clientes e pacientes para ter um histórico completo de cada atendimento.</p>
          </div>
          <div className="space-y-3">
            <div className="w-10 h-10 bg-offwhite rounded-xl flex items-center justify-center text-petroleo font-black">3</div>
            <h4 className="font-bold text-[10px] md:text-xs uppercase text-grafite">Atendimento</h4>
            <p className="text-[9px] md:text-[10px] text-grafite/50 leading-tight">Utilize a agenda e os documentos técnicos para realizar seus atendimentos de forma ágil.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
