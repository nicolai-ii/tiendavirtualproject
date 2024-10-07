import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://supabase.com/dashboard/project/hzsuccgzdjbfbahiyzey';
const supabaseKey = 'Caribesoy234*';
export const supabase = createClient(supabaseUrl, supabaseKey);
