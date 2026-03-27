import React from 'react';
import { DocumentTemplate, Field, TextArea } from './DocumentTemplates';

export const TermoConsentimento = () => (
  <DocumentTemplate title="Termo de Consentimento e Responsabilidade" size="A4">
    <div className="text-[11px] leading-relaxed text-grafite space-y-4 text-justify">
      <div className="flex flex-wrap items-center gap-1">
        Eu, <input type="text" placeholder="Nome Completo" className="flex-1 min-w-[200px] border-b border-grafite/30 bg-transparent text-[11px] focus:ring-0 p-0" />, 
        portador do RG <input type="text" placeholder="RG" className="w-24 border-b border-grafite/30 bg-transparent text-[11px] focus:ring-0 p-0" /> 
        e CPF <input type="text" placeholder="CPF" className="w-32 border-b border-grafite/30 bg-transparent text-[11px] focus:ring-0 p-0" />, 
        proprietário/responsável pelo animal <input type="text" placeholder="Nome do Animal" className="w-32 border-b border-grafite/30 bg-transparent text-[11px] focus:ring-0 p-0" />, 
        da espécie <input type="text" placeholder="Espécie" className="w-24 border-b border-grafite/30 bg-transparent text-[11px] focus:ring-0 p-0" />, 
        raça <input type="text" placeholder="Raça" className="w-24 border-b border-grafite/30 bg-transparent text-[11px] focus:ring-0 p-0" />, 
        declaro estar ciente dos procedimentos médicos/cirúrgicos propostos pelo 
        <strong> Dr. Vinícius Prado</strong>.
      </div>
      
      <p>
        Fui informado(a) sobre os riscos inerentes à anestesia e ao procedimento, bem como sobre as 
        possíveis complicações e a necessidade de cuidados pós-operatórios. Autorizo a realização de 
        exames complementares e tratamentos de emergência que se façam necessários para a preservação 
        da vida do animal.
      </p>

      <p>
        Comprometo-me a seguir todas as orientações médicas e a arcar com os custos decorrentes do 
        atendimento. Declaro que todas as minhas dúvidas foram esclarecidas de forma clara e objetiva.
      </p>

      <div className="mt-20 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-center">
            <div className="border-t border-grafite/40 pt-2">
              <p className="uppercase font-bold">Assinatura do Responsável</p>
            </div>
          </div>
          <div className="text-center">
            <div className="border-t border-grafite/40 pt-2">
              <p className="uppercase font-bold text-petroleo">Dr. Vinícius Prado</p>
              <p className="text-[9px]">Médico Veterinário - CRMV-XX 00.000</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-xs">
          <input type="text" placeholder="Cidade" className="w-24 border-b border-grafite/30 bg-transparent text-xs text-center focus:ring-0 p-0" />, 
          <input type="text" placeholder="Dia" className="w-8 border-b border-grafite/30 bg-transparent text-xs text-center focus:ring-0 p-0" /> de 
          <input type="text" placeholder="Mês" className="w-24 border-b border-grafite/30 bg-transparent text-xs text-center focus:ring-0 p-0" /> de 20
          <input type="text" placeholder="Ano" className="w-8 border-b border-grafite/30 bg-transparent text-xs text-center focus:ring-0 p-0" />.
        </div>
      </div>
    </div>
  </DocumentTemplate>
);

export const AtestadoSaude = () => (
  <DocumentTemplate title="Atestado de Saúde e Sanidade" size="A4">
    <div className="space-y-8 mt-10">
      <div className="text-sm leading-relaxed text-justify flex flex-wrap items-center gap-1">
        Atesto, para os devidos fins, que examinei nesta data o animal abaixo descrito, 
        encontrando-o em bom estado de saúde, livre de doenças infectocontagiosas e 
        parasitárias, estando apto para <input type="text" placeholder="Finalidade (ex: Viagem, Banho e Tosa)" className="flex-1 min-w-[300px] border-b border-grafite/30 bg-transparent text-sm focus:ring-0 p-0" />.
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-salvia/5 p-6 rounded-sm">
        <Field label="Nome do Animal" />
        <Field label="Espécie" />
        <Field label="Raça" />
        <Field label="Sexo" />
        <Field label="Idade" />
        <Field label="Proprietário" />
      </div>

      <div className="mt-20 text-center space-y-10">
        <div className="flex justify-center items-center gap-2">
          Este atestado tem validade de <input type="text" placeholder="10" className="w-8 border-b border-grafite/30 bg-transparent text-center focus:ring-0 p-0" /> dias.
        </div>
        
        <div className="flex justify-center">
          <div className="w-64 border-t border-grafite/40 pt-2">
            <p className="uppercase font-bold text-petroleo">Dr. Vinícius Prado</p>
            <p className="text-xs">Médico Veterinário - CRMV-XX 00.000</p>
          </div>
        </div>
        
        <p className="text-xs text-grafite/50">Cidade/UF, {new Date().toLocaleDateString('pt-BR')}</p>
      </div>
    </div>
  </DocumentTemplate>
);
