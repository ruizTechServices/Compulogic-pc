import { configDotenv } from 'dotenv';
// src/routes/+layout.ts
configDotenv();
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
    depends("supabase:auth");

    if (!process.env.SUPABASE_URL) {
        throw new Error("Missing SUPABASE_URL environment variable");
    }

    const supabaseUrl = process.env.SUPABASE_URL as string;

    const supabaseKey = process.env.SUPABASE_ANON_KEY ?? "";

    const supabase = createSupabaseLoadClient({
        supabaseUrl,
        supabaseKey,
        event: { fetch },
        serverSession: data.session,
    });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return { supabase, session };
};
