import { supabase } from '../utils/supabase';

interface linksData {
  title: string,
  url: string,
  icon: string,
  id?: number,
  user_id: string | undefined
}

export const getLinksData = async (user_id: string) => {
  const { data, error } = await supabase.from("links_new").select("*").eq("user_id", user_id);

  return { data, error };
}

export const getGeneratedLinksData = async () => {
  const { data: generatedLinks, error: generatedLinksError } = await supabase.from("links_new").select("id, title, url, icon");

  return { data: generatedLinks, error: generatedLinksError}
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
  const { error } = await supabase.from("links_new").delete().eq("id", id);

  return error;
}