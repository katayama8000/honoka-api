// import type { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jqovxmsueffhddmyqcew.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey) {
    console.error("Missing Supabase Key");
    throw new Error("Missing Supabase Key");
}

export const supabase = createClient(supabaseUrl, supabaseKey);