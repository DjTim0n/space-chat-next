import { AuthState, AuthStore } from "@/store/platform/types";
import { createStore } from "zustand";
import { persist } from "zustand/middleware";

export const defaultInitState: AuthState = {
  acceess_token: undefined,
  isAuth: false,
  username: undefined,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()(
    persist(
      (set) => ({
        ...initState,
        setIsAuth(isAuth, username, acceess_token) {
          set({ isAuth, username, acceess_token });
        },
      }),
      {
        name: "auth-store",
      }
    )
  );
};
