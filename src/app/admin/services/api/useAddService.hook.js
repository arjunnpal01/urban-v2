import { useApiQuery } from '@/shared/hooks/useApiQuery';
import { useApiMutation } from '@/shared/hooks/useApiMutation';



// Custom hook using the shared useApiQuery (for demo GET)
export function useGetServices() {
  return useApiQuery({
    queryKey: ['services'],
    url: '/services',
    method: 'get',
  });
}


// Custom mutation hook for adding a new service
export function useAddServiceMutation() {
  return useApiMutation({
    queryKey: ['services'],
    url: '/services',
    method: 'post',
    invalidateKeys: ['services'],
  });
}

// Hook to fetch all services (actual data)
export function useAddService() {
  return useApiQuery({
    queryKey: ['services'],
    url: '/services',
    method: 'get',
  });
}
