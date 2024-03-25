import { supabase } from '../utils/supabase'

interface auth {
  email: string,
  password: string,
  username?: string,
}

export const login = async ({ email, password }: auth) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  console.log(data)

  return { data, error }
}

export const signUp = async ({ email, password, username }: auth) => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username
      },
    }
  });

  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  return error;
}