// src/api/auth.ts
import axios from "@/lib/client";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};
