-- Copy and paste this into the Supabase SQL Editor to create your waitlist table

create table public.waitlist (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text not null unique,
  role text not null check (role in ('founder', 'creator'))
);

-- Set up Row Level Security (RLS)
-- Allow anyone to insert (so public users can join the waitlist)
alter table public.waitlist enable row level security;

create policy "Allow public inserts" on public.waitlist
  for insert
  with check (true);

-- Only authenticated admins can view the data (or you can just view it in the dashboard)
create policy "Allow authenticated selects" on public.waitlist
  for select
  to authenticated
  using (true);
