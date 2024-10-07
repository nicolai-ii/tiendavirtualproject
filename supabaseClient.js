import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hzsuccgzdjbfbahiyzey.supabase.co';
const supabaseKey = 'Caribesoy234*';
export const supabase = createClient(supabaseUrl, supabaseKey);
