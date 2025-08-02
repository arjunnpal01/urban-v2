// User types for API
export interface User {
  id: string;
  name: string;
  email: string;
  // Add more fields as per backend
}

export interface UserCreateDto {
  name: string;
  email: string;
  password: string;
  // Add more fields as per backend
}
