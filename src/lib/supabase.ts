import { createClient } from "@supabase/supabase-js";
import type { Database } from "../types/supabase";

const supabaseUrl = "https://jqovxmsueffhddmyqcew.supabase.co";

export const supabase = (apiKey: string) =>
    createClient<Database>(supabaseUrl, apiKey);
