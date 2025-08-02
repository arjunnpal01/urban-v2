// src/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { login, LoginPayload, LoginResponse } from "@/api/auth";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,
  });
};
