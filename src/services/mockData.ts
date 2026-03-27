import { storage } from './storage';

export const seedMockData = () => {
  const clients = storage.clients.getAll();
  if (clients.length > 0) return; // Already seeded

  const mockClients = [
    {
      id: 'c1',
      name: 'Ana Oliveira',
      cpf: '123.456.789-00',
      rg: '12.345.678-9',
      phone: '(11) 98765-4321',
      email: 'ana.oliveira@email.com',
      city: 'São Paulo',
      state: 'SP',
      neighborhood: 'Jardins',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'c2',
      name: 'Carlos Souza',
      cpf: '987.654.321-11',
      rg: '98.765.432-1',
      phone: '(11) 91234-5678',
      email: 'carlos.souza@email.com',
      city: 'São Paulo',
      state: 'SP',
      neighborhood: 'Pinheiros',
      createdAt: new Date().toISOString(),
    }
  ];

  const mockAnimals = [
    {
      id: 'a1',
      name: 'Rex',
      species: 'Canina',
      breed: 'Golden Retriever',
      birthDate: '2020-05-15',
      gender: 'Macho',
      color: 'Dourado',
      weight: '32',
      ownerId: 'c1',
      createdAt: new Date().toISOString(),
    },
    {
      id: 'a2',
      name: 'Luna',
      species: 'Felina',
      breed: 'Siamês',
      birthDate: '2021-02-10',
      gender: 'Fêmea',
      color: 'Branco/Cinza',
      weight: '4.5',
      ownerId: 'c2',
      createdAt: new Date().toISOString(),
    }
  ];

  const mockAppointments = [
    {
      id: 'ap1',
      animalId: 'a1',
      clientId: 'c1',
      date: new Date().toISOString().split('T')[0],
      time: '14:30',
      type: 'Consulta',
      status: 'Agendado',
      notes: 'Check-up anual',
    },
    {
      id: 'ap2',
      animalId: 'a2',
      clientId: 'c2',
      date: new Date().toISOString().split('T')[0],
      time: '16:00',
      type: 'Vacina',
      status: 'Confirmado',
      notes: 'Reforço V5',
    }
  ];

  const mockTransactions = [
    { id: 't1', type: 'Receita', category: 'Consulta', description: 'Consulta Rex', amount: 250, date: new Date().toISOString(), status: 'Pago' },
    { id: 't2', type: 'Despesa', category: 'Insumos', description: 'Compra de Vacinas', amount: 1200, date: new Date().toISOString(), status: 'Pago' },
    { id: 't3', type: 'Receita', category: 'Vacina', description: 'Vacina Luna', amount: 180, date: new Date().toISOString(), status: 'Pago' },
  ];

  const mockInventory = [
    { id: 'i1', name: 'Vacina V10', category: 'Vacina', quantity: 5, minQuantity: 10, unit: 'Dose', expiryDate: '2026-12-31', price: 45 },
    { id: 'i2', name: 'Antipulgas Gatos', category: 'Medicamento', quantity: 25, minQuantity: 5, unit: 'Unidade', expiryDate: '2027-06-30', price: 85 },
  ];

  mockClients.forEach(c => storage.clients.save(c as any));
  mockAnimals.forEach(a => storage.animals.save(a as any));
  mockAppointments.forEach(ap => storage.appointments.save(ap as any));
  mockTransactions.forEach(t => storage.transactions.save(t as any));
  mockInventory.forEach(i => storage.inventory.save(i as any));
};
