import { supabase } from '../utils/supabase';

interface linksData {
  title: string,
  url: string,
  icon: string,
  id?: number,
}

export const getLinksData = async () => {
  const { data, error } = await supabase.from("links").select();

  return { data, error };
}

export const addLinksData = async ({ title, url, icon }: linksData) => {
  const { data, error } = await supabase.from("links").insert({ title, url, icon });

  return { data, error };
}

export const editLinksData = async ({ id, title, url, icon }: linksData) => {
  const { data, error } = await supabase.from("links").update({ title, url, icon }).eq("id", id)

  return { data, error };
}

export const deleteLinksData = async (id: number) => {
  const { error } = await supabase.from("links").delete().eq("id", id);

  return error;
}

