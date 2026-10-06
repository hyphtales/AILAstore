/*
# Create newsletter, contact, and partner submission tables

1. New Tables
- `newsletter_subscriptions` — stores email subscriptions to the AILA Store newsletter
  - id (uuid, PK)
  - email (text, unique, not null)
  - created_at (timestamptz, default now())
- `contact_messages` — stores messages sent through the contact form
  - id (uuid, PK)
  - name (text, not null)
  - email (text, not null)
  - subject (text, not null)
  - message (text, not null)
  - created_at (timestamptz, default now())
- `partner_applications` — stores partnership applications from game studios/creators
  - id (uuid, PK)
  - studio_name (text, not null)
  - contact_name (text, not null)
  - email (text, not null)
  - project_name (text, not null)
  - project_type (text, not null)
  - message (text, not null)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on all three tables.
- Allow anon + authenticated CRUD since these are public submission forms (no sign-in required).
- USING (true) is intentional: the data is public submission data with no ownership concept.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_select_newsletter"
ON newsletter_subscriptions FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_insert_newsletter"
ON newsletter_subscriptions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_newsletter" ON newsletter_subscriptions;
CREATE POLICY "anon_delete_newsletter"
ON newsletter_subscriptions FOR DELETE
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact"
ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_contact" ON contact_messages;
CREATE POLICY "anon_select_contact"
ON contact_messages FOR SELECT
TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS partner_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  studio_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  project_name text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_partner" ON partner_applications;
CREATE POLICY "anon_insert_partner"
ON partner_applications FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_partner" ON partner_applications;
CREATE POLICY "anon_select_partner"
ON partner_applications FOR SELECT
TO anon, authenticated USING (true);
