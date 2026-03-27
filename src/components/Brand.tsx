import React, { useEffect, useState } from 'react';
import { storage } from '../services/storage';
import { VetProfile } from '../types';

export const Logo = ({ className = "w-12 h-12", inverted = false, monochrome = false }: { className?: string, inverted?: boolean, monochrome?: boolean }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Background Circle/Shape */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className={monochrome ? "" : (inverted ? "text-white/20" : "text-salvia/30")} />
        
        {/* Monogram VP */}
        <path
          d="M25 30 L45 75 L65 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={monochrome ? "" : (inverted ? "text-white" : "text-petroleo")}
        />
        <path
          d="M55 30 L75 30 C85 30 85 50 75 50 L55 50 L55 75"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={monochrome ? "" : (inverted ? "text-salvia" : "text-salvia")}
        />
      </svg>
    </div>
  );
};

export const Header = () => {
  const [profile, setProfile] = useState<VetProfile | null>(null);

  useEffect(() => {
    setProfile(storage.vetProfile.get());
  }, []);

  return (
    <div className="flex flex-col items-center text-center mb-8 border-b border-salvia/20 pb-6">
      <Logo className="w-20 h-20 mb-4" />
      <h1 className="text-2xl font-bold tracking-tight text-petroleo uppercase">
        {profile?.name || 'Dr. Vinícius Prado'}
      </h1>
      <p className="text-sm font-medium text-salvia tracking-widest uppercase">
        {profile?.specialty || 'Médico Veterinário'}
      </p>
      <p className="text-xs text-grafite/60 mt-1">
        {profile?.crmv ? `CRMV ${profile.crmv}` : 'CRMV-XX 00.000'} 
        {profile?.mapa ? ` | Registro MAPA ${profile.mapa}` : ' | Registro MAPA 0073781/2025'}
      </p>
    </div>
  );
};

export const Footer = () => {
  const [profile, setProfile] = useState<VetProfile | null>(null);

  useEffect(() => {
    setProfile(storage.vetProfile.get());
  }, []);

  return (
    <div className="mt-8 pt-4 border-t border-salvia/20 text-[10px] text-grafite/50 flex justify-between items-end">
      <div>
        <p>{profile?.address || 'Rua Exemplo, 123 - Bairro'} - {profile?.city || 'Cidade'}/{profile?.state || 'UF'}</p>
        <p>Contato: {profile?.phone || '(00) 00000-0000'} | {profile?.email || 'viniciusprado.vet@gmail.com'}</p>
      </div>
      <div className="text-right">
        <p>Identidade Visual & Documentação Técnica</p>
      </div>
    </div>
  );
};
