-- Run this once in the Supabase SQL editor for your project
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  message text not null
);

alter table public.messages enable row level security;

-- Allow anyone (the public anon key used by the contact form) to insert
-- a message, but not to read, update, or delete existing ones.
create policy "Anyone can submit a contact message"
  on public.messages
  for insert
  to anon
  with check (true);
