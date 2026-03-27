import React, { useState, useEffect } from 'react';
import { Field, TextArea } from './DocumentTemplates';
import { User, Dog, Plus, Search, Trash2, Edit2, ChevronRight } from 'lucide-react';
import { storage } from '../services/storage';
import { Client, Animal } from '../types';

export const CadastroClientes = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<Client>>({});

  useEffect(() => {
    setClients(storage.clients.getAll());
  }, []);

  const handleSave = () => {
    if (!formData.name) return alert('Nome é obrigatório');
    const newClient: Client = {
      id: formData.id || Math.random().toString(36).substr(2, 9),
      name: formData.name || '',
      cpf: formData.cpf || '',
      rg: formData.rg || '',
      phone: formData.phone || '',
      email: formData.email || '',
      cep: formData.cep || '',
      address: formData.address || '',
      number: formData.number || '',
      neighborhood: formData.neighborhood || '',
      city: formData.city || '',
      state: formData.state || '',
      notes: formData.notes || '',
      createdAt: formData.createdAt || new Date().toISOString(),
    };
    storage.clients.save(newClient);
    setClients(storage.clients.getAll());
    setShowForm(false);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Deseja excluir este cliente?')) {
      storage.clients.delete(id);
      setClients(storage.clients.getAll());
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-salvia/10 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-petroleo uppercase tracking-tight">Gestão de Clientes</h2>
          <p className="text-xs text-salvia font-bold uppercase tracking-widest">Responsáveis pelos Pacientes</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-petroleo text-white px-6 py-2 rounded-xl text-xs font-bold uppercase hover:bg-petroleo/90 transition-all shadow-lg shadow-petroleo/20"
        >
          {showForm ? 'Voltar para Lista' : <><Plus size={16} /> Novo Cliente</>}
        </button>
      </div>

      {showForm ? (
        <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-salvia uppercase border-b border-salvia/10 pb-2">Dados Pessoais</h3>
              <Field 
                label="Nome Completo" 
                value={formData.name} 
                onChange={(e: any) => setFormData({...formData, name: e.target.value})} 
                placeholder="Ex: João da Silva" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="CPF" value={formData.cpf} onChange={(e: any) => setFormData({...formData, cpf: e.target.value})} placeholder="000.000.000-00" />
                <Field label="RG" value={formData.rg} onChange={(e: any) => setFormData({...formData, rg: e.target.value})} placeholder="00.000.000-0" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Telefone Principal" value={formData.phone} onChange={(e: any) => setFormData({...formData, phone: e.target.value})} placeholder="(00) 00000-0000" />
                <Field label="E-mail" value={formData.email} onChange={(e: any) => setFormData({...formData, email: e.target.value})} placeholder="exemplo@email.com" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-salvia uppercase border-b border-salvia/10 pb-2">Endereço</h3>
              <Field label="CEP" value={formData.cep} onChange={(e: any) => setFormData({...formData, cep: e.target.value})} placeholder="00000-000" />
              <Field label="Logradouro" value={formData.address} onChange={(e: any) => setFormData({...formData, address: e.target.value})} placeholder="Rua, Avenida, etc." />
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Field label="Número" value={formData.number} onChange={(e: any) => setFormData({...formData, number: e.target.value})} className="col-span-1" />
                <Field label="Bairro" value={formData.neighborhood} onChange={(e: any) => setFormData({...formData, neighborhood: e.target.value})} className="col-span-2" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Cidade" value={formData.city} onChange={(e: any) => setFormData({...formData, city: e.target.value})} />
                <Field label="Estado (UF)" value={formData.state} onChange={(e: any) => setFormData({...formData, state: e.target.value})} />
              </div>
            </div>
          </div>

          <TextArea label="Observações Relevantes" value={formData.notes} onChange={(e: any) => setFormData({...formData, notes: e.target.value})} rows={3} />

          <div className="flex justify-end gap-4 pt-6 border-t border-salvia/10">
            <button onClick={() => setShowForm(false)} className="px-8 py-3 border border-salvia/30 text-salvia rounded-xl text-xs font-bold uppercase hover:bg-salvia/5 transition-all">Cancelar</button>
            <button onClick={handleSave} className="px-8 py-3 bg-petroleo text-white rounded-xl text-xs font-bold uppercase hover:bg-petroleo/90 transition-all shadow-lg shadow-petroleo/20">Salvar Cadastro</button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-salvia/10 shadow-sm overflow-hidden">
          <div className="p-4 bg-offwhite border-b border-salvia/10 flex items-center gap-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-salvia" />
              <input 
                type="text" 
                placeholder="Buscar por nome, CPF ou telefone..." 
                className="w-full bg-white border border-salvia/20 rounded-xl pl-12 pr-4 py-2 text-xs font-medium focus:ring-2 focus:ring-petroleo/20 outline-none transition-all"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-offwhite/50 border-b border-salvia/10">
                  <th className="px-6 py-4 text-[10px] font-black text-salvia uppercase tracking-widest">Nome / CPF</th>
                  <th className="px-6 py-4 text-[10px] font-black text-salvia uppercase tracking-widest">Contato</th>
                  <th className="px-6 py-4 text-[10px] font-black text-salvia uppercase tracking-widest">Localização</th>
                  <th className="px-6 py-4 text-[10px] font-black text-salvia uppercase tracking-widest text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-salvia/5">
                {clients.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-20 text-center text-salvia/50 text-xs font-bold uppercase">Nenhum cliente cadastrado</td>
                  </tr>
                ) : (
                  clients.map(client => (
                    <tr key={client.id} className="hover:bg-offwhite/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-bold text-grafite uppercase text-xs">{client.name}</div>
                        <div className="text-[10px] text-salvia">{client.cpf}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs text-grafite">{client.phone}</div>
                        <div className="text-[10px] text-salvia">{client.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs text-grafite uppercase">{client.city} - {client.state}</div>
                        <div className="text-[10px] text-salvia uppercase">{client.neighborhood}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => { setFormData(client); setShowForm(true); }} className="p-2 text-salvia hover:bg-salvia/10 rounded-lg transition-colors"><Edit2 size={14} /></button>
                          <button onClick={() => handleDelete(client.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={14} /></button>
                          <button className="p-2 text-petroleo hover:bg-petroleo/10 rounded-lg transition-colors"><ChevronRight size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export const CadastroAnimais = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Partial<Animal>>({});

  useEffect(() => {
    setAnimals(storage.animals.getAll());
    setClients(storage.clients.getAll());
  }, []);

  const handleSave = () => {
    if (!formData.name) return alert('Nome é obrigatório');
    const newAnimal: Animal = {
      id: formData.id || Math.random().toString(36).substr(2, 9),
      name: formData.name || '',
      species: formData.species || '',
      breed: formData.breed || '',
      birthDate: formData.birthDate || '',
      gender: formData.gender || '',
      color: formData.color || '',
      weight: formData.weight || '',
      ownerId: formData.ownerId || '',
      microchip: formData.microchip || '',
      healthHistory: formData.healthHistory || '',
      createdAt: formData.createdAt || new Date().toISOString(),
    };
    storage.animals.save(newAnimal);
    setAnimals(storage.animals.getAll());
    setShowForm(false);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Deseja excluir este animal?')) {
      storage.animals.delete(id);
      setAnimals(storage.animals.getAll());
    }
  };

  const getOwnerName = (id: string) => clients.find(c => c.id === id)?.name || 'Não vinculado';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between bg-white p-6 rounded-2xl border border-salvia/10 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-petroleo uppercase tracking-tight">Gestão de Pacientes</h2>
          <p className="text-xs text-salvia font-bold uppercase tracking-widest">Informações dos Animais</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-petroleo text-white px-6 py-2 rounded-xl text-xs font-bold uppercase hover:bg-petroleo/90 transition-all shadow-lg shadow-petroleo/20"
        >
          {showForm ? 'Voltar para Lista' : <><Plus size={16} /> Novo Paciente</>}
        </button>
      </div>

      {showForm ? (
        <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-salvia uppercase border-b border-salvia/10 pb-2">Identificação</h3>
              <Field label="Nome do Animal" value={formData.name} onChange={(e: any) => setFormData({...formData, name: e.target.value})} placeholder="Ex: Rex" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Espécie" value={formData.species} onChange={(e: any) => setFormData({...formData, species: e.target.value})} placeholder="Ex: Canina" />
                <Field label="Raça" value={formData.breed} onChange={(e: any) => setFormData({...formData, breed: e.target.value})} placeholder="Ex: Golden Retriever" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Data de Nascimento" type="date" value={formData.birthDate} onChange={(e: any) => setFormData({...formData, birthDate: e.target.value})} />
                <Field label="Sexo" value={formData.gender} onChange={(e: any) => setFormData({...formData, gender: e.target.value})} placeholder="Macho / Fêmea" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Pelagem / Cor" value={formData.color} onChange={(e: any) => setFormData({...formData, color: e.target.value})} />
                <Field label="Peso Atual (kg)" value={formData.weight} onChange={(e: any) => setFormData({...formData, weight: e.target.value})} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-salvia uppercase border-b border-salvia/10 pb-2">Vínculo e Saúde</h3>
              <div className="relative">
                <label className="block text-[10px] font-black text-salvia uppercase tracking-widest mb-1.5">Responsável (Vincular Cliente)</label>
                <select 
                  value={formData.ownerId} 
                  onChange={(e) => setFormData({...formData, ownerId: e.target.value})}
                  className="w-full bg-offwhite border border-salvia/20 rounded-xl px-4 py-2 text-xs font-medium focus:ring-2 focus:ring-petroleo/20 outline-none transition-all"
                >
                  <option value="">Selecione um responsável...</option>
                  {clients.map(c => <option key={c.id} value={c.id}>{c.name} ({c.cpf})</option>)}
                </select>
              </div>
              <Field label="Número do Microchip (Se houver)" value={formData.microchip} onChange={(e: any) => setFormData({...formData, microchip: e.target.value})} />
              <TextArea label="Histórico de Alergias ou Doenças Crônicas" value={formData.healthHistory} onChange={(e: any) => setFormData({...formData, healthHistory: e.target.value})} rows={5} />
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t border-salvia/10">
            <button onClick={() => setShowForm(false)} className="px-8 py-3 border border-salvia/30 text-salvia rounded-xl text-xs font-bold uppercase hover:bg-salvia/5 transition-all">Cancelar</button>
            <button onClick={handleSave} className="px-8 py-3 bg-petroleo text-white rounded-xl text-xs font-bold uppercase hover:bg-petroleo/90 transition-all shadow-lg shadow-petroleo/20">Salvar Cadastro</button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.length === 0 ? (
            <div className="col-span-full bg-white p-20 rounded-3xl border border-dashed border-salvia/30 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center text-salvia/40 mb-4">
                <Dog size={32} />
              </div>
              <h3 className="text-lg font-bold text-grafite uppercase">Nenhum paciente cadastrado</h3>
              <p className="text-xs text-salvia max-w-xs mt-2">Comece cadastrando um novo animal para gerenciar seus prontuários e atendimentos.</p>
            </div>
          ) : (
            animals.map(animal => (
              <div key={animal.id} className="group bg-white p-6 rounded-3xl border border-salvia/10 shadow-sm hover:shadow-xl hover:border-petroleo/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-petroleo/5 rounded-full -mr-12 -mt-12 transition-all group-hover:bg-petroleo/10"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 bg-offwhite rounded-2xl flex items-center justify-center text-petroleo group-hover:bg-petroleo group-hover:text-white transition-all">
                    <Dog size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-black text-grafite uppercase text-sm truncate group-hover:text-petroleo transition-colors">{animal.name}</h4>
                    <p className="text-[10px] text-salvia font-bold uppercase tracking-widest">{animal.species} • {animal.breed}</p>
                    <div className="mt-4 space-y-1">
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase">
                        <span className="text-salvia/60">Tutor:</span>
                        <span className="text-grafite truncate max-w-[100px]">{getOwnerName(animal.ownerId)}</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase">
                        <span className="text-salvia/60">Peso:</span>
                        <span className="text-grafite">{animal.weight} kg</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-salvia/5 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-1">
                    <button onClick={() => { setFormData(animal); setShowForm(true); }} className="p-2 text-salvia hover:bg-salvia/10 rounded-lg transition-colors"><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(animal.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={14} /></button>
                  </div>
                  <button className="flex items-center gap-1 text-[9px] font-black uppercase text-petroleo hover:underline">
                    Ver Prontuário <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

