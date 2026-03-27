import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Users, Dog, Calendar, AlertTriangle, Package, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { storage } from '../services/storage';
import { Client, Animal, Appointment, Transaction, InventoryItem } from '../types';

export const Dashboard = () => {
  const [stats, setStats] = useState({
    clients: 0,
    animals: 0,
    appointments: 0,
    revenue: 0,
    expenses: 0,
    lowStock: 0,
  });

  useEffect(() => {
    const clients = storage.clients.getAll();
    const animals = storage.animals.getAll();
    const appointments = storage.appointments.getAll();
    const transactions = storage.transactions.getAll();
    const inventory = storage.inventory.getAll();

    const revenue = transactions.filter(t => t.type === 'Receita').reduce((acc, t) => acc + t.amount, 0);
    const expenses = transactions.filter(t => t.type === 'Despesa').reduce((acc, t) => acc + t.amount, 0);
    const lowStock = inventory.filter(i => i.quantity <= i.minQuantity).length;

    setStats({
      clients: clients.length,
      animals: animals.length,
      appointments: appointments.length,
      revenue,
      expenses,
      lowStock,
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-petroleo uppercase tracking-tighter">Painel de Controle</h2>
          <p className="text-xs text-salvia font-bold uppercase tracking-[0.3em]">Visão Geral da Clínica</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-salvia/10 shadow-sm">
          <Calendar size={16} className="text-salvia" />
          <span className="text-xs font-bold text-grafite uppercase">27 de Março, 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Users} 
          label="Clientes" 
          value={stats.clients} 
          trend="+12%" 
          trendUp={true} 
          color="bg-blue-50 text-blue-600" 
        />
        <StatCard 
          icon={Dog} 
          label="Pacientes" 
          value={stats.animals} 
          trend="+5%" 
          trendUp={true} 
          color="bg-green-50 text-green-600" 
        />
        <StatCard 
          icon={DollarSign} 
          label="Faturamento" 
          value={`R$ ${stats.revenue.toLocaleString()}`} 
          trend="+18%" 
          trendUp={true} 
          color="bg-amber-50 text-amber-600" 
        />
        <StatCard 
          icon={Package} 
          label="Estoque Baixo" 
          value={stats.lowStock} 
          trend={stats.lowStock > 0 ? "Atenção" : "OK"} 
          trendUp={stats.lowStock === 0} 
          color="bg-red-50 text-red-600" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-bold text-grafite/40 uppercase tracking-widest">Fluxo de Caixa (Mensal)</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-petroleo rounded-full"></div>
                  <span className="text-[10px] font-bold text-grafite uppercase">Receitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-salvia rounded-full"></div>
                  <span className="text-[10px] font-bold text-grafite uppercase">Despesas</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-offwhite rounded-2xl border border-dashed border-salvia/20 flex items-center justify-center">
              <p className="text-[10px] text-salvia font-bold uppercase">Gráfico de Desempenho Financeiro</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm">
            <h3 className="text-xs font-bold text-grafite/40 uppercase tracking-widest mb-6">Últimas Transações</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 bg-offwhite rounded-2xl border border-salvia/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${i % 2 === 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {i % 2 === 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-grafite uppercase">{i % 2 === 0 ? 'Consulta Clínica' : 'Compra de Insumos'}</h5>
                      <p className="text-[10px] text-salvia uppercase font-bold">27/03/2026 • {i % 2 === 0 ? 'Receita' : 'Despesa'}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-black ${i % 2 === 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {i % 2 === 0 ? '+ R$ 250,00' : '- R$ 120,00'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-grafite text-offwhite p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-petroleo/20 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-salvia mb-6">Próximos Atendimentos</h3>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-start gap-4 border-l-2 border-petroleo pl-4 py-1">
                  <div className="flex flex-col">
                    <span className="text-lg font-black leading-none">14:30</span>
                    <span className="text-[9px] font-bold uppercase text-salvia">Hoje</span>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase">Rex (Golden)</h5>
                    <p className="text-[9px] text-offwhite/50 uppercase">Consulta de Rotina</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-petroleo rounded-xl text-[10px] font-bold uppercase hover:bg-petroleo/80 transition-all">Ver Agenda Completa</button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-salvia/10 shadow-sm">
            <h3 className="text-xs font-bold text-grafite/40 uppercase tracking-widest mb-6">Alertas de Estoque</h3>
            <div className="space-y-4">
              {stats.lowStock > 0 ? (
                <div className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-100">
                  <AlertTriangle className="text-red-600" size={24} />
                  <div>
                    <h5 className="text-xs font-bold text-red-700 uppercase">{stats.lowStock} itens em baixa</h5>
                    <p className="text-[9px] text-red-600/70 uppercase">Necessário reposição urgente</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                  <CheckCircle2 className="text-green-600" size={24} />
                  <div>
                    <h5 className="text-xs font-bold text-green-700 uppercase">Estoque em dia</h5>
                    <p className="text-[9px] text-green-600/70 uppercase">Tudo sob controle</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function StatCard({ icon: Icon, label, value, trend, trendUp, color }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-salvia/10 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
          <Icon size={24} />
        </div>
        <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {trend}
        </div>
      </div>
      <h4 className="text-[10px] font-bold text-salvia uppercase tracking-widest mb-1">{label}</h4>
      <p className="text-2xl font-black text-grafite tracking-tighter">{value}</p>
    </div>
  );
}

function CheckCircle2({ className, size }: any) {
  return <TrendingUp className={className} size={size} />; // Placeholder
}
