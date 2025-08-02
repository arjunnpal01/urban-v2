import api from '../lib/axios';
import { Service, CreateServiceDto, UpdateServiceDto } from '../types/service';

// Get all services (with optional filters)
export const getServices = async (params?: {
  subcategoryId?: string;
  providerId?: string;
  isActive?: boolean;
}): Promise<Service[]> => {
  const { data } = await api.get('/services', { params });
  return data;
};

// Get a single service by ID
export const getServiceById = async (id: string): Promise<Service> => {
  const { data } = await api.get(`/services/${id}`);
  return data;
};

// Create a new service (Provider only)
export const createService = async (service: CreateServiceDto): Promise<Service> => {
  const { data } = await api.post('/services', service);
  
  return data;
};

// Update a service (Provider only)
export const updateService = async (id: string, service: UpdateServiceDto): Promise<Service> => {
  const { data } = await api.patch(`/services/${id}`, service);
  return data;
};
