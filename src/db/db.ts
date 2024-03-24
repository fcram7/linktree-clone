import { createClient } from "@supabase/supabase-js";

const supabaseDb = createClient(import.meta.env.VITE_SUPABASE_PROJECT, import.meta.env.VITE_ANON_KEY);

const getLinksData = async () => {
  const { data } = await supabaseDb.from("links").select();

  return data;
}

export default getLinksData;