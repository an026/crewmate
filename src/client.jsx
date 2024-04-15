import { createClient } from "@supabase/supabase-js";

const URL = "https://mhupclcvldbrdvilvcfj.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odXBjbGN2bGRicmR2aWx2Y2ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjgxNjUsImV4cCI6MjAyODAwNDE2NX0.g9SJF1dLoQg5LYzizueHqujdf8xaHgsUsR2XFPGxr00";
export const supabase = createClient(URL, API_KEY);