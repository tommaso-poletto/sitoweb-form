import { createClient } from '@supabase/supabase-js';

// Environment variables
// Note: In Vite, we use import.meta.env
// For a robust implementation, we should check if these exist.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabaseClient: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn(
    'Supabase URL or Anon Key is missing. Database operations will be mocked or skipped.'
  );
}

export const supabase = supabaseClient;
