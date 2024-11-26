
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ixtslbdqunbjjoxenemg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dHNsYmRxdW5iampveGVuZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0NDgwNTgsImV4cCI6MjA0ODAyNDA1OH0.4Jtt02Uhuu55D0JLzXrK62ZVWMjWi8WDYm--hzM1-FI';
const supabase = createClient(supabaseUrl, supabaseKey)