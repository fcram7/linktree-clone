import { create } from 'zustand';

interface userCredentials {
  username: string,
  email: string,
  password: string,
}

interface userCredentialsAction {
  setUsername: (username: userCredentials['username']) => void,
  setEmail: (email: userCredentials['email']) => void,
  setPassword: (password: userCredentials['password']) => void,
}

const useAuthStore = create<userCredentials & userCredentialsAction>((set) => ({
  username: "",
  email: "",
  password: "",
  setUsername: (username) => set(() => ({ username: username })),
  setEmail: (email) => set(() => ({ email: email })),
  setPassword: (password) => set(() => ({ password: password })),
}));

export default useAuthStore;