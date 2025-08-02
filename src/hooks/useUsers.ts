import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as userApi from '../api/users';
import { User, UserCreateDto } from '../types/user';

export function useUsers() {
  return useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
  });
}

export function useUser(id: string) {
  return useQuery<User, Error>({
    queryKey: ['users', id],
    queryFn: () => userApi.getUserById(id),
    enabled: !!id,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });
}
