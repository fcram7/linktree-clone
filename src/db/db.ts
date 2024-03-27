import { supabase } from '../utils/supabase';

interface linksData {
  title: string,
  url: string,
  icon: string
}

export const getLinksData = async () => {
  const { data } = await supabase.from("links").select();

  return data;
}

export const addLinksData = async ({ title, url, icon }: linksData) => {
  const { data } = await supabase.from("links").insert({ title, url, icon });

  return data;
}

