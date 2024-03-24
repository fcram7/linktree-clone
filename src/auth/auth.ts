import { supabase } from '../utils/supabase'

interface auth {
  email: string,
  password: string
}

export const login = async ({ email, password }: auth) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  return { data, error }
}

export const signUp = async ({ email, password }: auth) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "http://localhost:5173/login"
    }
  });

  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  return error;
}