import React from 'react';
import { DocumentTemplate, Field, TextArea, Checkbox } from './DocumentTemplates';

export const ReceituarioSimples = () => (
  <DocumentTemplate title="Receituário Simples" size="A5">
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Paciente" />
        <Field label="Espécie/Raça" />
      </div>
      <Field label="Proprietário" />
      <div className="mt-4">
        <TextArea label="Prescrição e Orientações" rows={12} />
      </div>
      <div className="mt-4 flex justify-end">
        <div className="w-32 border-t border-salvia/30 pt-1 text-center">
          <p className="text-[8px] uppercase text-salvia/40">Assinatura</p>
        </div>
      </div>
    </div>
  </DocumentTemplate>
);

export const ReceituarioEspecial = () => (
  <DocumentTemplate 
    title="Receita de Controle Especial" 
    subtitle="1ª Via para Farmácia - 2ª Via para Paciente"
    size="A4"
  >
    <div className="space-y-4">
      {/* Top Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="border border-salvia/20 p-2 rounded-sm bg-offwhite">
          <h3 className="text-[9px] font-bold text-petroleo uppercase mb-1">Identificação do Emitente</h3>
          <p className="text-[9px] text-grafite leading-tight">
            <strong>Dr. Vinícius Prado</strong><br />
            CRMV: 71232 SP<br />
            Registro no MAPA: 0073781/2025
          </p>
        </div>
        <div className="border border-salvia/20 p-2 rounded-sm bg-offwhite">
          <h3 className="text-[9px] font-bold text-petroleo uppercase mb-1">Animal</h3>
          <div className="space-y-1">
            <Field label="ID / Nome" className="mb-0 pb-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              <Field label="Espécie" className="mb-0 pb-0" />
              <Field label="Raça" className="mb-0 pb-0" />
            </div>
          </div>
        </div>
        <div className="border border-salvia/20 p-2 rounded-sm bg-offwhite">
          <h3 className="text-[9px] font-bold text-petroleo uppercase mb-1">Responsável</h3>
          <div className="space-y-1">
            <Field label="Nome" className="mb-0 pb-0" />
            <Field label="CPF" className="mb-0 pb-0" />
          </div>
        </div>
      </div>

      {/* Prescription Body */}
      <div className="space-y-4 min-h-[400px]">
        <div className="border-b border-salvia/10 pb-1">
          <span className="text-[10px] font-bold text-petroleo uppercase">USO ORAL</span>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-dotted border-salvia/30 pb-1">
            <Field label="Farmácia Humana / Veterinária" className="flex-1 mb-0 pb-0" />
            <div className="w-20 border border-salvia/20 p-1 text-center text-[9px] font-bold">
              <input type="text" placeholder="QTD" className="w-full text-center bg-transparent border-none p-0 text-[9px] focus:ring-0" />
            </div>
          </div>
          
          <TextArea label="Medicamento e Posologia" rows={6} />
          
          <div className="flex justify-between items-end border-b border-dotted border-salvia/30 pb-1">
            <Field label="Farmácia Humana / Veterinária" className="flex-1 mb-0 pb-0" />
            <div className="w-20 border border-salvia/20 p-1 text-center text-[9px] font-bold">
              <input type="text" placeholder="QTD" className="w-full text-center bg-transparent border-none p-0 text-[9px] focus:ring-0" />
            </div>
          </div>
          
          <TextArea label="Medicamento e Posologia" rows={6} />
        </div>

        <div className="mt-6">
          <TextArea label="Instruções Gerais do Tratamento" rows={4} />
        </div>
      </div>

      {/* Footer Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="col-span-1 flex flex-col justify-end">
          <Field label="Data" type="date" />
          <div className="border-t border-salvia/40 pt-1 text-center">
            <p className="text-[8px] uppercase font-bold text-petroleo">Assinatura do Médico Veterinário</p>
          </div>
        </div>
        
        <div className="border border-salvia/20 p-2 rounded-sm bg-offwhite">
          <h3 className="text-[9px] font-bold text-grafite uppercase mb-2">Identificação do Comprador</h3>
          <div className="space-y-1">
            <Field label="Nome" className="mb-0 pb-0" />
            <Field label="RG / Endereço" className="mb-0 pb-0" />
            <Field label="Telefone" className="mb-0 pb-0" />
          </div>
        </div>

        <div className="border border-salvia/20 p-2 rounded-sm bg-offwhite">
          <h3 className="text-[9px] font-bold text-grafite uppercase mb-2">Identificação do Fornecedor</h3>
          <div className="space-y-1">
            <Field label="Data" type="date" className="mb-0 pb-0" />
            <div className="h-12 border-b border-salvia/10 mt-2"></div>
            <p className="text-[7px] text-center uppercase mt-1">Assinatura do Farmacêutico</p>
          </div>
        </div>
      </div>
    </div>
  </DocumentTemplate>
);

export const ProntuarioClinico = () => (
  <DocumentTemplate title="Prontuário Clínico Completo" size="A4">
    <div className="space-y-4">
      <section>
        <h3 className="text-xs font-bold text-salvia uppercase mb-2 border-b border-salvia/20">Identificação</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Nome do Animal" />
          <Field label="Espécie" />
          <Field label="Raça" />
          <Field label="Sexo" />
          <Field label="Idade" />
          <Field label="Pelagem" />
        </div>
      </section>
      
      <section>
        <TextArea label="Anamnese" rows={4} />
      </section>

      <section>
        <h3 className="text-xs font-bold text-salvia uppercase mb-2 border-b border-salvia/20">Exame Físico</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Field label="Peso (kg)" />
          <Field label="Temp (°C)" />
          <Field label="FC (bpm)" />
          <Field label="FR (mpm)" />
          <Field label="TPC" />
          <Field label="Mucosas" />
          <Field label="Hidratação" />
          <Field label="Linfonodos" />
        </div>
      </section>

      <section>
        <TextArea label="Suspeita Diagnóstica / Conduta" rows={8} />
      </section>
    </div>
  </DocumentTemplate>
);

export const SolicitacaoExames = () => (
  <DocumentTemplate title="Solicitação de Exames" size="A4">
    <div className="space-y-6">
      <Field label="Paciente" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-bold text-petroleo uppercase mb-3">Hematologia</h3>
          <Checkbox label="Hemograma Completo" />
          <Checkbox label="Pesquisa de Hemoparasitas" />
          <Checkbox label="Contagem de Reticulócitos" />
          
          <h3 className="text-xs font-bold text-petroleo uppercase mt-4 mb-3">Bioquímicos</h3>
          <Checkbox label="ALT / AST" />
          <Checkbox label="Ureia / Creatinina" />
          <Checkbox label="Fosfatase Alcalina" />
          <Checkbox label="Fósforo" />
          <Checkbox label="Glicose" />
          <Checkbox label="Proteínas Totais e Frações" />
        </div>
        
        <div>
          <h3 className="text-xs font-bold text-petroleo uppercase mb-3">Imagem</h3>
          <Checkbox label="Raio-X Simples" />
          <Checkbox label="Raio-X Contrastado" />
          <Checkbox label="Ultrassonografia Abdominal" />
          <Checkbox label="Ecocardiograma" />
          
          <h3 className="text-xs font-bold text-petroleo uppercase mt-4 mb-3">Outros</h3>
          <Checkbox label="Urinálise (Tipo I)" />
          <Checkbox label="Coproparasitológico" />
          <Checkbox label="Citologia" />
          <Checkbox label="Histopatológico" />
        </div>
      </div>
      
      <TextArea label="Observações Adicionais" rows={3} className="mt-6" />
    </div>
  </DocumentTemplate>
);
