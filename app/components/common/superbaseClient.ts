import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.superbaseUrl;
const supabaseAnonKey = process.env.superbaseKey;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or API Key is missing.');
  process.exit(1);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
