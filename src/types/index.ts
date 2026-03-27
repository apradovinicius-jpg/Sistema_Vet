export interface Client {
  id: string;
  name: string;
  cpf: string;
  rg: string;
  phone: string;
  email: string;
  cep: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  notes: string;
  createdAt: string;
}

export interface Animal {
  id: string;
  name: string;
  species: string;
  breed: string;
  birthDate: string;
  gender: string;
  color: string;
  weight: string;
  ownerId: string;
  microchip: string;
  healthHistory: string;
  createdAt: string;
}

export interface MedicalRecord {
  id: string;
  animalId: string;
  date: string;
  weight: string;
  temperature: string;
  heartRate: string;
  respiratoryRate: string;
  mucosa: string;
  hydration: string;
  tpc: string;
  ecc: string;
  anamnesis: string;
  physicalExam: string;
  diagnosis: string;
  treatment: string;
  veterinarian: string;
}

export interface Appointment {
  id: string;
  animalId: string;
  clientId: string;
  date: string;
  time: string;
  type: 'Consulta' | 'Vacina' | 'Cirurgia' | 'Retorno' | 'Exame';
  status: 'Agendado' | 'Confirmado' | 'Em Atendimento' | 'Finalizado' | 'Cancelado';
  notes: string;
}

export interface Transaction {
  id: string;
  type: 'Receita' | 'Despesa';
  category: string;
  description: string;
  amount: number;
  date: string;
  status: 'Pago' | 'Pendente';
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Vacina' | 'Medicamento' | 'Insumo' | 'Outros';
  quantity: number;
  minQuantity: number;
  unit: string;
  expiryDate: string;
  price: number;
}

export interface VetProfile {
  name: string;
  crmv: string;
  mapa: string;
  specialty: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  logoUrl?: string;
}
