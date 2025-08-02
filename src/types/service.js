// Service types for API
export interface Service {
  id: string;
  providerId: string;
  subcategoryId: string;
  customPrice?: number | null;
  description?: string | null;
  isActive: boolean;
}

export interface CreateServiceDto {
  subcategoryId: string;
  customPrice?: number;
  description?: string;
  isActive?: boolean;
}

export interface UpdateServiceDto {
  customPrice?: number;
  description?: string;
  isActive?: boolean;
}
