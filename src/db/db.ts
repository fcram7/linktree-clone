import { supabase } from '../utils/supabase';

interface linksData {
  title: string,
  url: string,
  icon: string,
  id?: number,
  user_id: string
}

export const getLinksData = async () => {
  // const { data, error } = await supabase.from("links").select();
  const { data, error } = await supabase.from("links_new").select("user_id, icon, title, url, id");

  return { data, error };
}

export const addLinksData = async ({ title, url, icon, user_id }: linksData) => {
  const { data, error } = await supabase.from("links_new").insert([{ title: title, url: url, icon: icon, user_id: user_id }]).select();

  return { data, error };
}

export const editLinksData = async ({ id, title, url, icon, user_id }: linksData) => {
  const { data, error } = await supabase.from("links_new").update({ title: title, url: url, icon: icon, user_id: user_id }).eq("id", id).select();

  return { data, error };
}

export const deleteLinksData = async (id: number) => {
  const { error } = await supabase.from("links_new").delete().eq("id" && "userId", id);

  return error;
}

