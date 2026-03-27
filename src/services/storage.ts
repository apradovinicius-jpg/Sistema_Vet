import { Client, Animal, Appointment, Transaction, InventoryItem, MedicalRecord, VetProfile } from '../types';

const STORAGE_KEYS = {
  CLIENTS: 'petvet_clients',
  ANIMALS: 'petvet_animals',
  APPOINTMENTS: 'petvet_appointments',
  TRANSACTIONS: 'petvet_transactions',
  INVENTORY: 'petvet_inventory',
  MEDICAL_RECORDS: 'petvet_medical_records',
  VET_PROFILE: 'petvet_vet_profile',
};

const get = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const save = <T>(key: string, data: T[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const storage = {
  clients: {
    getAll: () => get<Client>(STORAGE_KEYS.CLIENTS),
    save: (client: Client) => {
      const clients = get<Client>(STORAGE_KEYS.CLIENTS);
      const index = clients.findIndex(c => c.id === client.id);
      if (index >= 0) clients[index] = client;
      else clients.push(client);
      save(STORAGE_KEYS.CLIENTS, clients);
    },
    delete: (id: string) => {
      const clients = get<Client>(STORAGE_KEYS.CLIENTS).filter(c => c.id !== id);
      save(STORAGE_KEYS.CLIENTS, clients);
    }
  },
  animals: {
    getAll: () => get<Animal>(STORAGE_KEYS.ANIMALS),
    save: (animal: Animal) => {
      const animals = get<Animal>(STORAGE_KEYS.ANIMALS);
      const index = animals.findIndex(a => a.id === animal.id);
      if (index >= 0) animals[index] = animal;
      else animals.push(animal);
      save(STORAGE_KEYS.ANIMALS, animals);
    },
    getByOwner: (ownerId: string) => get<Animal>(STORAGE_KEYS.ANIMALS).filter(a => a.ownerId === ownerId),
    delete: (id: string) => {
      const animals = get<Animal>(STORAGE_KEYS.ANIMALS).filter(a => a.id !== id);
      save(STORAGE_KEYS.ANIMALS, animals);
    }
  },
  appointments: {
    getAll: () => get<Appointment>(STORAGE_KEYS.APPOINTMENTS),
    save: (appointment: Appointment) => {
      const appointments = get<Appointment>(STORAGE_KEYS.APPOINTMENTS);
      const index = appointments.findIndex(a => a.id === appointment.id);
      if (index >= 0) appointments[index] = appointment;
      else appointments.push(appointment);
      save(STORAGE_KEYS.APPOINTMENTS, appointments);
    },
    delete: (id: string) => {
      const appointments = get<Appointment>(STORAGE_KEYS.APPOINTMENTS).filter(a => a.id !== id);
      save(STORAGE_KEYS.APPOINTMENTS, appointments);
    }
  },
  medicalRecords: {
    getAll: () => get<MedicalRecord>(STORAGE_KEYS.MEDICAL_RECORDS),
    getByAnimal: (animalId: string) => get<MedicalRecord>(STORAGE_KEYS.MEDICAL_RECORDS).filter(r => r.animalId === animalId),
    save: (record: MedicalRecord) => {
      const records = get<MedicalRecord>(STORAGE_KEYS.MEDICAL_RECORDS);
      records.push(record);
      save(STORAGE_KEYS.MEDICAL_RECORDS, records);
    }
  },
  transactions: {
    getAll: () => get<Transaction>(STORAGE_KEYS.TRANSACTIONS),
    save: (transaction: Transaction) => {
      const transactions = get<Transaction>(STORAGE_KEYS.TRANSACTIONS);
      transactions.push(transaction);
      save(STORAGE_KEYS.TRANSACTIONS, transactions);
    }
  },
  inventory: {
    getAll: () => get<InventoryItem>(STORAGE_KEYS.INVENTORY),
    save: (item: InventoryItem) => {
      const items = get<InventoryItem>(STORAGE_KEYS.INVENTORY);
      const index = items.findIndex(i => i.id === item.id);
      if (index >= 0) items[index] = item;
      else items.push(item);
      save(STORAGE_KEYS.INVENTORY, items);
    }
  },
  vetProfile: {
    get: (): VetProfile | null => {
      const data = localStorage.getItem(STORAGE_KEYS.VET_PROFILE);
      return data ? JSON.parse(data) : null;
    },
    save: (profile: VetProfile) => {
      localStorage.setItem(STORAGE_KEYS.VET_PROFILE, JSON.stringify(profile));
    }
  }
};
