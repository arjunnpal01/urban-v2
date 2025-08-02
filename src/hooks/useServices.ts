import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as serviceApi from '../api/services';
import { Service, CreateServiceDto, UpdateServiceDto } from '../types/service';

export function useServices(params?: {
  subcategoryId?: string;
  providerId?: string;
  isActive?: boolean;
}) {
  return useQuery<Service[], Error>({
    queryKey: ['services', params],
    queryFn: () => serviceApi.getServices(params),
  });
}

export function useService(id: string) {
  return useQuery<Service, Error>({
    queryKey: ['services', id],
    queryFn: () => serviceApi.getServiceById(id),
    enabled: !!id,
  });
}

export function useCreateService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: serviceApi.createService,
    onSuccess: () => {
      queryClient.invalidateQueries(['services']);
    },
  });
}

export function useUpdateService() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateServiceDto }) =>
      serviceApi.updateService(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['services']);
    },
  });
}
