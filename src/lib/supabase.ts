import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jqovxmsueffhddmyqcew.supabase.co";

export const supabase = (apiKey: string) => createClient(supabaseUrl, apiKey)
