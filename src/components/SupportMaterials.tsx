import React from 'react';
import { Logo } from './Brand';
import { Mail, Phone, MapPin, Globe, Instagram, ShieldCheck } from 'lucide-react';
import { Field } from './DocumentTemplates';

export const CartaoVisita = () => (
  <div className="space-y-10 py-10 no-print">
    <h2 className="text-center text-salvia font-bold uppercase tracking-widest">Cartão de Visita</h2>
    
    <div className="flex flex-wrap justify-center gap-10 overflow-x-auto pb-4">
      {/* Frente */}
      <div className="w-[90mm] h-[50mm] bg-petroleo text-offwhite p-6 flex flex-col items-center justify-center shadow-xl rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
        <Logo className="w-16 h-16 mb-2 text-white" monochrome />
        <h3 className="text-xl font-bold tracking-tighter uppercase">Dr. Vinícius Prado</h3>
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-salvia">Médico Veterinário</p>
      </div>

      {/* Verso */}
      <div className="w-[90mm] h-[50mm] bg-offwhite border border-salvia/20 p-6 flex flex-col justify-between shadow-xl rounded-sm">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-bold text-petroleo uppercase">Dr. Vinícius Prado</h3>
            <p className="text-[8px] text-salvia font-bold uppercase">CRMV-XX 00.000</p>
          </div>
          <Logo className="w-8 h-8 text-petroleo" monochrome />
        </div>
        
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[9px] text-grafite">
            <Phone size={10} className="text-petroleo" />
            <span>(00) 00000-0000</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-grafite">
            <Mail size={10} className="text-petroleo" />
            <span>viniciusprado.vet@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-grafite">
            <MapPin size={10} className="text-petroleo" />
            <span>Rua Exemplo, 123 - Cidade/UF</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const AssinaturaEmail = () => (
  <div className="max-w-md mx-auto bg-white p-6 border border-salvia/10 shadow-sm no-print">
    <h2 className="text-center text-salvia font-bold uppercase tracking-widest mb-6">Assinatura Digital</h2>
    <div className="flex items-center gap-6 border-l-4 border-petroleo pl-6">
      <Logo className="w-12 h-12 text-petroleo" />
      <div>
        <h3 className="text-lg font-bold text-petroleo leading-tight">Dr. Vinícius Prado</h3>
        <p className="text-xs text-salvia font-bold uppercase tracking-wider">Médico Veterinário | CRMV-XX 00.000</p>
        <div className="mt-3 flex gap-4 text-grafite/60">
          <Phone size={14} />
          <Instagram size={14} />
          <Globe size={14} />
        </div>
      </div>
    </div>
  </div>
);

export const CarteiraVacinacao = () => (
  <div className="max-w-5xl mx-auto space-y-16 no-print py-10">
    <div className="text-center space-y-2">
      <h2 className="text-salvia font-bold uppercase tracking-widest">Carteira de Vacinação</h2>
      <p className="text-xs text-grafite/60">Design completo: Capa, Verso e Miolo</p>
    </div>

    {/* Capa e Verso */}
    <div className="space-y-4">
      <h3 className="text-[10px] font-bold text-grafite/40 uppercase tracking-widest ml-2">Capa e Contra-Capa (Externo)</h3>
      <div className="flex justify-center overflow-x-auto pb-4">
        <div className="w-[200mm] h-[140mm] bg-offwhite border-2 border-salvia/20 rounded-lg shadow-2xl flex overflow-hidden shrink-0">
          {/* Contra-Capa (Esquerda) */}
          <div className="w-1/2 p-10 border-r border-dashed border-salvia/30 flex flex-col justify-between bg-offwhite">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-petroleo">
                <ShieldCheck size={20} />
                <h4 className="text-xs font-bold uppercase">Compromisso com a Saúde</h4>
              </div>
              <p className="text-[10px] leading-relaxed text-grafite/70 italic">
                "A vacinação é o ato mais importante de amor e prevenção que você pode oferecer ao seu melhor amigo. Mantenha este documento sempre atualizado."
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-[9px] font-bold text-grafite uppercase">Unidade de Atendimento:</p>
                <div className="h-16 border border-grafite/10 rounded p-2 text-[9px] text-grafite/50">
                  Espaço reservado para carimbo da clínica ou anotações de emergência.
                </div>
              </div>
            </div>
            <div className="text-[8px] text-grafite/40 text-center border-t border-grafite/5 pt-4">
              <p>Dr. Vinícius Prado - Medicina Veterinária</p>
              <p>CRMV-XX 00.000</p>
            </div>
          </div>
          
          {/* Capa (Direita) */}
          <div className="w-1/2 bg-petroleo text-offwhite p-10 flex flex-col items-center justify-center text-center relative">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%">
                <pattern id="petroleo-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M10 10 Q 20 0, 30 10 T 50 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#petroleo-pattern)" />
              </svg>
            </div>
            <Logo className="w-24 h-24 mb-6 text-white" monochrome />
            <h3 className="text-3xl font-bold uppercase tracking-tighter leading-none">Carteira de<br/>Vacinação</h3>
            <div className="w-12 h-1 bg-salvia my-6"></div>
            <p className="text-sm tracking-[0.4em] uppercase font-light">Dr. Vinícius Prado</p>
            <p className="text-[10px] mt-2 opacity-70 uppercase font-bold tracking-widest text-salvia">Médico Veterinário</p>
          </div>
        </div>
      </div>
    </div>

    {/* Miolo (Interno) */}
    <div className="space-y-4">
      <h3 className="text-[10px] font-bold text-grafite/40 uppercase tracking-widest ml-2">Páginas Internas (Miolo)</h3>
      <div className="flex justify-center overflow-x-auto pb-4">
        <div className="w-[200mm] h-[140mm] bg-white border-2 border-salvia/10 rounded-lg shadow-2xl flex overflow-hidden shrink-0">
          {/* Página de Identificação (Esquerda) */}
          <div className="w-1/2 p-8 border-r border-grafite/5 flex flex-col">
            <h4 className="text-xs font-bold text-petroleo uppercase mb-6 border-b border-petroleo/10 pb-2">Identificação do Pet</h4>
            <div className="space-y-4">
              <div className="w-32 h-32 bg-offwhite border-2 border-dashed border-salvia/20 rounded-lg flex items-center justify-center text-[10px] text-grafite/30 mx-auto mb-4">
                Foto do Pet
              </div>
              <div className="grid grid-cols-1 gap-3">
                <Field label="Nome" className="mb-0" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Espécie" className="mb-0" />
                  <Field label="Raça" className="mb-0" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nascimento" type="date" className="mb-0" />
                  <Field label="Sexo" className="mb-0" />
                </div>
                <Field label="Proprietário" className="mb-0" />
              </div>
            </div>
          </div>
          
          {/* Página de Vacinas (Direita) */}
          <div className="w-1/2 p-8 bg-offwhite/20">
            <h4 className="text-xs font-bold text-petroleo uppercase mb-4 border-b border-petroleo/10 pb-2">Registro de Vacinas</h4>
            <table className="w-full text-[9px]">
              <thead>
                <tr className="text-salvia uppercase font-bold border-b border-grafite/10">
                  <th className="text-left py-2">Data</th>
                  <th className="text-left py-2">Vacina / Lote</th>
                  <th className="text-right py-2">Próxima</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <tr key={i} className="border-b border-grafite/5">
                    <td className="py-3 w-16"></td>
                    <td className="py-3">
                      <div className="w-24 h-10 border border-dashed border-grafite/20 rounded flex items-center justify-center text-[7px] text-grafite/20">
                        Selo da Vacina
                      </div>
                    </td>
                    <td className="py-3 text-right w-16"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
