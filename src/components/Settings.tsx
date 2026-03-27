import React, { useState, useEffect } from 'react';
import { Save, User, MapPin, Phone, Mail, Award, Building } from 'lucide-react';
import { storage } from '../services/storage';
import { VetProfile } from '../types';
import { Field } from './DocumentTemplates';
import { motion } from 'motion/react';

export function Settings() {
  const [profile, setProfile] = useState<VetProfile>({
    name: '',
    crmv: '',
    mapa: '',
    specialty: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedProfile = storage.vetProfile.get();
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    storage.vetProfile.save(profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-salvia/10 pb-6 gap-4">
        <div>
          <h2 className="text-2xl font-black text-petroleo uppercase tracking-tighter">Parametrização do Veterinário</h2>
          <p className="text-xs text-grafite/50 uppercase tracking-widest mt-1">Configure seus dados profissionais e de atendimento</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-petroleo text-white px-6 py-3 rounded-xl font-bold uppercase text-xs hover:bg-grafite transition-all shadow-lg shadow-petroleo/20"
        >
          <Save size={18} />
          {saved ? 'Salvo com Sucesso!' : 'Salvar Configurações'}
        </button>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-petroleo mb-2">
            <User size={20} />
            <h3 className="font-bold uppercase text-sm tracking-wider">Dados Profissionais</h3>
          </div>
          
          <Field 
            label="Nome Completo" 
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
            placeholder="Dr. Vinícius Prado"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field 
              label="CRMV" 
              value={profile.crmv}
              onChange={(e) => setProfile({...profile, crmv: e.target.value})}
              placeholder="00000-SP"
            />
            <Field 
              label="MAPA" 
              value={profile.mapa}
              onChange={(e) => setProfile({...profile, mapa: e.target.value})}
              placeholder="Registro MAPA"
            />
          </div>

          <Field 
            label="Especialidade / Atuação" 
            value={profile.specialty}
            onChange={(e) => setProfile({...profile, specialty: e.target.value})}
            placeholder="Ex: Medicina Veterinária Preventiva"
          />
        </div>

        <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-petroleo mb-2">
            <Phone size={20} />
            <h3 className="font-bold uppercase text-sm tracking-wider">Contato e Localização</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field 
              label="Telefone" 
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
              placeholder="(00) 00000-0000"
            />
            <Field 
              label="E-mail" 
              value={profile.email}
              onChange={(e) => setProfile({...profile, email: e.target.value})}
              placeholder="contato@exemplo.com"
            />
          </div>

          <Field 
            label="Endereço de Atendimento" 
            value={profile.address}
            onChange={(e) => setProfile({...profile, address: e.target.value})}
            placeholder="Rua, Número, Complemento"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field 
              label="Cidade" 
              value={profile.city}
              onChange={(e) => setProfile({...profile, city: e.target.value})}
              placeholder="Sua Cidade"
            />
            <Field 
              label="Estado" 
              value={profile.state}
              onChange={(e) => setProfile({...profile, state: e.target.value})}
              placeholder="UF"
            />
          </div>
        </div>
      </form>

      <div className="bg-offwhite p-8 rounded-3xl border border-salvia/20 border-dashed">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-salvia/20 rounded-2xl flex items-center justify-center text-salvia shrink-0">
            <Award size={24} />
          </div>
          <div>
            <h4 className="font-bold text-petroleo uppercase text-sm mb-1">Por que preencher estes dados?</h4>
            <p className="text-xs text-grafite/60 leading-relaxed">
              As informações cadastradas aqui serão utilizadas automaticamente no cabeçalho e rodapé de todos os seus documentos (receitas, prontuários, termos e atestados). Isso garante que sua papelaria técnica esteja sempre personalizada e dentro das normas profissionais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
