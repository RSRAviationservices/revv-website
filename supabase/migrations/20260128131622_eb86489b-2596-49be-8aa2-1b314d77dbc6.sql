-- Drop the restrictive policies and create permissive ones
DROP POLICY IF EXISTS "Anyone can submit contact queries" ON public.contact_queries;
DROP POLICY IF EXISTS "No public read access" ON public.contact_queries;

-- Create a PERMISSIVE policy for inserts (allows anyone to submit)
CREATE POLICY "Anyone can submit contact queries"
ON public.contact_queries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create a RESTRICTIVE policy for selects (blocks public reads)
CREATE POLICY "No public read access"
ON public.contact_queries
FOR SELECT
USING (false);