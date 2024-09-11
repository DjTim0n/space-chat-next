export type AuthState = {
  isAuth: boolean;
  username: string | undefined;
  acceess_token: string | undefined;
};

export type AuthActions = {
  setIsAuth: (isAuth: boolean, username: string, acceess_token: string) => void;
};

export type AuthStore = AuthActions & AuthState;
