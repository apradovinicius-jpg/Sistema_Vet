import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, Filter, CheckCircle2, XCircle, AlertCircle, MoreVertical } from 'lucide-react';
import { storage } from '../services/storage';
import { Appointment, Animal, Client } from '../types';

export const Agenda = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [filter, setFilter] = useState<string>('Todos');

  useEffect(() => {
    setAppointments(storage.appointments.getAll().sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)));
    setAnimals(storage.animals.getAll());
    setClients(storage.clients.getAll());
  }, []);

  const getAnimalName = (id: string) => animals.find(a => a.id === id)?.name || 'Desconhecido';
  const getClientName = (id: string) => clients.find(c => c.id === id)?.name || 'Desconhecido';

  const statusColors = {
    'Agendado': 'bg-blue-100 text-blue-700 border-blue-200',
    'Confirmado': 'bg-green-100 text-green-700 border-green-200',
    'Em Atendimento': 'bg-amber-100 text-amber-700 border-amber-200',
    'Finalizado': 'bg-gray-100 text-gray-700 border-gray-200',
    'Cancelado': 'bg-red-100 text-red-700 border-red-200',
  };

  const filteredAppointments = filter === 'Todos' 
    ? appointments 
    : appointments.filter(a => a.status === filter);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-salvia/10 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-petroleo uppercase tracking-tight">Agenda Clínica</h2>
          <p className="text-xs text-salvia font-bold uppercase tracking-widest">Gestão de Consultas e Procedimentos</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="appearance-none bg-offwhite border border-salvia/20 rounded-xl px-4 py-2 pr-10 text-xs font-bold text-grafite focus:ring-2 focus:ring-petroleo/20 outline-none transition-all"
            >
              <option>Todos</option>
              <option>Agendado</option>
              <option>Confirmado</option>
              <option>Em Atendimento</option>
              <option>Finalizado</option>
              <option>Cancelado</option>
            </select>
            <Filter size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-salvia pointer-events-none" />
          </div>
          <button className="flex items-center gap-2 bg-petroleo text-white px-6 py-2 rounded-xl text-xs font-bold uppercase hover:bg-petroleo/90 transition-all shadow-lg shadow-petroleo/20">
            <Plus size={16} /> Novo Agendamento
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-salvia/10 shadow-sm">
            <h3 className="text-xs font-bold text-grafite/40 uppercase tracking-widest mb-4">Calendário</h3>
            <div className="aspect-square bg-offwhite rounded-xl border border-salvia/5 flex items-center justify-center">
              <p className="text-[10px] text-salvia font-bold uppercase">Widget de Calendário</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-salvia/10 shadow-sm">
            <h3 className="text-xs font-bold text-grafite/40 uppercase tracking-widest mb-4">Resumo do Dia</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border border-blue-100">
                <span className="text-[10px] font-bold text-blue-700 uppercase">Agendados</span>
                <span className="text-lg font-black text-blue-700">{appointments.filter(a => a.status === 'Agendado').length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-[10px] font-bold text-amber-700 uppercase">Em Aberto</span>
                <span className="text-lg font-black text-amber-700">{appointments.filter(a => a.status === 'Em Atendimento').length}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          {filteredAppointments.length === 0 ? (
            <div className="bg-white p-20 rounded-2xl border border-dashed border-salvia/30 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-offwhite rounded-full flex items-center justify-center text-salvia/40 mb-4">
                <CalendarIcon size={32} />
              </div>
              <h3 className="text-lg font-bold text-grafite uppercase">Nenhum agendamento encontrado</h3>
              <p className="text-xs text-salvia max-w-xs mt-2">Não há consultas marcadas para os critérios selecionados no momento.</p>
            </div>
          ) : (
            filteredAppointments.map((app) => (
              <div key={app.id} className="group bg-white p-5 rounded-2xl border border-salvia/10 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex flex-row sm:flex-col items-center justify-center w-full sm:w-20 h-12 sm:h-20 bg-offwhite rounded-xl border border-salvia/5 text-petroleo gap-2 sm:gap-0">
                  <span className="text-[10px] font-bold uppercase opacity-50">{app.date.split('-')[2]}/{app.date.split('-')[1]}</span>
                  <span className="text-lg sm:text-xl font-black">{app.time}</span>
                </div>
                
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase ${statusColors[app.status]}`}>
                      {app.status}
                    </span>
                    <span className="text-[9px] font-bold text-salvia uppercase bg-offwhite px-2 py-0.5 rounded-full border border-salvia/10">
                      {app.type}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-grafite uppercase truncate">{getAnimalName(app.animalId)}</h4>
                  <p className="text-xs text-salvia truncate">Tutor: {getClientName(app.clientId)}</p>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 border-salvia/5 pt-3 sm:pt-0">
                  <button className="p-2 text-salvia hover:bg-offwhite rounded-lg transition-colors">
                    <CheckCircle2 size={18} />
                  </button>
                  <button className="p-2 text-salvia hover:bg-offwhite rounded-lg transition-colors">
                    <AlertCircle size={18} />
                  </button>
                  <button className="p-2 text-salvia hover:bg-offwhite rounded-lg transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
