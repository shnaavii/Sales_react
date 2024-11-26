// src/auth.js
import { supabase } from '@/Components/Client_supabase';

export const signUp = async (Name,email, password) => {
    return await supabase.auth.signUp({ Name,email, password });
};

export const signIn = async (email, password) => {
    return await supabase.auth.signIn({ email, password });
};

export const signOut = async () => {
    return await supabase.auth.signOut();
};