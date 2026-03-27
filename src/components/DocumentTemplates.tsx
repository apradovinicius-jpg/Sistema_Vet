import React from 'react';
import { Header, Footer } from './Brand';

interface DocumentProps {
  title: string;
  children: React.ReactNode;
  size?: 'A4' | 'A5';
  subtitle?: string;
}

export const DocumentTemplate: React.FC<DocumentProps> = ({ title, children, size = 'A4', subtitle }) => {
  const sizeClasses = size === 'A4' 
    ? 'w-full md:w-[210mm] min-h-screen md:min-h-[297mm] p-6 md:p-[15mm]' 
    : 'w-full md:w-[148mm] min-h-screen md:min-h-[210mm] p-4 md:p-[10mm]';

  return (
    <div className="w-full overflow-x-auto pb-10 no-print:px-4">
      <div className={`bg-white shadow-2xl mx-auto mb-10 print:shadow-none print:m-0 ${sizeClasses} relative flex flex-col overflow-hidden`}>
        <Header />
        <div className="flex-1">
          <div className="text-center mb-6 border-y border-salvia/10 py-2">
            <h2 className="text-lg font-bold text-petroleo uppercase">
              {title}
            </h2>
            {subtitle && <p className="text-[10px] text-grafite/60 uppercase tracking-widest">{subtitle}</p>}
          </div>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export const Field = ({ 
  label, 
  className = "", 
  type = "text", 
  placeholder = "",
  value,
  onChange
}: { 
  label: string, 
  className?: string, 
  type?: string, 
  placeholder?: string,
  value?: any,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className={`border-b border-grafite/20 pb-1 mb-4 ${className}`}>
    <span className="text-[9px] uppercase text-salvia font-bold block mb-0.5">{label}</span>
    <input 
      type={type} 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-none p-0 text-sm text-grafite focus:ring-0 placeholder:text-grafite/20"
    />
  </div>
);

export const TextArea = ({ 
  label, 
  className = "", 
  rows = 4,
  value,
  onChange
}: { 
  label: string, 
  className?: string, 
  rows?: number,
  value?: any,
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) => (
  <div className={`border border-grafite/10 p-2 mb-4 rounded-sm ${className}`}>
    <span className="text-[9px] uppercase text-salvia font-bold block mb-1">{label}</span>
    <textarea 
      rows={rows}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-none p-0 text-sm text-grafite focus:ring-0 resize-none placeholder:text-grafite/20"
    />
  </div>
);

export const Checkbox = ({ label }: { label: string }) => (
  <label className="flex items-center gap-2 mb-2 cursor-pointer group">
    <input type="checkbox" className="w-3 h-3 border border-grafite/30 text-petroleo focus:ring-petroleo rounded-sm" />
    <span className="text-xs text-grafite group-hover:text-petroleo transition-colors">{label}</span>
  </label>
);
