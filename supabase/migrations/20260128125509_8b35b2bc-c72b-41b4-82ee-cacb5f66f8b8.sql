-- Create contact_queries table for storing form submissions
CREATE TABLE public.contact_queries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  enquiry_type TEXT NOT NULL DEFAULT 'general',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_queries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert queries (public contact form)
CREATE POLICY "Anyone can submit contact queries"
ON public.contact_queries
FOR INSERT
WITH CHECK (true);

-- Only allow reading queries via backend/admin (no public SELECT)
CREATE POLICY "No public read access"
ON public.contact_queries
FOR SELECT
USING (false);