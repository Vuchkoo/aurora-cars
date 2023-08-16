import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://xdozreaqiqwxqzmajaha.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhkb3pyZWFxaXF3eHF6bWFqYWhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2NTYxNjgsImV4cCI6MjAwNzIzMjE2OH0.eyxw62jw5TaXEJqleepMczUtGZRpln1bVlRKgkjgYUM"
);
