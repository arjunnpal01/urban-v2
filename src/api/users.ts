// Example: User API functions
import api from '../lib/axios';
import { User, UserCreateDto } from '../types/user';

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get('/users');
  return data;
};

export const getUserById = async (id: string): Promise<User> => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const createUser = async (user: UserCreateDto): Promise<User> => {
  const { data } = await api.post('/users', user);
  return data;
};

// Add more user-related API functions as needed
