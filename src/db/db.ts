import { supabase } from '../utils/supabase';

const getLinksData = async () => {
  const { data } = await supabase.from("links").select();

  return data;
}

export default getLinksData;