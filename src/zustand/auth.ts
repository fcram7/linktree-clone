import { create } from 'zustand';

interface userCredentials {
  email: string,
  password: string,
}

interface userCredentialsAction {
  setEmail: (email: userCredentials['email']) => void,
  setPassword: (password: userCredentials['password']) => void,
}

const useAuthStore = create<userCredentials & userCredentialsAction>((set) => ({
  email: "",
  password: "",
  setEmail: (email) => set(() => ({ email: email })),
  setPassword: (password) => set(() => ({ password: password })),
}));

export default useAuthStore;