import type { LoginInput } from "../schemas/login-schema";

export type { LoginInput };

export interface AuthState {
  isLoading: boolean;
  error?: string | null;
}
